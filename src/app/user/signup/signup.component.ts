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
  districts = [
    { district: 'Achham' },
    { district: 'Arghakhanchi' },
    { district: 'Baglung' },
    { district: 'Baitadi' },
    { district: 'Bajhang' },
    { district: 'Bajura' },
    { district: 'Banke' },
    { district: 'Bara' },
    { district: 'Bardiya' },
    { district: 'Bhaktapur' },
    { district: 'Bhojpur' },
    { district: 'Chitwan' },
    { district: 'Dadeldhura' },
    { district: 'Dailekh' },
    { district: 'Dang' },
    { district: 'Darchula' },
    { district: 'Dhading' },
    { district: 'Dhankuta' },
    { district: 'Dhanusa' },
    { district: 'Dolakha' },
    { district: 'Dolpa' },
    { district: 'Doti' },
    { district: 'Gorkha' },
    { district: 'Gulmi' },
    { district: 'Humla' },
    { district: 'Ilam' },
    { district: 'Jajarkot' },
    { district: 'Jhapa' },
    { district: 'Jumla' },
    { district: 'Kailali' },
    { district: 'Kalikot' },
    { district: 'Kanchanpur' },
    { district: 'Kapilvastu' },
    { district: 'Kaski' },
    { district: 'Kathmandu' },
    { district: 'Kavrepalanchok' },
    { district: 'Khotang' },
    { district: 'Lalitpur' },
    { district: 'Lamjung' },
    { district: 'Mahottari' },
    { district: 'Makwanpur' },
    { district: 'Manang' },
    { district: 'Morang' },
    { district: 'Mugu' },
    { district: 'Mustang' },
    { district: 'Myagdi' },
    { district: 'Nawalparasi' },
    { district: 'Nuwakot' },
    { district: 'Okhaldhunga' },
    { district: 'Palpa' },
    { district: 'Panchthar' },
    { district: 'Parbat' },
    { district: 'Parsa' },
    { district: 'Pyuthan' },
    { district: 'Ramechhap' },
    { district: 'Rasuwa' },
    { district: 'Rautahat' },
    { district: 'Rolpa' },
    { district: 'Rukum' },
    { district: 'Rupandehi' },
    { district: 'Salyan' },
    { district: 'Sankhuwasabha' },
    { district: 'Saptari' },
    { district: 'Sarlahi' },
    { district: 'Sindhuli' },
    { district: 'Sindhupalchok' },
    { district: 'Siraha' },
    { district: 'Solukhumbu' },
    { district: 'Sunsari' },
    { district: 'Surkhet' },
    { district: 'Syangja' },
    { district: 'Tanahu' },
    { district: 'Taplejung' },
    { district: 'Terhathum' },
    { district: 'Udayapur' }
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

      district: ['', [
        Validators.required,
      ]],

      postalcode: ['', [
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
