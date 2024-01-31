import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalMessage {
  private messageFromAboutHireMe = new Subject<boolean>();
  messageAbout$ = this.messageFromAboutHireMe.asObservable();

  messageFromHireMe(message: boolean) {
    this.messageFromAboutHireMe.next(message);
  }
}
