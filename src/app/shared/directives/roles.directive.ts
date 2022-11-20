import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { AuthService } from '@core/authentication/auth.service';
import { User } from '@data/models';

@Directive({
  selector: '[appRoles]'
})
export class RolesDirective implements OnInit, OnDestroy {

  private currentUser!: User;
  private roles!: string[];
  private unsubscribe$ = new Subject<void>();

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    console.table(this.roles);
    this.authService.currentUser
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((user: User) => {
        this.currentUser = user;
        this.updateView();
      });
  }

  @Input()
  set appRoles(roles: string[]) {
    this.roles = roles;
    this.updateView();
  }

  private updateView(): void {
    if (this.currentUser && this.hasRoles()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  private hasRoles(): boolean {
    const isLoggedIn = this.authService.isLoggedIn();
    const hasRole = true;
    return isLoggedIn && hasRole;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
