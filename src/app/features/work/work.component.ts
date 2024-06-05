import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { GlobalMessage } from 'src/app/shared/service/global-message.service';
import { WorkService } from './services/work.service';
import { Observable } from 'rxjs';
import { IWork } from './interfaces/IWork';

interface ISkillWork  {
  name: string,
  url: string
}

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  work: string = '< Portifolio />'
  modalOpen: boolean = false;
  loading: boolean = true;
  workModal!: IWork ;
  currentWorkModal: number = 0;
  firstWork: boolean =  false;
  lastWork: boolean =  false;
  workWithMaxCode = 0;
  skills!: ISkillWork ;
  skillListWork$: Observable<ISkillWork[]> | undefined;
  works$: Observable<IWork[]> | undefined;
  listWork!: IWork[] ;

  constructor(public sanitizer: DomSanitizer,
              private globalMessage: GlobalMessage,
              private workService: WorkService,
              ) { }

  ngOnInit() {
    this.globalMessage.messageFromHireMe(true);
    this.globalMessage.messageInnitialPage(false);

    this.globalMessage.showSpinner();
    this.works$ = this.workService.getAllWorks();

    this.works$.subscribe(works => {
      this.globalMessage.hideSpinner();
      if(works.length > 0){

        this.loading = false;
        this.listWork = works;
        let counter = 1;
        this.listWork.forEach(work =>{
          if(work.youtube){
            const link: string = work.youtube
            work.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(link);
          }
        })
        this.listWork = this.listWork.sort((a, b) => {
          if (a.isWorkShop && !b.isWorkShop) {
            return 1;
          }
          if (!a.isWorkShop && b.isWorkShop) {
            return -1;
          }
          return 0;
        });
        this.listWork.map(work=>{
          work.code = counter;
          counter++;
        })

        this.workWithMaxCode = this.findMaxCode();
      }
    }, (error)=>{
      console.log(error)
    });
  }

  addListWork(): void {
    this.workService.addDocumentList(this.listWork).then(() => {
      console.log('skill added successfully');
    }).catch(error => {
      console.error('Error adding skill:', error);
    });
  }

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

  handleWorkCodeClick(code: number) {
    this.currentWorkModal = code;
    if(code > 0){

      this.openModal();
    }
  }

  changeWork(numberCode: number): void {
    if (numberCode === 1) {
      this.currentWorkModal++;
    } else if (numberCode === -1) {
      this.currentWorkModal--;
    }

    let workChanged = this.findWorkByCode(this.currentWorkModal);
    if(workChanged){
      this.workModal = workChanged;
    }
    if(this.currentWorkModal > 0 && this.currentWorkModal < (this.workWithMaxCode+1)){
      let workChanged = this.findWorkByCode(this.currentWorkModal);
      if(workChanged){
        this.workModal = workChanged;
        this.verifyCode(this.workModal.code);
      }
    }
  }

  verifyCode(code: number) {
    if (code === 1) {
      this.firstWork = true;
    } else {
      this.firstWork = false;
    }
    if (code === this.workWithMaxCode) {
      this.lastWork = true;
    } else {
      this.lastWork = false;
    }
  }

  openWorkModal(code: number) {
    this.verifyCode(code);
    let currentWork = this.findWorkByCode(code);
    if(currentWork !== null){
      this.workModal = currentWork;
      this.handleWorkCodeClick(code);
    }
  }

  closeWordModal() {
    this.closeModal();
  }

  private findWorkByCode(code: number): IWork | null  {
    const work = this.listWork!.find(cert => cert.code === code) || null;
    if(work?.tecnologies){
      this.workService.getSkillUrls(work?.tecnologies).subscribe(res=>{
        work.skillList = res;
      })
    }
    return work;
  }

  private findMaxCode(): number {
    const maxCode = this.listWork.reduce((max, currentCertificate) => {
      return currentCertificate.code > max ? currentCertificate.code : max;
    }, 0);

    return maxCode === 0 ? 0 : maxCode;
  }
}
