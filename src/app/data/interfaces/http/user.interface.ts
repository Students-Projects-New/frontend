import { IRole } from "./role.interface";

export interface IUser {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    picture: string;
    is_active: boolean;
    roles: IRole[];
    has_sgbd_user: boolean;
}
