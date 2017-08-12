import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode, isDevMode } from '@angular/core';
import { AppModule } from './views/lib/app.module';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
} else {
  isDevMode();
}

/*I have commentted out these two imports. This causes an infinite loop. 
When these two imports are not commentted out, I get the following warning:

Uncaught Error: No NgModule metadata found for 'AppModule'. ---- compiler.es5.js:14704*/
// import 'reflect-metadata';
// import 'es6-shim';

platformBrowserDynamic().bootstrapModule(AppModule);