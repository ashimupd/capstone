import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hide = true;
  checked: any;

  public LoginFormGroup: FormGroup;

  constructor(private loginFormBuilder: FormBuilder) {
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
    console.log(this.LoginFormGroup.value);
  }

  rememberLogin(event) {
    this.checked = event.checked;
  }
}
