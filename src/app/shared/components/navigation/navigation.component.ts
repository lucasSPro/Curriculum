import { Component, OnInit } from '@angular/core';
import { faCoffee, faUser, faCertificate,faKitchenSet, faBlog, faAddressBook, faWifiStrong  } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  icon_user= faUser;
  icon_work= faCoffee;
  icon_certificate = faCertificate;
  icon_skill= faKitchenSet;
  icon_blog= faWifiStrong;
  icon_contact= faAddressBook;

  navigationItems = [
    { icon: 'user', route: '/user', name: 'User', active: false },
    { icon: 'set', route: '/skills', name: 'Skills', active: false },
    { icon: 'certificate', route: '/certificates', name: 'Certificates', active: false },
    { icon: 'coffe', route: '/works', name: 'Works', active: false },
    // { icon: 'blog', route: '/blog', name: 'Blog', active: false },
    { icon: 'contact', route: '/contact', name: 'Contact', active: false }
  ];

  constructor() { }

  ngOnInit() {
  }

}
