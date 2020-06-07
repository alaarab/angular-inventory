import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {
  inventories: object[];

  constructor() { }

  ngOnInit(): void {
    this.inventories = [
      {
        'id': 1,
        'barcode': "ABC1234",
        'serial': "7mc7a",
      },
      {
        'id': 2,
        'barcode': "DEF1234",
        'serial': "1mc7a",
      },
      {
        'id': 3,
        'barcode': "GHI1234",
        'serial': "2mc7a",
      }
    ]
  }

}
