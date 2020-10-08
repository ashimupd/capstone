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

  date = new Date();

  shareButtons = [
    { name: 'facebook', shareingUrl: 'https://www.facebook.com/sharer/sharer.php?u=' + this.pageUrl, faIcon: 'fa fa-facebook', bgColor: '#4267B2' },
    { name: 'twitter', shareingUrl: 'https://twitter.com/intent/tweet?url=' + this.pageUrl, faIcon: 'fa fa-twitter', bgColor: '#059AEE' },
    { name: 'linkedin', shareingUrl: '"https://www.linkedin.com/shareArticle/?url=' + this.pageUrl, faIcon: 'fa fa-linkedin', bgColor: '#026EAA' },
  ];

  commentsSample = [
    { name: 'Asmim Updahay', comment: 'This is nice product', date: this.date },
    { name: 'Bibash katel', comment: 'This is average product', date: this.date },
    { name: 'Biebek chamlagain', comment: 'This is bad product', date: this.date },
  ]

  postComment() {
    let commentsss = {
      name: 'Bikash', comment: this.commentText, date: this.date
    };
    this.commentsSample.sort();
    this.commentsSample.unshift(commentsss);

  }


plusItems() {
  this.totalItems++;
}

minusItems() {
  if (this.totalItems <= 1) {
    return;
  }
  this.totalItems--;

}

constructor() {

}

ngOnInit(): void {
}

}
