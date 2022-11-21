import { ISubject } from "./subject.interface";

export interface ISubjectPeriod {
    id_subject: ISubject;
    id_teacher: number;
    group: string;
}