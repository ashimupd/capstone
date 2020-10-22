import { MatDialog } from '@angular/material/dialog';
import { CheckoutService } from './checkout.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private route: ActivatedRoute, private checkoutService: CheckoutService, private snackbar: MatSnackBar, private dialog: MatDialog) { }

  cartid: any;
  loggedInUserData: any;
  isUserLoggedIn = false;
  cartData: any;
  totalAmountToPay;
  payNowLoading = false;

  public BASE_URL = 'http://localhost:2020/';

  cardFormValidation: true;
  cardFormValidationMessage: any;

  cardNumber: any;
  exipryMonth: any;
  expiryYear: any;
  securityCode: any;

  date = new Date();

  months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

  years = [
    this.date.getFullYear(),
    this.date.getFullYear() + 1,
    this.date.getFullYear() + 2,
    this.date.getFullYear() + 3,
    this.date.getFullYear() + 4,
    this.date.getFullYear() + 5,
    this.date.getFullYear() + 6,
    this.date.getFullYear() + 7,
    this.date.getFullYear() + 8,
    this.date.getFullYear() + 9,
    this.date.getFullYear() + 10,
    this.date.getFullYear() + 11,
    this.date.getFullYear() + 12,
    this.date.getFullYear() + 13,
    this.date.getFullYear() + 14,
    this.date.getFullYear() + 15,
    this.date.getFullYear() + 16,
    this.date.getFullYear() + 17,
    this.date.getFullYear() + 18,
    this.date.getFullYear() + 19,
    this.date.getFullYear() + 20,
  ]

  paymentMethodChoosen: string;
  paymentMethods = [{ name: 'paypal', color: '#000000', faIcon: 'fa-cc-visa' }];

  @ViewChild('enterCardDetailsDialouge') enterCardDetailsDialouge: TemplateRef<any>;

  ngOnInit(): void {
    this.getUrlParameters();
    this.getLoggedInUserData();
    this.getUserCartData();
  }


  getUrlParameters() {
    this.route.snapshot.paramMap.get('category');
    this.route.paramMap.subscribe(params => {
      this.cartid = params.get('cartid').toString().toLocaleLowerCase();

    });
  }


  getLoggedInUserData() {
    this.loggedInUserData = JSON.parse(window.localStorage.getItem('LOGGEDIN_USER_DATA'));
    if (this.loggedInUserData) {
      if (this.loggedInUserData.loggedin !== null) {
        this.isUserLoggedIn = true;

      }
      else {
        this.isUserLoggedIn = false;
      }
    }
  }

  getUserCartData() {
    this.checkoutService.getUserCartData(this.loggedInUserData.userData.data.id, this.cartid, this.loggedInUserData.token).subscribe((data: any) => {
      if (data.success) {
        this.cartData = data.data;
        this.totalAmountToPay = data.data.totalitems * data.data.price;
      }
    })
  }

  payNow() {

    if (this.paymentMethodChoosen === null || this.paymentMethodChoosen === undefined) {
      this.snackbar.open('Please choose a payment method', '', {
        duration: 3500
      });
    }
    else if (this.paymentMethodChoosen === 'paypal') {
      this.snackbar.open('Paypal payment method is under development', '', {
        duration: 3500
      });
    }

    else if (this.paymentMethodChoosen === 'cash') {
      this.placeOrder();
    }

    else if (this.paymentMethodChoosen === 'card') {
      this.dialog.open(this.enterCardDetailsDialouge);
    }
  }

  payWithCard() {
    let cardNumber = new String(this.cardNumber);
    let securityCode = new String(this.securityCode);

    if (cardNumber.length !== 16) {
      this.cardFormValidationMessage = 'Card number must be of 16 digit';
    }

    else if (this.exipryMonth === null || this.exipryMonth === undefined || this.exipryMonth === '') {
      this.cardFormValidationMessage = 'Select expiry month';
    }

    else if (this.expiryYear === null || this.expiryYear === undefined || this.expiryYear === '') {
      this.cardFormValidationMessage = 'Select expiry year';
    }

    else if (securityCode.length != 3) {
      this.cardFormValidationMessage = 'Security code must be of 3 digit';
    }

    else {
      this.cardFormValidationMessage = '';
      this.placeOrder();
    }



  }

  placeOrder() {
    this.payNowLoading = true;
    let userData = {
      userid: this.loggedInUserData.userData.data.id,
      id: this.cartid,
      productname: this.cartData.productname
    };

    this.checkoutService.placeOrder(userData, this.loggedInUserData.token).subscribe((data: any) => {

      if (data.success) {
        this.payNowLoading = false;
        this.snackbar.open('Paid with ' + this.paymentMethodChoosen, data.message);

        setTimeout(() => {
          window.location.href = '/orders';
        }, 1500);
      }
    })
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }
}
