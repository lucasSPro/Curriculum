import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faCoffee, faUser, faCertificate,faKitchenSet, faBlog, faAddressBook, faWifiStrong  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'resume';
  public name: string = '< Lucas />';
  icon_user= faUser;
  icon_coffe= faCoffee;
  icon_certificate = faCertificate;
  icon_set= faKitchenSet;
  icon_blog= faWifiStrong;
  icon_contact= faAddressBook;
  @ViewChild('elementoParaAnimacao') elementoParaAnimacao!: ElementRef;

  async ngOnInit() {
    this.typeWriterEffect(this.name, 500);
  }

  toggleAnimation() {
    const element = this.elementoParaAnimacao.nativeElement;

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

