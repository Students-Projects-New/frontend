import { IFile } from "./file.interface";

export interface IStage {
    id: number;
    status: Status;
    files: IFile[];
    name: string;
    description: string;
    created_at?: Date;
    updated_at?: Date;
}

export interface Status {
    id: number;
    status: string;
}
