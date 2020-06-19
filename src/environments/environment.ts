// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'https://newsapi.org/v2/top-headlines?',
  firebaseConfig: {
    apiKey: "AIzaSyAez3GmLBI3Ylr-5UoGwP4gyQIZzyzVv-8",
    authDomain: "bambu-login-278a5.firebaseapp.com",
    databaseURL: "https://bambu-login-278a5.firebaseio.com",
    projectId: "bambu-login-278a5",
    storageBucket: "bambu-login-278a5.appspot.com",
    messagingSenderId: "301189597846",
    appId: "1:301189597846:web:6897e971af85604305d0b7"
  }
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
