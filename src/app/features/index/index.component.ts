import { AfterViewInit, Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalMessage } from 'src/app/shared/service/global-message.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {

  public name: string = '< Lucas />';

  constructor(private router: Router, private globalMessage: GlobalMessage) {}

  ngOnInit() {
    this.globalMessage.messageFromHireMe(true);
  }
  ngAfterViewInit() {}

  goToAbout(){
    this.globalMessage.messageFromHireMe(true);
    this.navigateToAboutPage();
  }
  navigateToAboutPage() {
    this.router.navigate(['/about']);
  }
}
