import { ClothingsService } from './clothings.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { error } from '@angular/compiler/src/util';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-clothings',
  templateUrl: './clothings.component.html',
  styleUrls: ['./clothings.component.scss']
})
export class ClothingsComponent implements OnInit {


  public clothingsFormGroup: FormGroup;
  isAddingItem = true;
  buttonTextAndHeading: string;

  public previewUrl: any = null;
  private fileData: File = null;
  uploadImageLoading: any;
  loading: any;
  imageNameFromServer: string;

  responseSuccess: boolean;
  responseFailed: boolean;
  responseText: string;


  itemSize = [
    { size: 'xxx-small' },
    { size: 'xx-small' },
    { size: 'x-small' },
    { size: 'medium' },
    { size: 'x-large' },
    { size: 'xx-large' },
    { size: 'xxx-large' },
  ];

  itemType = [
    { type: 'men' },
    { type: 'women' },
    { type: 'kids' },
  ];

  displayedColumns: string[] = ['id', 'name', 'type', 'size', 'price', 'warrenty', 'description', 'image', 'edit', 'delete'];
  dataSource = new MatTableDataSource();

  constructor(public dialog: MatDialog, private clothingFormBuilder: FormBuilder, private clothingsService: ClothingsService) {
    this.clothingsFormGroup = this.clothingFormBuilder.group({

      id: [],

      name: ['', [
        Validators.required,
      ]],

      type: ['', [
        Validators.required,
      ]],

      size: ['', [
        Validators.required,
      ]],

      price: ['', [
        Validators.required,
      ]],

      warrenty: ['', [
        Validators.required,
      ]],

      description: ['', [
        Validators.required,
      ]],
      image: [this.imageNameFromServer],


    });
  }


  clothingsData = [
    { id: '1', name: 'asim', type: 'men', size: 'small', price: '1500', warrenty: '1 year', description: 'hello dsadas', image: 'assets/images/img1.jpg' },
    { id: '1', name: 'asim', type: 'men', size: 'small', price: '1500', warrenty: '1 year', description: 'hello dsadas', image: 'assets/images/img2.jpg' },
    { id: '1', name: 'asim', type: 'men', size: 'small', price: '1500', warrenty: '1 year', description: 'hello dsadas', image: 'assets/images/img3.jpg' },
    { id: '1', name: 'asim', type: 'men', size: 'small', price: '1500', warrenty: '1 year', description: 'hello dsadas', image: 'assets/images/img4.jpg' },
    { id: '1', name: 'asim', type: 'men', size: 'small', price: '1500', warrenty: '1 year', description: 'hello dsadas', image: 'assets/images/img1.jpg' },
  ];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('addUpdateClothingFormDialouge') addUpdateClothingFormDialouge: TemplateRef<any>;


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }




  ngOnInit(): void {
    console.log(this.dataSource);

    this.dataSource.data = this.clothingsData;
  }


  openUpdateItemFormDiaglouge() {
    this.isAddingItem = false;
    this.buttonTextAndHeading = 'Update item';
    this.dialog.open(this.addUpdateClothingFormDialouge);

  }

  openAddItemFormDiaglouge() {
    this.isAddingItem = true;
    this.buttonTextAndHeading = 'Add item';
    this.dialog.open(this.addUpdateClothingFormDialouge);

  }

  submitClothingsData() {

  }
  // displayAndUploadImage(event) {
  //   const formData = new FormData();
  //   this.loading = true;
  //   this.fileData = (event.target.files[0]);
  //   this.preview();
  //   const fileTye = this.fileData.type.split('/', 1);
  //   const fileSize = this.fileData.size;


  //   // if (fileTye[0] !== 'image') {
  //   //   alert('Select file is not an image, please select an image');
  //   // }
  //   // else if (fileSize > 100000000) {
  //   //   alert('File size larger, please resize or select lower size');
  //   // }

  //   // else {
  //   formData.append('image', this.fileData);

  //   this.clothingsService.uploadImage(FormData).subscribe((imageName) => {
  //     console.log(imageName);
  //   }, (error: HttpErrorResponse) => {
  //     this.loading = false;
  //     alert(error.statusText);
  //   });
  //   // }

  // }

  uploadImageToServer(fileInput: any) {
    this.loading = true;
    this.fileData = (fileInput.target.files[0] as File);
    this.preview();
    const imageSize = this.fileData.size;
    const fileType = this.fileData.type;
    const isFileImage = fileType.split('/', 1);

    if (imageSize > 100000000) {

      alert('Image size is larger, please resize it');
      this.loading = false;
    }

    else if (isFileImage[0] !== 'image') {

      alert('File is not image, please choose image')
      this.loading = false;
    }


    else {
      const formData = new FormData();
      formData.append('image', this.fileData);

      this.clothingsService.uploadImage(formData).subscribe((data: any) => {
        this.loading = false;
        this.imageNameFromServer = data.image;


      }, (error: HttpErrorResponse) => {
        this.loading = false;
        this.responseFailed = true;
        this.responseSuccess = false;
        this.responseText = error.statusText;
      });

    }
  }
  preview() {
    let reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    };

  }


}
