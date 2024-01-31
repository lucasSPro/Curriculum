import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index.routing';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';


@NgModule({
  imports: [
    CommonModule,

    IndexRoutingModule,
    PipesModule,
  ],
  declarations: [
    IndexComponent
  ]
})
export class IndexModule { }
