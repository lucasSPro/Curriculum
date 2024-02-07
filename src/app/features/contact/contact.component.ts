import { Component, OnInit } from '@angular/core';
import { GlobalMessage } from 'src/app/shared/service/global-message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private globalMessage: GlobalMessage) {
  }

  ngOnInit() {
    this.globalMessage.messageFromHireMe(true);
  }

}
