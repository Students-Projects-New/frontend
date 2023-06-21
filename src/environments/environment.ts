// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const server = {
  protocol: 'https',
  hostname: '2c45-186-144-69-224.ngrok-free.app'
};

export const environment = {
  production: false,
  name: 'development',
  oauth: {
    googleClientId: '215382460353-qq2lc93pf3mdtvbg8560d7lumitronl8.apps.googleusercontent.com'
  },
  baseUrlAcademic: `${server.protocol}://${server.hostname}/sp_academic/academic/api/v1`,
  baseUrlProjects: `${server.protocol}://${server.hostname}/sp_project/projects/api/v1`,
  baseUrlAuth: `${server.protocol}://${server.hostname}/sp_user/auth/api/v1`,
  baseUrlUsers: `${server.protocol}://${server.hostname}/sp_user/users/api/v1`,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
