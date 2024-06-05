import { Component, Input, OnInit } from '@angular/core';
import { IAbout } from '../../interfaces/IAbout';

@Component({
  selector: 'app-about-item',
  templateUrl: './about-item.component.html',
  styleUrls: ['./about-item.component.scss']
})
export class AboutItemComponent implements OnInit {

  @Input() item!: IAbout;

  constructor() { }

  ngOnInit() {
  }

}
