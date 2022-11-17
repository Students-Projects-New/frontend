export interface ITagElement {
    id_project_tag: number;
    tag: ITag;
}

export interface ITag {
    id: number;
    type_tag: ITypeTag;
    name: string;
}

export interface ITypeTag {
    id: number;
    name: string;
}
