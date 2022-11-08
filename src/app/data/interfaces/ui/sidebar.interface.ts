import { ROLE } from '@data/enums/role.enum';

export interface ISidebar {
    title: string;
    children: ISidebarChild[];
}

export interface ISidebarChild {
    name: string;
    icon: string;
    path?: string;
    paths?: ISidebarChildPath[];
    roles?: ROLE[];
}

export interface ISidebarChildPath extends Omit<ISidebarChild, 'icon'| 'paths'> {}