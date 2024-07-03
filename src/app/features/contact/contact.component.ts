import {Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalMessage } from 'src/app/shared/service/global-message.service';
import { Router } from '@angular/router';
import { ContactService } from './services/contact.service';
import { IContact } from './interfaces/IContact';
import { Observable } from 'rxjs';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact: string = '< Contato />'
  loading: boolean = true;

  iconMap: { [key: string]: any } = {
  email:  faEnvelope,
  linkedin:  faLinkedin,
  github:  faGithub,
  download:  faDownload,
  whatsapp:  faWhatsapp,
  instagram:  faInstagram,
  }

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
      const contactsWithIcon = contacts.map(item => ({
        description: item.description,
        img: this.iconMap[item.img],
        link:item.link,
        name:item.name,
        subtitle:item.subtitle
      }));

      this.listContact =  contactsWithIcon;

      console.log(contacts);
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
