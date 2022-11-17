import { ITagElement } from './tag.interface';

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
    tags?: ITagElement[];
    created_at?: Date;
    updated_at?: Date;
}
