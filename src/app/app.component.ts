import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { GlobalMessage } from 'src/app/shared/service/global-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{

  title = 'resume';
  initialPage = true;
  @ViewChild('elementToAnimation') elementToAnimation!: ElementRef;

  constructor(private globalMessage: GlobalMessage) {}

  async ngOnInit() {}

  ngAfterViewInit() {
    this.initialPage = true;
    this.changeStatusAnimation(false);

    this.globalMessage.messageAbout$.subscribe((message: boolean) => {
      this.changeStatusAnimation(message);
    });
  }

  changeStatusAnimation( innitialPage: boolean) {
    const element = this.elementToAnimation.nativeElement;
    if (element && innitialPage) {
      this.initialPage = false;
      element.style.animationPlayState = 'running';
    }else{
      element.style.animationPlayState = 'paused';
    }
  }
}

