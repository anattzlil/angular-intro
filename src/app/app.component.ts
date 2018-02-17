import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() { 
    this.sayHello	= window.setInterval(()=>console.log('Hello!'), 1000);
  }
  sayHello: any;
  dogs: any[];
  title="first Angular App"


}
