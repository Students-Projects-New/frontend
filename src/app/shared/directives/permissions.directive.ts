import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { AuthService } from '@core/authentication';
import { CurrentProjectService } from '@modules/projects';
import { User } from '@data/models';

@Directive({
  selector: '[appPermissions]'
})
export class PermissionsDirective implements OnInit, OnDestroy {

  private currentUser: User = this.authService.getCurrentUserSubject();
  private permissions: string[] = [];
  private unsubscribe$ = new Subject<void>();

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService,
    private currentProjectService: CurrentProjectService
  ) { }

  ngOnInit(): void {
    this.authService.currentUser
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((user: User) => {
        this.currentUser = user;
        this.updateView();
      });
  }

  @Input()
  set appPermissions(permissions: string[]) {
    this.permissions = permissions;
    this.updateView();
  }

  private updateView(): void {
    this.viewContainer.clear();
    if (this.checkPermission()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  private get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  private hasWrite(): boolean {
    const hasWrite = this.currentProjectService.isContributorOrOwner(this.currentUser.id);
    return this.isLoggedIn && hasWrite;
  }

  private hasMaintainer(): boolean {
    const hasMaintainer = this.currentProjectService.isOwner(this.currentUser.id);
    return this.isLoggedIn && hasMaintainer;
  }

  private checkPermission(): boolean {
    let hasPermission = false;
    if (this.permissions.length > 0) {
      this.permissions.forEach((permission: string) => {
        if (permission === 'write') {
          hasPermission = this.hasWrite();
        } else if (permission === 'maintainer') {
          hasPermission = this.hasMaintainer();
        }
      });
    }
    return hasPermission;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
