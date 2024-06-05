import { Component, OnInit } from '@angular/core';

import { GlobalMessage } from 'src/app/shared/service/global-message.service';
import { SkillService } from './services/skill.service';
import { Observable } from 'rxjs';
import { ISkill } from './interfaces/ISkill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  skill: string = '< Conhecimentos />'
  loading: boolean = true;

  skills$: Observable<ISkill[]> | undefined;
  listSkill!: ISkill[];

  constructor(private globalMessage: GlobalMessage, private skillService: SkillService) {
  }

  ngOnInit() {
    this.globalMessage.messageFromHireMe(true);
    this.globalMessage.messageInnitialPage(false);
    //this.addListSkill();
    this.globalMessage.showSpinner();

    this.skills$ = this.skillService.getAllSkills();
    this.skills$.subscribe(skills => {
      this.globalMessage.hideSpinner();
      if(skills.length > 0){
        this.loading = false;
        this.listSkill = skills.sort((a, b) => {
          if (a.profisional && !b.profisional) {
            return -1;
          }
          if (!a.profisional && b.profisional) {
            return 1;
          }
          return 0;
        });
      }
    });
  }

  addListSkill(): void {
    this.skillService.addDocumentList(this.listSkill).then(() => {
      console.log('skill added successfully');
    }).catch(error => {
      console.error('Error adding skill:', error);
    });
  }

  selectingSkillByActing(){

  }
}
