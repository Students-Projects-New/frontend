import { ITagElement } from './tag.interface';
import { IStage } from './stage.interface';

export interface IProject {
    id: number;
    id_user: number;
    name: string;
    description: string;
    image: string;
    context: string;
    port_container: number;
    url: string;
    static_path: string;
    subjects_period: number[];
    tags: ITagElement[];
    stages: IStage[];
    collaborators: number[];
    subjects: number[];
    running: boolean;
    guid: string;
    created_at: Date;
    updated_at: Date;
}
