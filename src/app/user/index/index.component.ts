import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {


  loadMoreBestSales = 4;

  mainSliderOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    rewind: true,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 3
      }
    },
    nav: true
  }



  newArivalSliderOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    rewind: true,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


  sliderImages = [
    { id: 1, url: 'assets/images/img1.jpg' },
    { id: 2, url: 'assets/images/img2.jpg' },
    { id: 3, url: 'assets/images/img3.jpg' },
    { id: 4, url: 'assets/images/img4.jpg' },
    { id: 5, url: 'assets/images/img5.jpg' },
    { id: 5, url: 'assets/images/img5.jpg' },
    { id: 5, url: 'assets/images/img5.jpg' },
    { id: 5, url: 'assets/images/img5.jpg' },
    { id: 5, url: 'assets/images/img5.jpg' },
    { id: 5, url: 'assets/images/img5.jpg' },
    { id: 5, url: 'assets/images/img5.jpg' },
  ];


  loadMoreItems() {
    this.loadMoreBestSales = this.loadMoreBestSales + 4;
  }
}
