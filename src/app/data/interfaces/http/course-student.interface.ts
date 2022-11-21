import { ICourse } from "./course.interface";

export interface ICourseStudent{
    id: number;
    id_student: number;
    id_subject_period: ICourse;
}
