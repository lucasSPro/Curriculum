import {Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalMessage } from 'src/app/shared/service/global-message.service';
import { Router } from '@angular/router';
import { ContactService } from './services/contact.service';
import { IContact } from './interfaces/IContact';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact: string = '< Contato />'
  loading: boolean = true;

  contacts$: Observable<IContact[]> | undefined;
  listContact!: IContact[];

  constructor(private globalMessage: GlobalMessage,
              private router: Router,
              private http: HttpClient,
              private contactService: ContactService
              ) {}

  ngOnInit() {
    this.globalMessage.messageFromHireMe(true);
    this.globalMessage.messageInnitialPage(false);

    this.contacts$ = this.contactService.getAllContact();
    this.globalMessage.showSpinner();

    this.contacts$.subscribe(contacts => {
      this.listContact =  contacts;
      this.globalMessage.hideSpinner();
      if(contacts.length > 0){
        this.loading = false;
      }
    },
    (error)=>{
        console.log("sem internet", error)
    }
    );
  }

  openLink(nameLink: string): void {
    if(nameLink === ''){
      this.downloadPDF();
    }else{
      window.open(nameLink, '_blank');
    }
  }
  downloadPDF() {
    const url = 'assets/files/CV_Lucas_2023.pdf';
    this.http.get(url, { responseType: 'blob' }).subscribe(response => {
      const blob = new Blob([response], { type: 'application/pdf' });
      const downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(blob);
      downloadLink.download = 'Curriculo_Lucas.pdf';
      downloadLink.click();
    });
  }

  navigateToIndexPage() {
    this.router.navigate(['/']);
  }
}
