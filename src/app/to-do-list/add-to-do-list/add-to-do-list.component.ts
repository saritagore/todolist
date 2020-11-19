import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Form } from '@angular/forms';
import { DataService } from '../.././shared/data.service';
@Component({
  selector: 'app-add-to-do-list',
  templateUrl: './add-to-do-list.component.html',
  styleUrls: ['./add-to-do-list.component.scss']
})
export class AddToDoListComponent implements OnInit {
  @Output() msg = new EventEmitter();
  status = ['New', 'In-Progress', 'Completed'];
  priority = ['Low', 'Medium', 'High'];
  itemName = '';
  Priority = '';
  Status = '';
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.editData.subscribe(rowData => {
      this.itemName = rowData['items'];
      this.Status = rowData['status'];
      this.Priority = rowData['priority'];
    })
  }
  // tslint:disable-next-line: typedef
  onSubmit(form) {
    this.service.setData(form.value);
    this.msg.emit('fired');
    form.form.reset();
  }
  // tslint:disable-next-line: typedef
  update() {
    this.service.updateItemsData({
      items: this.itemName,
      status: this.Status,
      priority: this.Priority
    });
    this.msg.emit('fired');
  }
  // tslint:disable-next-line: typedef
  empty() {
    this.service.empty();
    this.msg.emit('fired');
  }
}
