// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    api_url: 'https://localhost:5001/api',
    maxBirthDate: new Date(1999, 1, 1),
    minBirthDate: new Date(1910, 1, 1),
    maxFlightDate: new Date(2020, 1, 1),
    minFlightDate: new Date(2018, 7, 30),
    maxCreationDate: new Date(2018, 1, 1),
    minCreationDate: new Date(1978, 1, 1),
    maxExperienceDays: 35000,
    minExperienceDays: 30,
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
