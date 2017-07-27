import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import AppModule  from './views/lib/app.module';

import 'reflect-metadata';
import 'es6-shim';
import 'zone.js';
import 'platypus';
import 'platypusui';

platformBrowserDynamic().bootstrapModule(AppModule);