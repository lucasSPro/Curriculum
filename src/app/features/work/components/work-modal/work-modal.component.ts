import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IWork } from '../work-card/work-card.component';
import { faChevronLeft, faChevronRight, faClose } from '@fortawesome/free-solid-svg-icons';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-work-modal',
  templateUrl: './work-modal.component.html',
  styleUrls: ['./work-modal.component.scss']
})
export class WorkModalComponent implements OnInit {

  @Input() work!: IWork;
  @Input() title: string = 'Modal';
  @Input() showModal: boolean = false;
  @Input() firstWork: boolean = false;
  @Input() lastWork: boolean = false;
  @Output() closeModalEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() changeWorkModalEvent: EventEmitter<number> = new EventEmitter<number>();

  playerState: number | null = null;

  icon_close = faClose;
  icon_chevron_left = faChevronLeft;
  icon_chevron_right = faChevronRight;


  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {}

  get sanitizedUrl(): SafeResourceUrl | null  {
    return this.work.youtube ? this.sanitizer.bypassSecurityTrustResourceUrl(this.work.youtube) : null;
  }

  closeModal() {
    this.closeModalEvent.emit();
  }
  changeWork(control: number) {
    this.changeWorkModalEvent.emit(control);
  }
}
