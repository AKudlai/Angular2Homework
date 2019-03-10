export class CommentModel {
    id: number;
    userName: string;
    commentText: string;
    date: Date;

    constructor(id, userName, commentText, date) {
        this.id = id;
        this.userName = userName;
        this.commentText = commentText;
        this.date = date;
    }
}