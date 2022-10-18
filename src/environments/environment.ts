// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const server = {
  protocol: 'http',
  hostname: '20.172.104.99',
  port: 80,
};

export const environment = {
  production: false,
  name: 'development',
  oauth: {
    googleClientId: '906303529522-pa3hcik7n8ib6r6cmgiis9e2ljm5l0h8.apps.googleusercontent.com'
  },
  baseUrl: `${server.protocol}://${server.hostname}:${server.port}/sp_project/projects/api/v1`,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
