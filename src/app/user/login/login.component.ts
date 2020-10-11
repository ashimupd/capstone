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

  rememberLogin(event) {
    this.checked = event.checked;
  }

  submitLogin() {
    this.loading = true;
    this.loginService.submitLogin(this.LoginFormGroup.value).subscribe((userdata: any) => {
      if (!userdata.success) {
        this.loading = false;
        this.responseText = userdata.message;
        this.responseStatus = true;
        this.loading = false;
      }
      else {
        this.loading = false;
        this.responseStatus = false;
        const userSessionData = {
          loggedin: true,
          token: userdata.token,
          userData: userdata
        };

        localStorage.setItem('LOGGEDIN_USER_DATA', JSON.stringify(userSessionData));

      }
    }, (error: HttpErrorResponse) => {
      this.loading = false;
      this.responseStatus = true;
      this.responseText = error.statusText;
    });
  }


}
