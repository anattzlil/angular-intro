import { Component, OnInit, OnDestroy } from '@angular/core';
import { CatService } from './cat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private catService: CatService) {}

  ngOnInit() { 
    this.sayHello	= window.setInterval(()=>console.log('Hello!'), 1000);
  }
  title: string = 'Add a new dog';
  sayHello: any;
  dogName: string;
  dogWeight: number;
  birthDate: string;
  dogs: any[];
  cats = this.catService.getCats();
  addDog(){
    // let fixedDate = new Date(this.birthDate);
    // let newDog = {name: this.dogName, weight: this.dogWeight, birthDate: fixedDate, btnValue:'-'};
    // this.dogs.push(newDog);
  }
  dateClick(i){
    // this.btnValue = this.btnValue === '-' ? '+' : '-';
    if (this.dogs[i].btnValue === '-'){
      this.dogs[i].btnValue = '+'
    } else {
      this.dogs[i].btnValue = '-';
    }
  }

}
