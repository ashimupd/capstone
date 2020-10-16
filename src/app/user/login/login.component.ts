import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent {

  hide = true;
  checked: any;

  responseStatus: boolean;
  responseText: string;
  loading: any;


  public LoginFormGroup: FormGroup;

  constructor(private loginFormBuilder: FormBuilder, private loginService: LoginService) {
    this.LoginFormGroup = this.loginFormBuilder.group({
      email: ['', [
        Validators.required,
      ]],
      password: ['', [
        Validators.required
      ]],
    })

  }


  submitLogin() {
    this.loading = true;
    this.loginService.submitLogin(this.LoginFormGroup.value).subscribe((userdata: any) => {
      if (userdata.success) {
        this.loading = false;
        this.responseStatus = false;
        this.responseStatus = true;
        this.responseText = userdata.message;

        const userSessionData = {
          loggedin: true,
          token: userdata.token,
          userData: userdata
        };

        localStorage.setItem('LOGGEDIN_USER_DATA', JSON.stringify(userSessionData));

      }
      else {
        this.loading = false;
        this.responseText = userdata.message;
        this.responseStatus = true;
        this.loading = false;

      }
    }, (error: HttpErrorResponse) => {
      this.loading = false;
      this.responseStatus = true;
      this.responseText = error.statusText;
    });
  }

  ngOnInit(): void {
    const loggedInUserData = JSON.parse(localStorage.getItem('LOGGEDIN_USER_DATA'));
    console.log(loggedInUserData)

  }

}
