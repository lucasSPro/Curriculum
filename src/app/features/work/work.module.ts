import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work.component';
import { WorkRoutingModule } from './work.routing';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    WorkRoutingModule,
    PipesModule,
  ],
  declarations: [WorkComponent]
})
export class WorkModule { }
