import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  list:string[]=[];
  msg: string='Angular';

  click(){
    this.list =[];
    this.msg;
    for(let i=0; i<this.msg.length;i++){
      this.list.push(this.msg[i]);
    }
  }
}