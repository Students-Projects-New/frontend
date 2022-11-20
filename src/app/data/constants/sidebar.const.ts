import { ISidebar } from "@data/interfaces";
import { ROLE } from "@data/enums/role.enum";

export const MENU_ITEMS: ISidebar[] = [
    {
        title: "Principal",
        children: [
            {
                title: "Dashboard",
                icon: "fas fa-home",
                link: "/dashboard",
                expanded: false,
            },
        ],
    },
    {
        title: "Modulos",
        children: [
            {
                title: 'Academico',
                icon: 'fas fa-graduation-cap',
                roles: [ROLE.ADMIN, ROLE.SUPPORT, ROLE.TEACHER],
                expanded: true,
                children: [
                    {
                        title: 'Materias',
                        link: '/academics/subjects',
                        roles: [ROLE.ADMIN, ROLE.SUPPORT]
                    },
                    {
                        title: 'Materia Periodo',
                        link: '/academics/subject-period',
                        roles: [ROLE.ADMIN, ROLE.SUPPORT]
                    },
                    { 
                        title: 'Cursos',
                        link: '/academics/courses',
                        roles: [ROLE.ADMIN, ROLE.SUPPORT, ROLE.TEACHER]
                    }
                ],
            },
            {
                title: 'Proyectos',
                icon: 'fas fa-columns',
                link: '/projects',
                expanded: false,
                roles: [ROLE.STUDENT]
            },
            {
                title: 'Usuarios',
                icon: 'fas fa-users',
                link: '/users',
                expanded: false,
                roles: [ROLE.ADMIN, ROLE.SUPPORT]
            }
        ]
    }
];