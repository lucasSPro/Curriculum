import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  skill: string = '< Skills />'
  listSkill: any = [
    {
      name: 'Angular',
      image: 'angular',
      porcent: 90,
    },
    {
      name: 'Angular Material',
      image: 'angular_material',
      porcent: 70,
    },
    {
      name: 'Bootstrap',
      image: 'bootstrap',
      porcent: 70,
    },
    {
      name: 'C#',
      image: 'cSharp',
      porcent: 70,
    },
    {
      name: 'Ionic',
      image: 'ionic',
      porcent: 80,
    },
    {
      name: 'React',
      image: 'react',
      porcent: 55,
    },
    {
      name: 'React native',
      image: 'react',
      porcent: 68,
    },
    {
      name: 'Node',
      image: 'node',
      porcent: 65,
    },
    {
      name: 'Python',
      image: 'python',
      porcent: 40,
    },
    {
      name: 'Figma',
      image: 'figma',
      porcent: 70,
    },
    {
      name: 'Javascript',
      image: 'javascript',
      porcent: 90,
    },
    {
      name: 'HTML',
      image: 'html',
      porcent: 95,
    },
    {
      name: 'CSS',
      image: 'css',
      porcent: 90,
    },
    {
      name: 'Web Components',
      image: 'webcomponents',
      porcent: 80,
    },
    {
      name: 'Godot Engine',
      image: 'godot',
      porcent: 50,
    },
    {
      name: 'Corel Draw',
      image: 'corel_draw',
      porcent: 85,
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
