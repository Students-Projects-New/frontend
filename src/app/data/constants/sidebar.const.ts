import { ISidebar } from "@data/interfaces";
import { ROLE } from "@data/enums/role.enum";

export const MENU_ITEMS: ISidebar[] = [
    {
        title: "Principal",
        children: [
            {
                name: "Dashboard",
                icon: "fas fa-home",
                path: "/dashboard",
            },
        ],
    },
    {
        title: "Modules",
        children: [
            {
                name: 'Academico',
                icon: 'fas fa-graduation-cap',
                paths: [
                    {
                        name: 'Estudiantes',
                        path: '/academics/students',
                    },
                    {
                        name: 'Profesores',
                        path: '/academics/teachers',
                    },
                    {
                        name: 'Materias',
                        path: '/academics/subjects',
                    }
                ],
            },
            {
                name: 'Proyectos',
                icon: 'fas fa-columns',
                path: '/projects',
                roles: [ROLE.STUDENT]
            },
            {
                name: 'Usuarios',
                icon: 'fas fa-users',
                path: '/users',
                roles: [ROLE.ADMIN, ROLE.SUPPORT]
            }
        ]
    }
];