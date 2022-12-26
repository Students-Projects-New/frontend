import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';

import { IUserDto } from '@data/interfaces';

@Injectable({
    providedIn: 'root'
})
export class ContributorsMock {

    private contributors: Record<number, IUserDto> = {
        1: {
            id: 1,
            first_name: 'John',
            last_name: 'Doe',
            picture: 'students-projects/assets/img/projects/product1.jpg'
        },
        2: {
            id: 1,
            first_name: 'John',
            last_name: 'Doe',
            picture: 'students-projects/assets/img/projects/product1.jpg'
        },
        3: {
            id: 1,
            first_name: 'John',
            last_name: 'Doe',
            picture: 'students-projects/assets/img/projects/product1.jpg'
        },
        4: {
            id: 1,
            first_name: 'John',
            last_name: 'Doe',
            picture: 'students-projects/assets/img/projects/product1.jpg'
        },
        5: {
            id: 1,
            first_name: 'John',
            last_name: 'Doe',
            picture: 'students-projects/assets/img/projects/product1.jpg'
        },
        6: {
            id: 1,
            first_name: 'John',
            last_name: 'Doe',
            picture: 'students-projects/assets/img/projects/product1.jpg'
        },
        7: {
            id: 1,
            first_name: 'John',
            last_name: 'Doe',
            picture: 'students-projects/assets/img/projects/product1.jpg'
        },
    };


    constructor() { }

    public getContributors(): Observable<Record<number, IUserDto>> {
        return observableOf(this.contributors);
    }

}