export interface IProject {
    id: number;
    id_user: number;
    name?: string;
    description?: string;
    image?: string;
    context: string;
    port_container: number;
    url: string;
    static_path: string;
    created_at?: Date;
}
