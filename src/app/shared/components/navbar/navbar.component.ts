

import { Component } from '@angular/core';
import { faUser, faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', './navbar-mediaquery.scss'],
  providers: []
})
export class NavbarComponent {
  // Font awesome icons
  faUser = faUser;
  faShoppingCart = faShoppingCart;
  faBars = faBars;
  faTimes = faTimes;



  searchedItems = [];
  // ng model for search text
  term: any;
  showSearchData = false;
  showCollapseMenu = false;
  showIcon = true;
  // showMenu = true;
  public innerWidth: any;

  items = [
    { name: 'archie', image: 'assets/images/img1.jpg' },
    { name: 'jake', image: 'assets/images/img2.jpg' },
    { name: 'richard', image: 'assets/images/img3.jpg' }
  ];

  navLinks = [
    { routerLink: '/paypal', navLikLabel: 'Paypal' },
    { routerLink: '/netflix', navLikLabel: 'Netflix' },
    { routerLink: '/prime', navLikLabel: 'Prime' },
    { routerLink: '/vpn', navLikLabel: 'VPN' },
    { routerLink: '/netflix', navLikLabel: 'Netflix' },
    { routerLink: '/prime', navLikLabel: 'Prime' },
    { routerLink: '/dipendra', navLikLabel: 'Dipendra' },
  ];


  message = '';


  constructor() {
  }



  // tslint:disable-next-line: typedef
  ShowSearchResult(event) {
    this.searchedItems = this.items.filter(result => result.name.toLocaleLowerCase().includes(this.term.toLocaleLowerCase()));

    // Hide search data when text field is empty
    if (this.term === '') {
      this.showSearchData = false;
    }
    else {
      this.showSearchData = true;

    }
    // Hide text data when back button is pressed and if the the search field in empty
    const key = event.keyCode || event.charCode;
    if (key === 8 || key === 46) {
      if (this.term === '') {
        this.showSearchData = false;
      }
      else {
        this.showSearchData = true;
      }
    }
  }



  openMenu() {

    this.showCollapseMenu = !this.showCollapseMenu;
    this.showIcon = !this.showIcon;

  }

  closeMenu() {

    this.showCollapseMenu = !this.showCollapseMenu;
    this.showIcon = !this.showIcon;
  }

  clearSearch() {
    this.term = null;
    this.showSearchData = false;
  }
}


  // $('.secondToolbar').css('display', 'none');






