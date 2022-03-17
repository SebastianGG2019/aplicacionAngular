// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// import * as packageInfo from './auth_config.json';

export const environment = {
  production: false,
  auth: {
    domain: "agr-test-tenant.us.auth0.com",
    clientId: "IUG8PC3avok0eZ7qi9nygpt93GloiKUi",
    redirectUri: window.location.origin,
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
