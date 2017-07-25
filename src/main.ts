import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './views/lib/app.module';

import './views/navbar/navbar.component';
import './views/drawer/drawer.component';

import 'platypus';
import 'platypusui';

platformBrowserDynamic().bootstrapModule(AppModule);