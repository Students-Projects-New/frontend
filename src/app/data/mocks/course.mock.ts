import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';

import { ICourse } from '@data/interfaces';

@Injectable({
    providedIn: 'root'
})
export class CourseMock {

    private currentValue = Math.floor(Math.random() * 4) + 1;
    private courses: ICourse[] = [
        {
            id: 1,
            year: "2022",
            period: "2",
            image: `assets/img/courses/${this.currentValue}.svg`,
            id_teacher: 1151811,
            group: "A",
            id_subject: {
                id: 3,
                code: "1155104",
                name: "FUNDAMENTOS DE PROGRAMACION"
            }
        },
    ];

    constructor() { }

    public getCourses(): Observable<ICourse[]> {
        return observableOf(this.courses);
    }

    public getCourse(id: number): Observable<ICourse> {
        return observableOf(this.courses.find(course => course.id === id)!);
    }

}