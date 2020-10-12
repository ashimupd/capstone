import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @HostListener('window:unload', ['$event'])
  unloadHandler(event) {
    // ...
    const loggedInUserData = JSON.parse(localStorage.getItem('LOGGEDIN_USER_DATA'));
    if (!loggedInUserData.loggedin) {
      localStorage.removeItem('LOGGEDIN_USER_DATA');
    }

  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event) {
    // ...
    const loggedInUserData = JSON.parse(localStorage.getItem('LOGGEDIN_USER_DATA'));
    if (!loggedInUserData.loggedin) {
      localStorage.removeItem('LOGGEDIN_USER_DATA');
    }
  }


}
