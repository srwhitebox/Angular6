import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <div><img src="{{imageUrl}}" /></div>
  <button (click)="onClickMe($event)" class="btn btn-primary" [class.disabled]="!isValid">Submit</button>
  <products></products>
  <rating [rating]="4"></rating>
  <br>
  <rating [rating]="1"></rating>
  `
})
export class AppComponent {
  title: string = 'My First Angular App';
  imageUrl = "https://goo.gl/qmty9A";
  isValid = true;
  onClickMe($event){
    console.log("Clicked", $event);
  }
}
