import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about.routing';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { AboutItemComponent } from './components/about-item/about-item.component';



@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    AboutRoutingModule,
  ],
  declarations: [
    AboutComponent,
    AboutItemComponent
  ]
})
export class AboutModule { }
