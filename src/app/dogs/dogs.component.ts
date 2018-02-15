import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';


@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  constructor(
    private dogService: DogService) {}
  title: string;
  dogs: any[];

  ngOnInit() {
    this.title = "Our Dogs";
    this.dogs = this.dogService.getDogs();
  }

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
