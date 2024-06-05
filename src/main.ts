// import '../dotenv-loader';
// import { enableProdMode } from '@angular/core';

// import * as dotenv from 'dotenv';

// dotenv.config();


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// if (environment.production || environment.firebaseConfig ) {
//   enableProdMode();
// }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
