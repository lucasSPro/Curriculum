import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about.routing';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';



@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    AboutRoutingModule,
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule { }
