import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';


@Component({
  selector: 'app-display-to-dolist',
  templateUrl: './display-to-dolist.component.html',
  styleUrls: ['./display-to-dolist.component.scss']
})
export class DisplayToDolistComponent implements OnInit, OnChanges {
  itemArray = [];
  low = [];
  medium = [];
  high = [];
  new = [];
  inProgress = [];
  completed = [];
  @Input() itemdata;
  constructor(private service: DataService) { }

  ngOnInit(): void {

  }
  // tslint:disable-next-line: typedef
  ngOnChanges() {
    console.log('i am in chnage');
console.log(this.itemdata);

  }
  // tslint:disable-next-line: typedef
  editData(row) {
    console.log(row);

    this.service.updateData(row);
  }
  // tslint:disable-next-line: typedef
  removeData(i) {
    this.service.removeItem(i);
    this.itemdata = this.service.getData();
    console.log(this.service.getData());
  }
  // tslint:disable-next-line: typedef
  sortStatus(k){
    this.new = this.itemdata.filter(ele => {
      return ele.status === 'New';
    });
    this.inProgress = this.itemdata.filter(ele => {
      return ele.status === 'In-Progress';
    });
    this.completed = this.itemdata.filter(ele => {
      return ele.status === 'Completed';
    });
    if(k==='asc'){
      let temp = this.new.concat(this.inProgress);
      let final = temp.concat(this.completed);
      this.itemdata = final;
    }else{
      let temp = this.completed.concat(this.inProgress);
      let final = temp.concat(this.new);
      this.itemdata = final;
    }
  }
  sortPriority(k){
    this.low = this.itemdata.filter(ele => {
      return ele.priority === 'Low';
    });
    this.medium = this.itemdata.filter(ele => {
      return ele.priority === 'Medium';
    });
    this.high = this.itemdata.filter(ele => {
      return ele.priority === 'High';
    });
    if(k === 'asc'){
      let temp = this.low.concat(this.medium);
    let final = temp.concat(this.high);
    this.itemdata = final;
    }else{
      let temp = this.high.concat(this.medium);
      let final = temp.concat(this.low);
      this.itemdata = final;
    }
  }

  // ascSort(k) {
  //   if (k === 's') {
  //     this.new = this.itemdata.filter(ele => {
  //       return ele.status === 'New';
  //     });
  //     this.inProgress = this.itemdata.filter(ele => {
  //       return ele.status === 'In-Progress';
  //     });
  //     this.completed = this.itemdata.filter(ele => {
  //       return ele.status === 'Completed';
  //     });

  //     let temp = this.new.concat(this.inProgress);
  //     let final = temp.concat(this.completed);
  //     this.itemdata = final;

  //   } else if (k === 'p') {
  //     this.low = this.itemdata.filter(ele => {
  //       return ele.priority === 'Low';
  //     });
  //     this.medium = this.itemdata.filter(ele => {
  //       return ele.priority === 'Medium';
  //     });
  //     this.high = this.itemdata.filter(ele => {
  //       return ele.priority === 'High';
  //     });
  //   }
  //   let temp = this.low.concat(this.medium);
  //   let final = temp.concat(this.high);
  //   this.itemdata = final;
  // }
  // // tslint:disable-next-line: typedef
  // decSort(k) {
  //   if (k === 's') {
  //     this.new = this.itemdata.filter(ele => {
  //       return ele.status === 'New';
  //     });
  //     this.inProgress = this.itemdata.filter(ele => {
  //       return ele.status === 'In-Progress';
  //     });
  //     this.completed = this.itemdata.filter(ele => {
  //       return ele.status === 'Completed';
  //     });

  //     let temp = this.completed.concat(this.inProgress);
  //     let final = temp.concat(this.new);
  //     this.itemdata = final;

  //   } else if (k === 'p') {
  //     this.low = this.itemdata.filter(ele => {
  //       return ele.priority === 'Low';
  //     });
  //     this.medium = this.itemdata.filter(ele => {
  //       return ele.priority === 'Medium';
  //     });
  //     this.high = this.itemdata.filter(ele => {
  //       return ele.priority === 'High';
  //     });

  //     let temp = this.high.concat(this.medium);
  //     let final = temp.concat(this.low);
  //     this.itemdata = final;

  //   }
  // }

}
