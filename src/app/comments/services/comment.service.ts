import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { CommentModel } from '../models/comment';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

@Injectable()
export class CommentService {

  //url
  private url = 'http://localhost:2403/comments';

  constructor(private http: Http) { }

  //GET
  public getComments(): Observable<CommentModel[]> {
    let comments = this.http.get(this.url)
      .pipe(map(this.extractComments), catchError(err => this.handleError));
    return comments;
  }

  public getComment(id: string): Observable<CommentModel> {
    let comment = this.http.get(`${this.url}/${id}`)
      .pipe(map(this.extractProduct), catchError(err => this.handleError));
    return comment;
  }

  //POST
  public addComment(comment: CommentModel): Observable<Response> {
    return this.http.post(this.url, comment).pipe(catchError(err => this.handleError));
  }

  //PUT
  public updateComment(comment: CommentModel): Observable<Response> {
    return this.http.put(`${this.url}/${comment.id}`, comment).pipe(catchError(err => this.handleError));
  }

  //DELETE
  public deleteComment(comment: CommentModel): Observable<Response> {
    return this.http.delete(`${this.url}/${comment.id}`).pipe(catchError(err => this.handleError));
  }

  private extractComments(response: Response): CommentModel[] {
    let res = response.json();
    let comments: CommentModel[] = [];
    for (let i = 0; i < res.length; i++) {
      comments.push(new CommentModel(res[i].id, res[i].userName, res[i].commentText, res[i].date));
    }
    return comments;
  }

  private extractProduct(response: Response) {
    let res = response.json();
    let comment = new CommentModel(res.id, res.userName, res.commentText, res.date);
    return comment;
  }

  private handleError(error: any, cought: Observable<any>): any {
    let message = "";

    if (error instanceof Response) {
      let errorData = error.json().error || JSON.stringify(error.json());
      message = `${error.status} - ${error.statusText || ''} ${errorData}`
    } else {
      message = error.message ? error.message : error.toString();
    }

    console.error(message);

    return Observable.throw(message);
  }
}
