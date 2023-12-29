import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() movieId!: number;
  comments: string[] = [];

  addComment(comment: string) {
    this.comments.push(comment);
  }
}