import { Component, OnInit } from '@angular/core';

import { GlobalMessage } from 'src/app/shared/service/global-message.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about: string = '< Sobre />'
  resume: string = `
  Com mais de dois anos de experiência na área de desenvolvimento de sistemas,
  demonstrei habilidades sólidas em diversas tecnologias. No front-end,
  destaco meu domínio em Angular e TypeScript, enquanto no back-end, minha expertise
  abrange .NET Framework, .NET Core e C#. Possuo proficiência em SQL e experiência
  prática em tecnologias como Ionic, ASP Clássico, Web Forms, Python e JavaScript.
  Além da prática profissional, acumulei uma rica bagagem acadêmica, destacando-me
  em projetos envolvendo Node.js, React.js, React Native, Flutter e desenvolvimento
  para Android nativo com Java. Essa combinação de experiência prática e acadêmica me
  proporcionou uma visão abrangente e habilidades versáteis, tornando-me um profissional
  capacitado para enfrentar desafios diversos na área de desenvolvimento de sistemas.
  `

  constructor(private globalMessage: GlobalMessage) {
  }

  ngOnInit() {
    this.globalMessage.messageFromHireMe(true);
  }

}
