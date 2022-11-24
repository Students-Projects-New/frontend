import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { HttpApi } from '@core/http/http-api';
import { IDictionary, IUserDto } from '@data/interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorsService {

  private readonly url = `${environment.baseUrlUsers}`;
  private contributorSubject: BehaviorSubject<Record<number, IUserDto>>;
  public readonly contributors: Observable<Record<number, IUserDto>>;

  constructor(private http: HttpClient) {
    this.contributorSubject = new BehaviorSubject<Record<number, IUserDto>>({});
    this.contributors = this.contributorSubject.asObservable();
  }

  public setContributors(ids: number[]): Observable<IUserDto[]> {
    return this.http.post<IUserDto[]>(`${this.url}/${HttpApi.collaborators}/`, { id_users: ids })
      .pipe(
        tap((contributors: IUserDto[]) => {
          const contributorsDict: Record<number, IUserDto> = {};
          contributors.forEach((contributor: IUserDto) => {
            contributorsDict[contributor.id] = contributor;
          });
          this.contributorSubject.next(contributorsDict);
        })
      );
  }

  get contributorsValue(): Record<number, IUserDto> {
    return this.contributorSubject.getValue();
  }

  get currentContributors(): Observable<Record<number, IUserDto>> {
    return this.contributors;
  }

}
