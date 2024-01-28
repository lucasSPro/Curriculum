import { Component, OnInit } from '@angular/core';
import { faCoffee, faUser, faCertificate,faKitchenSet, faBlog, faAddressBook, faWifiStrong  } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  icon_user= faUser;
  icon_work= faCoffee;
  icon_certificate = faCertificate;
  icon_skill= faKitchenSet;
  icon_blog= faWifiStrong;
  icon_contact= faAddressBook;

  navigationItems = [
    { icon: this.icon_user, route: '/user', name: 'User', active: false },
    { icon: this.icon_skill, route: '/skills', name: 'Skills', active: false },
    { icon: this.icon_certificate, route: '/certificates', name: 'Certificates', active: false },
    { icon: this.icon_work, route: '/works', name: 'Works', active: false },
    // { icon: this.icon_blog, route: '/blog', name: 'Blog', active: false },
    { icon: this.icon_contact, route: '/contact', name: 'Contact', active: false }
  ];

  constructor() { }

  ngOnInit() {
  }

}
