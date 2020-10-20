import { SingleprodductService } from './singleprodduct.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singleprodduct',
  templateUrl: './singleprodduct.component.html',
  styleUrls: ['./singleprodduct.component.scss']
})
export class SingleprodductComponent implements OnInit {

  totalItems = 1;
  pageUrl = window.location.href;
  panelOpenState = false;
  commentText: string;
  loadComments = 5;

  date = new Date();

  category: any;
  subCategory: any;
  pid: any;
  loading = true;

  dataList: any;

  loggedInUserData: any;
  isUserLoggedIn = false;

  producttype: any;

  loadingComments = false;


  public BASE_URL = 'http://localhost:2020/';

  constructor(private route: ActivatedRoute, private singleProductService: SingleprodductService) {

  }

  shareButtons = [
    { name: 'facebook', shareingUrl: 'https://www.facebook.com/sharer/sharer.php?u=' + this.pageUrl, faIcon: 'fa fa-facebook', bgColor: '#4267B2' },
    { name: 'twitter', shareingUrl: 'https://twitter.com/intent/tweet?url=' + this.pageUrl, faIcon: 'fa fa-twitter', bgColor: '#059AEE' },
    { name: 'linkedin', shareingUrl: '"https://www.linkedin.com/shareArticle/?url=' + this.pageUrl, faIcon: 'fa fa-linkedin', bgColor: '#026EAA' },
  ];

  comments: any = [];




  plusItems() {
    this.totalItems++;
  }

  minusItems() {
    if (this.totalItems <= 1) {
      return;
    }
    this.totalItems--;

  }

  loadMoreComments() {
    this.loadComments = this.loadComments + 5;
  }

  ngOnInit(): void {

    this.getLoggedInUserData();
    this.getUrlParameters();
    this.getComments();


  }

  getLoggedInUserData() {
    this.loggedInUserData = JSON.parse(window.localStorage.getItem('LOGGEDIN_USER_DATA'));
    if (this.loggedInUserData) {
      if (this.loggedInUserData.loggedin) {
        this.isUserLoggedIn = true;
      }
    }
  }

  getUrlParameters() {
    this.route.snapshot.paramMap.get('category');
    this.route.paramMap.subscribe(params => {
      this.subCategory = params.get('subcategory').toString().toLocaleLowerCase();
      this.category = params.get('category').toString().toLocaleLowerCase();
      this.pid = params.get('pid').toString().toLowerCase();


      if (this.category === 'electronics') {
        this.producttype = this.subCategory;
        this.getElectronisItemsByCategory();
      }
      else {
        this.producttype = this.category;
        this.getItemsBySubCategory();
      }

    })
  }


  getItemsBySubCategory() {
    this.singleProductService.getItemsBySubCategory(this.category, this.pid).
      subscribe((data: any) => {
        if (data.success) {
          this.loading = false;
          this.dataList = data.data;

        }
        else {
          this.loading = true;
        }
      })
  }

  getElectronisItemsByCategory() {
    this.singleProductService.getElectronisItemsByCategory(this.subCategory, this.pid).subscribe((data: any) => {
      if (data.success) {
        this.loading = false;
        this.dataList = data.data;
      }
      else {
        this.loading = true;
      }
    })
  }

  postComment() {

    this.loadingComments = true;

    let commentsData = {
      comments: this.commentText,
      producttype: this.producttype,
      productid: this.pid,
      username: this.loggedInUserData.userData.data.fname + ' ' + this.loggedInUserData.userData.data.lname,
      date: this.date.toString()
    }

    this.singleProductService.postComment(commentsData, this.loggedInUserData.token).subscribe((data: any) => {
      if (data.success) {
        this.loadingComments = false;
        this.comments.unshift(commentsData);
        this.commentText = null;
      }
    })


  }

  getComments() {
    this.loadingComments = true;
    this.singleProductService.getComments(this.producttype, this.pid, this.loggedInUserData.token).subscribe((data: any) => {
      if (data.success) {
        this.loadingComments = false;
        this.comments = data.data;
      }
    })
  }

}





