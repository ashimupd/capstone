import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  loadMoreItems = 4;
  subCategory: string;
  Category: string;
  searchKeyWord = 'name';



  sliderImages = [
    { id: 1, url: 'assets/images/img1.jpg', price: '500', name: 'abc' },
    { id: 1, url: 'assets/images/img2.jpg', price: '546', name: 'cbd' },
    { id: 1, url: 'assets/images/img3.jpg', price: '65465', name: 'efg' },
    { id: 1, url: 'assets/images/img4.jpg', price: '231', name: 'hij' },
    { id: 1, url: 'assets/images/img1.jpg', price: '8452', name: 'klm' },
    { id: 1, url: 'assets/images/img2.jpg', price: '4564', name: 'nop' },
    { id: 1, url: 'assets/images/img3.jpg', price: '23123', name: 'qrs' },
    { id: 1, url: 'assets/images/img4.jpg', price: '54', name: 'stu' },
    { id: 1, url: 'assets/images/img1.jpg', price: '64565', name: 'wvx' },
    { id: 1, url: 'assets/images/img2.jpg', price: '464', name: 'yz' },

  ];

  sliderImages2 = this.sliderImages;

  fnloadMoreItems() {
    this.loadMoreItems = this.loadMoreItems + 4;
  }

  changeSearchKeyword(event) {
    this.searchKeyWord = event.target.value;
  }

  applyFilter(event) {
    const filterValue = (event.target as HTMLInputElement).value;

    if (this.searchKeyWord === 'name') {
      this.sliderImages = this.sliderImages.filter(result => result.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()));
    }

    else if (this.searchKeyWord === 'price') {
      this.sliderImages = this.sliderImages.filter(result => result.price.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()));

    }


    const key = event.keyCode || event.charCode;
    if (key === 8 || key === 46) {

      if (filterValue === '') {
        this.sliderImages = this.sliderImages2;
        console.log(this.sliderImages2)
      }
    }

  }


  sort(event) {
    const sortKeyword = event.target.value;
    if (sortKeyword === '1') {
      let b = this.sliderImages.sort((a, b) => 0 - (a.name > b.name ? -1 : 1));
      this.sliderImages = b;
    }

    else if (sortKeyword === '2') {
      let b = this.sliderImages.sort((a, b) => 0 - (a.name > b.name ? 1 : -1));
      this.sliderImages = b;
    }

    else if (sortKeyword === '3') {
      let b = this.sliderImages.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      this.sliderImages = b;
    }

    else if (sortKeyword === '4') {
      let b = this.sliderImages.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      this.sliderImages = b;
    }

  }



  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.snapshot.paramMap.get('category');
    this.route.paramMap.subscribe(params => {
      this.subCategory = params.get('subcategory').toString().toUpperCase();
      this.Category = params.get('category').toString().toUpperCase();
    })

  }



}
