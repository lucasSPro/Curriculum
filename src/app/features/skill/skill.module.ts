import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillComponent } from './skill.component';
import { SkillRoutingModule } from './skill.routing';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { SkillCardComponent } from './components/skill-card/skill-card.component';

@NgModule({
  imports: [
    CommonModule,
    SkillRoutingModule,
    PipesModule,
  ],
  declarations: [
    SkillComponent,
    SkillCardComponent,
  ]
})
export class SkillModule { }
