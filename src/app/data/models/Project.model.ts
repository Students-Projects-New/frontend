import { IProject, ITagElement, IStage } from "@data/interfaces";

export class Project implements IProject {
    constructor(
        public id: number,
        public id_user: number,
        public name: string,
        public description: string,
        public image: string,
        public context: string,
        public port_container: number,
        public url: string,
        public static_path: string,
        public subjects_period: number[],
        public tags: ITagElement[],
        public stages: IStage[],
        public collaborators: number[],
        public subjects: number[],
        public running: boolean,
        public guid: string,
        public created_at: Date,
        public updated_at: Date,
    ) { }
}
