import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

import { faEye } from '@fortawesome/free-solid-svg-icons';


export interface IWork  {
  code: number,
  name: string,
  caption: string,
  about: string,
  tecnologies: string[],
  image: string,
  thumbnail: string,
  urlSafe: SafeResourceUrl | null,
  youtube?: string | null,
  github?: string | null,
  playstore?: string | null,
}

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
}
