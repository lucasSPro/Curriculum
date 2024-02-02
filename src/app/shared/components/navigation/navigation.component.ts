import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

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
    { icon: this.icon_user, route: 'about', name: 'about', active: false },
    { icon: this.icon_skill, route: '/skills', name: 'Skills', active: false },
    { icon: this.icon_certificate, route: '/certificates', name: 'Certificates', active: false },
    { icon: this.icon_work, route: '/works', name: 'Works', active: false },
    //{ icon: this.icon_blog, route: '/blog', name: 'Blog', active: false },
    { icon: this.icon_contact, route: '/contact', name: 'Contact', active: false }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.url.split('/')[1];

        this.navigationItems.forEach(item => {
          item.active = item.route === currentRoute;
        });
      }
    });
  }

}
