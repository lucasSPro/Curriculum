import { Component, OnInit } from '@angular/core';
import { GlobalMessage } from 'src/app/shared/service/global-message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact: string = '< Contato />'

  constructor(private globalMessage: GlobalMessage) {
  }

  ngOnInit() {
    this.globalMessage.messageFromHireMe(true);
  }

}
