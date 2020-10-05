import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  displayedColumns: string[] = ['id', 'name', 'class'];
  dataSource = new MatTableDataSource();

  cartData = [
    { id: '1', name: 'asim', class: 'this is his name' },
    { id: '2', name: 'biebek', class: 'this is her name' },
    { id: '3', name: 'bibash', class: 'this is my name' }
  ]

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  ngOnInit(): void {

    this.dataSource.data = this.cartData;
  }

}
