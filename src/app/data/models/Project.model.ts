import { IProject } from "@data/interfaces";

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
        public tags: any[],
        public stages: any[],
        public collaborators: number[],
    ) { }
}
