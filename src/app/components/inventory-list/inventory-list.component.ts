import { Component, OnInit } from '@angular/core';
import { InventoryItem } from '../../classes/inventory-item'

@Component({
  selector: 'inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {
  inventoryItems: InventoryItem[];
  inventoryItemBarcode: string;
  inventoryItemSerial: string;
  idForInventoryItem: number;

  constructor() { }

  ngOnInit(): void {
    this.inventoryItems = [
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

  addInventoryItem(): void {
    this.idForInventoryItem = 4;
    if (this.inventoryItemBarcode.trim().length == 0){
      return;
    }
    if (this.inventoryItemSerial.trim().length == 0){
      return;
    }

    this.inventoryItems.push({
      id: this.idForInventoryItem, 
      barcode: this.inventoryItemBarcode,
      serial: this.inventoryItemSerial
    })

    this.inventoryItemBarcode = '';
    this.inventoryItemSerial = '';
    this.idForInventoryItem++;
  }

  deleteInventoryItem(id: number): void {
    this.inventoryItems = this.inventoryItems.filter(inventoryItem => inventoryItem.id != id)
  }

}