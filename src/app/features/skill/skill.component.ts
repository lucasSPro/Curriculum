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
      percent: 70,
    },
    {
      name: 'Ionic',
      acting: 'Mobile',
      image: 'ionic',
      percent: 80,
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
      image: 'react',
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
      name: 'Godot Engine',
      acting: 'Game',
      image: 'godot',
      percent: 50,
    },
    {
      name: 'Corel Draw',
      acting: 'Design',
      image: 'corel_draw',
      percent: 85,
    },
  ]
  constructor() { }

  ngOnInit() {
  }

  getActsfromSkills(){

  }

  selectingSkillByActing(){

  }
}
