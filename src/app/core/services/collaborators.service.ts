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
  private contributorSubject: BehaviorSubject<IDictionary<IUserDto>>;
  public readonly contributors: Observable<IDictionary<IUserDto>>;

  constructor(private http: HttpClient) {
    this.contributorSubject = new BehaviorSubject<IDictionary<IUserDto>>({});
    this.contributors = this.contributorSubject.asObservable();
  }

  public get contributorsValue(): IDictionary<IUserDto> {
    return this.contributorSubject.value;
  }

  public getCollaborators(ids: number[]): Observable<IUserDto[]> {
    return this.http.post<IUserDto[]>(`${this.url}/${HttpApi.collaborators}/`, { id_users: ids })
      .pipe(
        tap((contributors: IUserDto[]) => {
          const dictionary: IDictionary<IUserDto> = {};
          contributors.forEach((contributor: IUserDto) => {
            dictionary[contributor.id] = contributor;
          });
          this.contributorSubject.next(dictionary);
        })
      );
  }


}
