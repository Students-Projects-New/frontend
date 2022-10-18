import { IProject } from "@data/interfaces";

export class Project implements IProject {
    constructor(
        public id: number,
        public id_user: number,
        public context: string,
        public port_container: number,
        public url: string,
        public static_path: string,
    ) { }
}
