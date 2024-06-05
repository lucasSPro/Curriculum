import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact.routing';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

library.add(fab);

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule,
    ContactRoutingModule,
    PipesModule,
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
