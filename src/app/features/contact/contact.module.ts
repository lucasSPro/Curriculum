import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact.routing';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    PipesModule,
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
