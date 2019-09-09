import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  comments:Map<number,string[]>=new Map<number,string[]>();
  public check = new Subject<any>();

  constructor() {
    let list=[];
    for(let i=0 ;i<15;i++){
      // list.push(i.toString());
      this.comments.set(i,list);
      list=[];
    }
    //console.log(this.comments.get(10));
   }
   broadcastChange(){
     this.check.next(this.comments);
   }
}
