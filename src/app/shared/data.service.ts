import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  itemsArray = [];
  editData = new Subject();
  constructor() { }
  // tslint:disable-next-line: typedef
  setData(obj) {
    this.itemsArray.push(obj);
  }
  // tslint:disable-next-line: typedef
  getData() {
    return [...this.itemsArray];
  }
  // tslint:disable-next-line: typedef
  updateData(rowData) {
    this.editData.next(rowData);
  }
  // tslint:disable-next-line: typedef
  updateItemsData(obj) {
    this.itemsArray.forEach(element => {
      if (element.items === obj.items) {
        element.status = obj.status;
        element.priority = obj.priority;
      }
    });
  }
  // tslint:disable-next-line: typedef
  empty(){
    this.itemsArray = [];
  }
  removeItem(i){
    this.itemsArray.splice(i, 1);
  }
}
