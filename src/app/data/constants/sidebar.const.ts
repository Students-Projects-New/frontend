import { ISidebar } from "@data/interfaces";

export const MENU_ITEMS: ISidebar[] = [
    {
        title: 'Proyectos',
        icon: 'fas fa-columns',
        link: '/projects'
    },
    {
        title: 'Usuarios',
        icon: 'fas fa-users',
        link: '/users'
    },
    {
        title: 'Roles',
        icon: 'fas fa-user-tag',
        link: '/roles'
    },
    {
        title: 'Permisos',
        icon: 'fas fa-user-lock',
        link: '/permissions'
    },
    {
        title: 'Categorías',
        icon: 'fas fa-tags',
        link: '/categories'
    },
    {
        title: 'Tareas',
        icon: 'fas fa-tasks',
        link: '/tasks'
    },
];