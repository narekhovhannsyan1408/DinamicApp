import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataModel } from '../../model/data.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() data: DataModel;
  @Output()
  commentsData: EventEmitter<number> = new EventEmitter<number>();
  public commentForm: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createCommentForm();
  }

  createCommentForm() {
    this.commentForm = this.fb.group({
      description: [''],
    });
  }

  addComment () {
    const comment = this.commentForm.get('description');
    this.commentsData.emit(comment.value);
    comment.setValue('');

  }
}
