import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { GlobalMessage } from 'src/app/shared/service/global-message.service';
import { CertificateService } from './services/certificate.service';
import { ICertificate } from './interfaces/ICertificate';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent implements OnInit {
  certificates$: Observable<ICertificate[]> | undefined;
  certificate: string = '< Aprendizagem Contínua />'
  modalOpen: boolean = false;
  certificateModal!: ICertificate ;
  currentCertificateModal: number = 0;
  firstCertificate: boolean =  false;
  lastCertificate: boolean =  false;
  certificateWithMaxCode = 0;
  loading: boolean =  true;
  listCertificate!: ICertificate[] ;

  constructor(private globalMessage: GlobalMessage,
              private certificateService: CertificateService) { }

  ngOnInit() {
    this.globalMessage.messageFromHireMe(true);
    this.globalMessage.messageInnitialPage(false);
    //this.addListCertificate();
    this.certificates$ = this.certificateService.getAllCertificates();

    this.globalMessage.showSpinner();
    this.certificates$.subscribe(certificates => {
      this.listCertificate =  certificates.sort((a,b)=> a.code - b.code);
      this.globalMessage.hideSpinner();
      if(certificates.length > 0){
        this.loading = false;
      }
      this.certificateWithMaxCode = this.findMaxCode();
    });
  }

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

  handleCertificateCodeClick(code: number) {
    this.currentCertificateModal = code;
    if(code > 0){
      this.openModal();
    }
  }

  changeCertificate(numberCode: number): void {
    if (numberCode === 1) {
      this.currentCertificateModal++;
    } else if (numberCode === -1) {
      this.currentCertificateModal--;
    }
    if(this.currentCertificateModal > 0 && this.currentCertificateModal < (this.certificateWithMaxCode+1)){
      let certificateChanged = this.findCertificateByCode(this.currentCertificateModal);
      if(certificateChanged){
        this.certificateModal = certificateChanged;
        this.verifyCode(this.certificateModal.code);
      }
    }

  }

  verifyCode(code: number) {
    if (code === 1) {
      this.firstCertificate = true;
    } else {
      this.firstCertificate = false;
    }
    if (code === this.certificateWithMaxCode) {
      this.lastCertificate = true;
    } else {
      this.lastCertificate = false;
    }
  }

  openCertificateModal(code: number) {
    this.verifyCode(code);
    let currentCertificate = this.findCertificateByCode(code);
    if(currentCertificate !== null){
      this.certificateModal = currentCertificate;
      this.handleCertificateCodeClick(code);
    }
  }

  closeCertificateModal() {
    this.closeModal();
  }

  // addListCertificate(): void {
  //   this.certificateModel.bulkAddCertificates(this.listCertificate).then(() => {
  //     console.log('Certificate added successfully');
  //   }).catch(error => {
  //     console.error('Error adding certificate:', error);
  //   });
  // }

  private findCertificateByCode(code: number): ICertificate | null  {
    return this.listCertificate!.find(cert => cert.code === code) || null;
  }

  private findMaxCode(): number {
    const maxCode = this.listCertificate.reduce((max, currentCertificate) => {
      return currentCertificate.code > max ? currentCertificate.code : max;
    }, 0);

    return maxCode === 0 ? 0 : maxCode;
  }
}
