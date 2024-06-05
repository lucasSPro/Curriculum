import { Component, OnInit } from '@angular/core';

import { GlobalMessage } from 'src/app/shared/service/global-message.service';
import { AboutService } from './services/about.service';
import {IAbout} from './interfaces/IAbout'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about: string = '< Sobre />'
  loading = true;

  abouts$: Observable<IAbout[]> | undefined;

  listPresentation: IAbout[] = [];
  listExperiences: IAbout[] = [];
  listAcademy: IAbout[] = [];

  constructor(private globalMessage: GlobalMessage, private aboutService: AboutService, private router: Router) {
  }


  ngOnInit() {
    this.globalMessage.messageFromHireMe(true);
    this.globalMessage.messageInnitialPage(false);
    this.abouts$ = this.aboutService.getAllAbout();
    this.globalMessage.showSpinner();
    this.abouts$.subscribe(abouts => {
      if(abouts.length > 0){
        this.listPresentation = [];
        this.listExperiences = [];
        this.listAcademy = [];
        abouts.map(about =>{
          switch (about.theme) {
            case 'shortAbout':
                this.listPresentation.push(about);
              break;
            case 'arrayExperiences':
              this.listExperiences.push(about);
              break;
            case 'arrayAcademy':
              this.listAcademy.push(about);
              break;
            default:
              break;
          }
        });

        this.listPresentation = this.listPresentation.sort((a,b)=> (a.code - b.code));
        this.listExperiences = this.listExperiences.sort((a,b)=> a.code -b.code);
        this.listAcademy = this.listAcademy.sort((a,b)=> a.code -b.code);

        this.globalMessage.hideSpinner();

        if(abouts.length > 0){
          this.loading = false;
        }
      }else{
        this.navigateToIndexPage();
      }
    });
  }

  navigateToIndexPage() {
    this.router.navigate(['/index']);
  }

}
