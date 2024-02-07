import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkRoutingModule } from './work.routing';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { WorkComponent } from './work.component';
import { WorkCardComponent } from './components/work-card/work-card.component';
import { WorkModalComponent } from './components/work-modal/work-modal.component';

@NgModule({
  imports: [
    CommonModule,
    WorkRoutingModule,
    PipesModule,
    FontAwesomeModule,
  ],
  declarations: [
    WorkComponent,
    WorkCardComponent,
    WorkModalComponent,
  ]
})
export class WorkModule { }
