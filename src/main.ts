import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule }  from './views/lib/app.module';

import 'reflect-metadata';
import 'es6-shim';

platformBrowserDynamic().bootstrapModule(AppModule);