import { ISubject } from "./subject.interface";

export interface ICourse {
    id: number;
    year: number;
    period: number;
    id_teacher: number;
    group: string;
    subject_id: number | ISubject;
}
