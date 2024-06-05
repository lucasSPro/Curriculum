import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { faChevronLeft, faChevronRight, faClose } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IWork } from '../../interfaces/IWork';
import { WorkService } from '../../services/work.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-work-modal',
  templateUrl: './work-modal.component.html',
  styleUrls: ['./work-modal.component.scss']
})
export class WorkModalComponent implements OnInit, OnChanges {

  @Input() work!: IWork;
  @Input() title: string = 'Modal';
  @Input() showModal: boolean = false;
  @Input() firstWork: boolean = false;
  @Input() lastWork: boolean = false;
  @Output() closeModalEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() changeWorkModalEvent: EventEmitter<number> = new EventEmitter<number>();

  playerState: number | null = null;
  skills: any = [];

  icon_close = faClose;
  icon_chevron_left = faChevronLeft;
  icon_chevron_right = faChevronRight;


  constructor(private sanitizer: DomSanitizer, private workService: WorkService) { }
  ngOnChanges(): void {

  }

  ngOnInit() {

  }

  get sanitizedUrl(): SafeResourceUrl | null  {
    return this.work.youtube ? this.sanitizer.bypassSecurityTrustResourceUrl(this.work.youtube) : null;
  }

  closeModal() {
    this.skills = [];
    this.closeModalEvent.emit();
  }
  changeWork(control: number) {
    this.skills = [];

    this.changeWorkModalEvent.emit(control);
  }



}
