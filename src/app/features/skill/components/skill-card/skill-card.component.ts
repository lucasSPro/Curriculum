import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {
  @Input() name: string = '';
  @Input() image: string = '';
  @Input() porcentage: number = 0;

  ngOnInit() {
    this.animateProgressBar();
  }

  animateProgressBar() {
    let targetPercentage = this.porcentage;
    let currentPercentage = 0;

    const interval = setInterval(() => {
      currentPercentage += 5;
      if (currentPercentage >= targetPercentage) {
        this.porcentage = targetPercentage;
        clearInterval(interval);
      } else {
        this.porcentage = currentPercentage;
      }
    }, 100);
  }
}
