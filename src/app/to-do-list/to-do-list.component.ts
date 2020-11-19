import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
itemdata = [];
  constructor( private service: DataService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  getdataFromChild(e){
  this.itemdata = this.service.getData();
  console.log(this.itemdata);
  }
}
