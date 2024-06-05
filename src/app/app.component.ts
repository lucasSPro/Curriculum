import {  AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";

import { GlobalMessage } from 'src/app/shared/service/global-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
  private spinnerSubscription!: Subscription;
  title = 'resume';
  loadingText: string = 'Carregando...';
  initialPage: boolean = true;
  @ViewChild('elementToAnimation') elementToAnimation!: ElementRef;

  constructor(private globalMessage: GlobalMessage,private cdr: ChangeDetectorRef, private spinner: NgxSpinnerService ) {}

  async ngOnInit() {
    this.spinnerSubscription = this.globalMessage.spinnerState$.subscribe(state => {
      if(state){
        this.spinner.show();
      }else{
        this.spinner.hide();
      }
    });
  }

  ngAfterViewInit() {
    this.changeStatusAnimation(false);
    this.globalMessage.messageAbout$.subscribe((message: boolean) => {
      this.changeStatusAnimation(message);
    });
  }
  ngAfterViewChecked(){
    this.globalMessage.isInnitialPage$.subscribe((message: boolean) => {
      this.identifyRouterRoot(message);
      this.cdr.detectChanges();
    });

  }

  changeStatusAnimation( innitialPage: boolean) {
    const element = this.elementToAnimation.nativeElement;
    if (element && innitialPage) {
      element.style.animationPlayState = 'running';
    }else{
      element.style.animationPlayState = 'paused';
    }
  }

  identifyRouterRoot(isRootRoute: boolean){
    if(isRootRoute){
      this.initialPage =  true;
    }else{
      this.initialPage =  false;
    }
  }
  ngOnDestroy() {
    this.spinnerSubscription.unsubscribe();
  }
}

