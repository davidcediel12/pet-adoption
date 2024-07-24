import { LogLevel, Configuration, BrowserCacheLocation } from '@azure/msal-browser';

const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;
 
export const b2cPolicies = {
     names: {
         signUpSignIn: "B2C_1_FIRST_SIGNUP_SIGNIN"
     },
     authorities: {
         signUpSignIn: {
             authority: "https://petstoredc.b2clogin.com/petstoredc.onmicrosoft.com/B2C_1_FIRST_SIGNUP_SIGNIN",
         }
     },
     authorityDomain: "petstoredc.b2clogin.com"
 };
 
 
export const msalConfig: Configuration = {
     auth: {
         clientId: '115de516-ae8a-4db5-b63b-969c6696a848',
         authority: b2cPolicies.authorities.signUpSignIn.authority,
         knownAuthorities: [b2cPolicies.authorityDomain],
         redirectUri: '/', 
     },
     cache: {
         cacheLocation: BrowserCacheLocation.LocalStorage,
         storeAuthStateInCookie: isIE, 
     },
     system: {
         loggerOptions: {
            loggerCallback: (logLevel, message, containsPii) => {
                console.log(message);
             },
             logLevel: LogLevel.Verbose,
             piiLoggingEnabled: false
         }
     }
 }

export const protectedResources = {
  api: {
    endpoint: "http://localhost:3000/weatherforecast",
    scopes: ["https://petstoredc.onmicrosoft.com/my-api1/tasks.write"],
    failingEndpoint: "http://localhost:3000/weatherforecast/fail"
  },
}
export const loginRequest = {
  scopes: []
};