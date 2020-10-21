import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {


  loggedInUserData: any;
  isUserLoggedIn: any;

  @ViewChild('confirmLogoutDialouge') confirmLogoutDialouge: TemplateRef<any>;

  constructor(private dialog: MatDialog){

  }

  ngOnInit(): void {
    this.getLoggedInUserData();
  }

  getLoggedInUserData() {
    this.loggedInUserData = JSON.parse(window.localStorage.getItem('LOGGEDIN_USER_DATA'));
    if (this.loggedInUserData) {
      if (this.loggedInUserData.loggedin) {
        this.isUserLoggedIn = true;
      }
    }
  }


  logoutUser() {
    window.localStorage.removeItem('LOGGEDIN_USER_DATA');
    window.location.href = '/';
  }

  confirmLogout() {
    this.dialog.open(this.confirmLogoutDialouge);
  }

}
