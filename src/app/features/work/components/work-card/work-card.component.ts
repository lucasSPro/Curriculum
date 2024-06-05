import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { faEye } from '@fortawesome/free-solid-svg-icons';
import { IWork } from '../../interfaces/IWork';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.scss']
})
export class WorkCardComponent implements OnInit {

  icon_eye = faEye;
  @Output() workButtonClick: EventEmitter<number> = new EventEmitter<number>();
  @Input() work!: IWork;

  constructor() { }

  ngOnInit() {}

  emitWork() {
    this.workButtonClick.emit(this.work.code);
  }

  openGitHub(): void {
    if (this.work.github) {
      window.open(this.work.github, '_blank');
    }
  }
  openPlaystore(): void {
    if (this.work.playstore) {
      window.open(this.work.playstore, '_blank');
    }
  }
}
