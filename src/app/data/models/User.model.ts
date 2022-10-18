import { IUser } from "@data/interfaces";

export class User implements IUser {
    constructor(
        public id: number,
        public username: string,
        public email: string,
        public password: string,
        public role: string,
        public created_at: string,
        public updated_at: string,
    ) { }
}
