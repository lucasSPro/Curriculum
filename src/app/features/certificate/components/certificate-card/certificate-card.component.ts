import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { faEye } from '@fortawesome/free-solid-svg-icons';

export interface ICertificate  {
  code: number,
  name: string,
  caption: string,
  issuer: string,
  image: string,
  thumbnail: string,
  year: number,
  workload: number,
}

@Component({
  selector: 'app-certificate-card',
  templateUrl: './certificate-card.component.html',
  styleUrls: ['./certificate-card.component.scss']
})
export class CertificateCardComponent implements OnInit {

  icon_eye = faEye;
  @Output() certificateCodeClick: EventEmitter<number> = new EventEmitter<number>();
  @Input() certificate!: ICertificate
  modalOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

  emitCertificateCode() {
    this.certificateCodeClick.emit(this.certificate.code);
  }
}
