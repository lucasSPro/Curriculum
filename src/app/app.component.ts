import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'resume';
  public name: string = '< Lucas />';
  @ViewChild('elementToAnimation') elementToAnimation!: ElementRef;

  async ngOnInit() {}

  toggleAnimation() {
    const element = this.elementToAnimation.nativeElement;

    if (element) {
      const currentState = element.style.animationPlayState;
      element.style.animationPlayState = currentState === 'running' ? 'paused' : 'running';
    } else {
      console.error('Elemento não encontrado');
    }
  }
}

