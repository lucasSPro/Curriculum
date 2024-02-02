import { Component, OnInit } from '@angular/core';

import { ICertificate } from './components/certificate-card/certificate-card.component';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent implements OnInit {

  certificate: string = '< Continuing education />'
  modalOpen: boolean = false;
  certificateModal!: ICertificate ;
  currentCertificateModal: number = 0;
  certificateWithMaxCode = 0;
  listCertificate: ICertificate[] = [
    {
      code: 1,
      name: 'GoStack',
      caption: 'Stack node, react e react native',
      issuer: 'Rockeseat',
      image: 'gostack',
      thumbnail: 'gostack_thumbnail',
      year: 2020,
      workload: 160,
    },
    {
      code: 2,
      name: 'Grasshopper',
      caption: 'Fundamentos de codificação',
      issuer: 'Grasshopper',
      image: 'Grasshopper_f',
      thumbnail: 'Grasshopper_f_thumbnail',
      year: 2021,
      workload: 30,
    },
    {
      code: 3,
      name: 'Grasshopper',
      caption: 'Fundamentos de programação II',
      issuer: 'Grasshopper',
      image: 'Grasshopper_II',
      thumbnail: 'Grasshopper_II_thumbnail',
      year: 2021,
      workload: 30,
    },
    {
      code: 4,
      name: 'DevMedia',
      caption: 'O que é UML?',
      issuer: 'DevMedia',
      image: 'devmedia_uml',
      thumbnail: 'devmedia_uml_thumbnail',
      year: 2021,
      workload: 3,
    },
    {
      code: 5,
      name: 'DevMedia',
      caption: 'O que é levantamento de requisitos?',
      issuer: 'DevMedia',
      image: 'devmedia_requisitos',
      thumbnail: 'devmedia_requisitos_thumbnail',
      year: 2021,
      workload: 3,
    },
    {
      code: 6,
      name: 'LGPD',
      caption: 'Certificado LGPD',
      issuer: 'Cadmus',
      image: 'cadmus_LGPD',
      thumbnail: 'cadmus_LGPD_thumbnail',
      year: 2023,
      workload: 4,
    },
    {
      code: 7,
      name: 'DevMedia',
      caption: 'Levantamento de requisitos: Exemplo prático de entrevista',
      issuer: 'DevMedia',
      image: 'devmedia_requisitos_P',
      thumbnail: 'devmedia_requisitos_P_thumbnail',
      year: 2021,
      workload: 5,
    },
    {
      code: 8,
      name: 'Arquitetura',
      caption: 'Fundamentos de Arquitetura de Sistemas',
      issuer: 'DIO',
      image: 'arquitetura_FAS',
      thumbnail: 'arquitetura_FAS_thumbnail',
      year: 2021,
      workload: 7,
    },
    {
      code: 9,
      name: 'Metodologia Agil',
      caption: 'Trabalhando em equipes ágeis',
      issuer: 'DIO',
      image: 'agil_TEA',
      thumbnail: 'agil_TEA_thumbnail',
      year: 2023,
      workload: 3,
    },
    {
      code: 10,
      name: 'Aceleração Global',
      caption: '#7 Avanade',
      issuer: 'DIO',
      image: 'acelerecao_7A',
      thumbnail: 'acelerecao_7A_thumbnail',
      year: 2021,
      workload: 10,
    },
    {
      code: 11,
      name: 'DOWHILE 2021',
      caption: '#Build The Future',
      issuer: 'Rockeseat',
      image: 'dowhile_2021',
      thumbnail: 'dowhile_2021_thumbnail',
      year: 2021,
      workload: 10,
    },
  ]

  constructor() { }

  ngOnInit() {
    this.certificateWithMaxCode = this.findMaxCode();
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

    let certificateChanged = this.findCertificateByCode(this.currentCertificateModal);
    if(certificateChanged){
      this.certificateModal = certificateChanged;
    }
  }

  openCertificateModal(code: number) {
    let currentCertificate = this.findCertificateByCode(code);
    if(currentCertificate !== null){
      this.certificateModal = currentCertificate;
      this.handleCertificateCodeClick(code);
    }
  }

  closeCertificateModal() {
    this.closeModal();
  }

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
