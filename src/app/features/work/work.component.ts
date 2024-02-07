import { Component, OnInit } from '@angular/core';
import { IWork } from './components/work-card/work-card.component';
import { DomSanitizer } from '@angular/platform-browser';
import { GlobalMessage } from 'src/app/shared/service/global-message.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  work: string = '< Portifolio />'
  modalOpen: boolean = false;
  workModal!: IWork ;
  currentWorkModal: number = 0;
  workWithMaxCode = 0;
  listWork: IWork[] = [
    {
      code: 1,
      name: 'Clone Netflix',
      caption: 'Desafio Dio',
      about: `
        <projeto>
          Desafio realizado como parte do aprendizado html, javascript e css
            conceitos de responsividade
            simplificação no usso de bibliotecas
        </projeto>
      `,
      tecnologies: ['html', 'css', 'javascript' ],
      image: 'clone_netflix',
      thumbnail: 'clone_netflix_thumbnail',
      urlSafe: null,
      youtube: null,
      github: 'https://github.com/lucasSPro/cloneNetflixDIO',
      playstore: null,
    },
    {
      code: 2,
      name: 'Dino - Dio',
      caption: 'Desafio Dio',
      about: '',
      tecnologies: ['html', 'css', 'javascript' ],
      image: 'dino_dio',
      thumbnail: 'dino_dio_thumbnail',
      urlSafe: null,
      youtube: 'https://www.youtube.com/embed/qC4DaxmDvkk?si=KAnSaQVrZVsNbK4F',
      github: 'https://github.com/lucasSPro/lucasSPro.github.io',
      playstore: null,
    },
    {
      code: 3,
      name: 'Ecoleta',
      caption: 'Desafio nlw',
      about: '',
      tecnologies: ['css', 'html', 'node', 'react', 'react native' ],
      image: 'ecoleta',
      thumbnail: 'ecoleta_thumbnail',
      urlSafe: null,
      youtube: 'https://www.youtube.com/embed/SiSmIw_moao?si=k87dyMjiZpRXQWX6',
      github: 'https://github.com/lucasSPro/ecoleta_nlw01',
      playstore: null,
    },
    {
      code: 4,
      name: 'Jogo da velha',
      caption: 'Desafio Dio',
      about: '',
      tecnologies: ['html', 'css', 'javascript' ],
      image: 'jogo_velha',
      thumbnail: 'jogo_velha_thumbnail',
      urlSafe: null,
      youtube: null,
      github: 'https://github.com/lucasSPro/jogo-da-velha_JS',
      playstore: null,
    },
    {
      code: 5,
      name: 'Be the Hero',
      caption: 'Desafio nlw',
      about: '',
      tecnologies: ['css', 'html', 'node', 'react', 'react native' ],
      image: 'hero',
      thumbnail: 'hero_thumbnail',
      urlSafe: null,
      youtube: 'https://www.youtube.com/embed/d_UNwhLIpTs?si=ytPc0nDWEkRl5AE_',
      github: 'https://github.com/lucasSPro/BeTheHero',
      playstore: null,
    },
    {
      code: 6,
      name: 'Jogo da cobrinha',
      caption: 'Desafio Dio',
      about: '',
      tecnologies: ['html', 'css', 'javascript' ],
      image: 'cobrinha',
      thumbnail: 'cobrinha_thumbnail',
      urlSafe: null,
      youtube: 'https://www.youtube.com/embed/0Lv6PfPjp5E?si=0cKuGrDRhiCG3Y-d',
      github: 'https://github.com/lucasSPro/jogoDaCobrinhaDIO',
      playstore: null,
    },
    {
      code: 7,
      name: 'Finance Ctrl',
      caption: 'Desafio Dio',
      about: '',
      tecnologies: ['cSharp', 'css', 'javascript', 'Web forms', 'My SQL' ],
      image: 'finance',
      thumbnail: 'finance_thumbnail',
      urlSafe: null,
      youtube: 'https://www.youtube.com/embed/nobI7vCoNfo?si=ToJ4vJ02B3vY5d6J',
      github: null,
      playstore: null,
    },
    {
      code: 8,
      name: 'Api corona',
      caption: 'Desafio Dio',
      about: '',
      tecnologies: ['cSharp', 'Mongo DB'],
      image: 'api_corona',
      thumbnail: 'api_corona_thumbnail',
      urlSafe: null,
      youtube: 'https://www.youtube.com/embed/QHslKwaxYSY?si=jmQ40nPSnOBGb1AB',
      github: 'https://github.com/lucasSPro/jogoDaCobrinhaDIO',
      playstore: null,
    },
    {
      code: 9,
      name: 'Bot quarentena',
      caption: 'Desafio Dio',
      about: '',
      tecnologies: ['node'],
      image: 'bot_quarentena',
      thumbnail: 'bot_quarentena_thumbnail',
      urlSafe: null,
      youtube: 'https://www.youtube.com/embed/0VBmjZA-Z5Q?si=wDhjpXezwk6kfPLp',
      github: 'https://github.com/lucasSPro/chatBot-Telegram-with-node',
      playstore: null,
    },

  ]

  constructor(public sanitizer: DomSanitizer, private globalMessage: GlobalMessage) { }

  ngOnInit() {
    this.globalMessage.messageFromHireMe(true);

    this.workWithMaxCode = this.findMaxCode();
    this.listWork.forEach(work =>{
      if(work.youtube){
        const link: string = work.youtube
        work.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(link);
      }
    })
  }

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

  handleWorkCodeClick(code: number) {
    this.currentWorkModal = code;
    if(code > 0){
      this.openModal();
    }
  }

  changeWork(numberCode: number): void {
    if (numberCode === 1) {
      this.currentWorkModal++;
    } else if (numberCode === -1) {
      this.currentWorkModal--;
    }

    let workChanged = this.findWorkByCode(this.currentWorkModal);
    if(workChanged){
      this.workModal = workChanged;
    }
  }

  openWorkModal(code: number) {
    let currentWork = this.findWorkByCode(code);
    if(currentWork !== null){
      this.workModal = currentWork;
      this.handleWorkCodeClick(code);
    }
  }

  closeWordModal() {
    this.closeModal();
  }

  private findWorkByCode(code: number): IWork | null  {
    return this.listWork!.find(cert => cert.code === code) || null;
  }

  private findMaxCode(): number {
    const maxCode = this.listWork.reduce((max, currentCertificate) => {
      return currentCertificate.code > max ? currentCertificate.code : max;
    }, 0);

    return maxCode === 0 ? 0 : maxCode;
  }
}
