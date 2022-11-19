import { ISubjectPeriod } from "./subject-period.interface";

export interface ICourse extends ISubjectPeriod {
    id: number;
    year: string;
    period: string;
    image?: string;
}
