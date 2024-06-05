import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalMessage {
  private messageFromAboutHireMe = new Subject<boolean>();
  messageAbout$ = this.messageFromAboutHireMe.asObservable();

  private messageFromInnitialPage = new Subject<boolean>();
  isInnitialPage$ = this.messageFromInnitialPage.asObservable();

  private messagespinnerState = new Subject<boolean>();
  spinnerState$ = this.messagespinnerState.asObservable();

  messageFromHireMe(message: boolean) {
    this.messageFromAboutHireMe.next(message);
  }
  messageInnitialPage(message: boolean) {
    this.messageFromInnitialPage.next(message);
  }
  showSpinner() {
    this.messagespinnerState.next(true);
  }

  hideSpinner() {
    this.messagespinnerState.next(false);
  }
}
