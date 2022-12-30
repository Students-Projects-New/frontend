const server = {
  protocol: 'https',
  hostname: 'studentsprojects.cloud.ufps.edu.co'
};

export const environment = {
  production: true,
  name: 'production',
  oauth: {
    googleClientId: '215382460353-qq2lc93pf3mdtvbg8560d7lumitronl8.apps.googleusercontent.com'
  },
  baseUrlAcademic: `${server.protocol}://${server.hostname}/sp_academic/academic/api/v1`,
  baseUrlProjects: `${server.protocol}://${server.hostname}/sp_project/projects/api/v1`,
  baseUrlAuth: `${server.protocol}://${server.hostname}/sp_user/auth/api/v1`,
  baseUrlUsers: `${server.protocol}://${server.hostname}/sp_user/users/api/v1`,
};
