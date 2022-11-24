import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';

import { ROLE } from '@data/enums/role.enum';
import { IRole } from '@data/interfaces';

@Injectable({
    providedIn: 'root'
})
export class RolesMock {

    private roles: IRole[] = [
        {
            id: 1,
            name: ROLE.STUDENT
        },
        {
            id: 2,
            name: ROLE.ADMIN,
        },
        {
            id: 3,
            name: ROLE.TEACHER,
        }
    ];

    constructor() { }

    public getRoles(): Observable<IRole[]> {
        return observableOf(this.roles);
    }

}