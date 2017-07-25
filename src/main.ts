import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './views/lib/app.module';

import 'platypus';
import 'platypusui';

platformBrowserDynamic().bootstrapModule(AppModule);