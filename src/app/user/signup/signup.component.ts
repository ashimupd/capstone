import { SignupService } from './signup.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  public signupFormGroup: FormGroup;
  responseSuccess: boolean;
  responseFailed: boolean;
  responseText: string;
  loading: any;


  hide = true;
  weakpassword = false;
  states = [
    { state: 'Achham' },
    { state: 'Arghakhanchi' },
    { state: 'Baglung' },
    { state: 'Baitadi' },
    { state: 'Bajhang' },
    { state: 'Bajura' },
    { state: 'Banke' },
    { state: 'Bara' },
    { state: 'Bardiya' },
    { state: 'Bhaktapur' },
    { state: 'Bhojpur' },
    { state: 'Chitwan' },
    { state: 'Dadeldhura' },
    { state: 'Dailekh' },
    { state: 'Dang' },
    { state: 'Darchula' },
    { state: 'Dhading' },
    { state: 'Dhankuta' },
    { state: 'Dhanusa' },
    { state: 'Dolakha' },
    { state: 'Dolpa' },
    { state: 'Doti' },
    { state: 'Gorkha' },
    { state: 'Gulmi' },
    { state: 'Humla' },
    { state: 'Ilam' },
    { state: 'Jajarkot' },
    { state: 'Jhapa' },
    { state: 'Jumla' },
    { state: 'Kailali' },
    { state: 'Kalikot' },
    { state: 'Kanchanpur' },
    { state: 'Kapilvastu' },
    { state: 'Kaski' },
    { state: 'Kathmandu' },
    { state: 'Kavrepalanchok' },
    { state: 'Khotang' },
    { state: 'Lalitpur' },
    { state: 'Lamjung' },
    { state: 'Mahottari' },
    { state: 'Makwanpur' },
    { state: 'Manang' },
    { state: 'Morang' },
    { state: 'Mugu' },
    { state: 'Mustang' },
    { state: 'Myagdi' },
    { state: 'Nawalparasi' },
    { state: 'Nuwakot' },
    { state: 'Okhaldhunga' },
    { state: 'Palpa' },
    { state: 'Panchthar' },
    { state: 'Parbat' },
    { state: 'Parsa' },
    { state: 'Pyuthan' },
    { state: 'Ramechhap' },
    { state: 'Rasuwa' },
    { state: 'Rautahat' },
    { state: 'Rolpa' },
    { state: 'Rukum' },
    { state: 'Rupandehi' },
    { state: 'Salyan' },
    { state: 'Sankhuwasabha' },
    { state: 'Saptari' },
    { state: 'Sarlahi' },
    { state: 'Sindhuli' },
    { state: 'Sindhupalchok' },
    { state: 'Siraha' },
    { state: 'Solukhumbu' },
    { state: 'Sunsari' },
    { state: 'Surkhet' },
    { state: 'Syangja' },
    { state: 'Tanahu' },
    { state: 'Taplejung' },
    { state: 'Terhathum' },
    { state: 'Udayapur' }
  ];

  constructor(private signUpFormBuilder: FormBuilder, private signUpService: SignupService) {
    this.signupFormGroup = this.signUpFormBuilder.group({

      fname: ['', [
        Validators.required,
        Validators.pattern('[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$')
      ]],

      lname: ['', [
        Validators.required,
        Validators.pattern('[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$')
      ]],

      phone: ['', [
        Validators.required,
        Validators.pattern('[+ 0-9].{9,15}')

      ]],

      email: ['', [
        Validators.required,
        Validators.email
      ]],

      state: ['', [
        Validators.required,
      ]],

      zip: ['', [
        Validators.required,
        Validators.pattern('.{5,}')
      ]],

      password: ['', [
        Validators.required,
        Validators.pattern('.{8,}'),
      ]],
    })
  }

  submitSignup() {
    this.loading = true;
    this.signUpService.sugbmiSignUp(this.signupFormGroup.value).subscribe((userdata: any) => {
      if (userdata.success) {
        this.loading = false;
        this.responseSuccess = true;
        this.responseFailed = false;
        this.responseText = userdata.message;
      }
      else {
        this.loading = false;
        this.responseFailed = true;
        this.responseSuccess = false;
        this.loading = false;
        this.responseText = userdata.message;

      }
    }, (error: HttpErrorResponse) => {
      this.loading = false;
      this.responseFailed = true;
      this.responseSuccess = false;
      this.responseText = error.statusText;
    });
  }


}
