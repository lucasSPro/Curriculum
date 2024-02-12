import { Component, OnInit } from '@angular/core';
import { GlobalMessage } from 'src/app/shared/service/global-message.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  skill: string = '< Conhecimentos />'
  listSkill: any = [
    {
      name: 'Angular',
      acting: 'Frontend',
      image: 'angular',
      percent: 90,
    },
    {
      name: 'Angular Material',
      acting: 'Frontend',
      image: 'angular_material',
      percent: 70,
    },
    {
      name: 'Bootstrap',
      acting: 'Frontend',
      image: 'bootstrap',
      percent: 70,
    },
    {
      name: 'C#',
      acting: 'Backend',
      image: 'cSharp',
      percent: 80,
    },
    {
      name: 'Ionic',
      acting: 'Mobile',
      image: 'ionic',
      percent: 80,
    },
    {
      name: 'Flutter',
      acting: 'Mobile',
      image: 'flutter',
      percent: 45,
    },
    {
      name: 'React',
      acting: 'Frontend',
      image: 'react',
      percent: 55,
    },
    {
      name: 'React native',
      acting: 'Mobile',
      image: 'react native',
      percent: 68,
    },
    {
      name: 'Node',
      acting: 'Backend',
      image: 'node',
      percent: 65,
    },
    {
      name: 'Python',
      acting: 'Backend',
      image: 'python',
      percent: 40,
    },
    {
      name: 'Java',
      acting: 'Backend',
      image: 'java',
      percent: 45,
    },
    {
      name: 'Figma',
      acting: 'Design',
      image: 'figma',
      percent: 70,
    },
    {
      name: 'Javascript',
      acting: 'Frontend',
      image: 'javascript',
      percent: 90,
    },
    {
      name: 'HTML',
      acting: 'Frontend',
      image: 'html',
      percent: 95,
    },
    {
      name: 'CSS',
      acting: 'Backend',
      image: 'css',
      percent: 90,
    },
    {
      name: 'Web Components',
      acting: 'Frontend',
      image: 'webcomponents',
      percent: 80,
    },
    {
      name: 'Web forms',
      acting: 'Frontend',
      image: 'Web forms',
      percent: 70,
    },
    {
      name: 'Asp Classico',
      acting: 'Frontend',
      image: 'Asp classico',
      percent: 75,
    },
    {
      name: 'My SQL',
      acting: 'Backend',
      image: 'My SQL',
      percent: 70,
    },
    {
      name: 'SQL Server',
      acting: 'Backend',
      image: 'SQL Server',
      percent: 85,
    },
    {
      name: 'Mongo DB',
      acting: 'Backend',
      image: 'Mongo DB',
      percent: 60,
    },
    {
      name: 'Docker',
      acting: 'Backend',
      image: 'Docker',
      percent: 45,
    },
    {
      name: 'Godot Engine',
      acting: 'Game',
      image: 'godot',
      percent: 50,
    },
    {
      name: 'Unity',
      acting: 'Game',
      image: 'unity',
      percent: 35,
    },
    {
      name: 'Corel Draw',
      acting: 'Design',
      image: 'corel_draw',
      percent: 85,
    },

  ]
  constructor(private globalMessage: GlobalMessage) {
  }

  ngOnInit() {
    this.globalMessage.messageFromHireMe(true);
  }

  getActsfromSkills(){

  }

  selectingSkillByActing(){

  }
}
