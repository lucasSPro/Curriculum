import { Component, Input, OnInit } from '@angular/core';

import { ISkill } from '../../interfaces/ISkill';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {

  @Input() skill!: ISkill;

  ngOnInit() {
    this.animateProgressBar();
  }

  animateProgressBar() {
    let targetPercentage = this.skill.percent;
    let currentPercentage = 0;

    const interval = setInterval(() => {
      currentPercentage += 5;
      if (currentPercentage >= targetPercentage) {
        this.skill.percent = targetPercentage;
        clearInterval(interval);
      } else {
        this.skill.percent = currentPercentage;
      }
    }, 100);
  }
}
