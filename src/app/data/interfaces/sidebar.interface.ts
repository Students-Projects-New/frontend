import { ROLE } from '@data/enums/role.enum';

export interface ISidebar {
    title: string;
    children: {
        name: string;
        icon: string;
        path: string;
        roles?: ROLE[];
    }[];
}
