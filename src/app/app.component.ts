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

  async ngOnInit() {
    this.typeWriterEffect(this.name, 200);
  }

  toggleAnimation() {
    const element = this.elementToAnimation.nativeElement;

    if (element) {
      const currentState = element.style.animationPlayState;
      element.style.animationPlayState = currentState === 'running' ? 'paused' : 'running';
    } else {
      console.error('Elemento não encontrado');
    }
  }

  async typeWriterEffect(text: string, delay: number): Promise<void> {
    const container = document.getElementById('digit');
    if (!container) {
      console.error("Elemento não encontrado");
      return;
    }
    for (let i = 0; i < text.length; i++) {
      container.innerHTML += text.charAt(i);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

