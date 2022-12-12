export interface IDatabase {
    id: number;
    id_user: number;
    context: string;
    count: number;
    type: ITypeDatabase;
}

export interface ITypeDatabase {
    id: number;
    type: string;
    image?: string;
    description?: string;
    link?: string;
}
