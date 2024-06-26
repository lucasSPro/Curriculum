import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ICertificate } from '../../interfaces/ICertificate';

@Component({
  selector: 'app-certificate-card',
  templateUrl: './certificate-card.component.html',
  styleUrls: ['./certificate-card.component.scss']
})
export class CertificateCardComponent implements OnInit {

  icon_eye = faEye;
  @Output() certificateCodeClick: EventEmitter<number> = new EventEmitter<number>();
  @Input() certificate!: ICertificate;

  constructor() { }

  ngOnInit() {
  }

  emitCertificateCode() {
    this.certificateCodeClick.emit(this.certificate.code);
  }
}
