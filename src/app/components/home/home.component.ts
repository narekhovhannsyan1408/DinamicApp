import { Component, OnInit } from '@angular/core';
import { DataModel, CommentsModel } from '../../model/data.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public data: Array<DataModel> = [];
  public form: FormGroup;
  public comments: Array<CommentsModel>;
  public commentsIndex: number;

  constructor(private fb: FormBuilder) {
    const data = JSON.parse(localStorage.getItem('data'));
    if (data) {
      this. data = data;
    }
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: [''],
    });
  }

  addItem() {
    const name = this.form.get('name');
    const obj =  {
      text: name.value,
      point: 0,
      comments: []
    };
    this.data.push(obj);
    name.setValue('');
    this.setData(this.data);
  }

  deleteItem(index) {
    this.data.splice(index, 1);
    this.setData(this.data);
    this.comments = null;
  }

  setData (data) {
    localStorage.setItem('data', JSON.stringify(data));
  }

  setComments(item, index) {
    this.comments = [];
    this.comments = item;
    this.commentsIndex = index;
  }

  getComments(event, comment) {
    const obj = {
      description: event
    };
    this.data[this.commentsIndex].comments.push(obj);
    this.data[this.commentsIndex].point++;
    this.setData(this.data);
  }

}
