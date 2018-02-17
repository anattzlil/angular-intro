import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import {Dog} from './dog';


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
  selectedDog: Dog = new Dog();
  lastUpdated: string = "";

  ngOnInit() {
    this.title = "Our Dogs";
    this.dogs = this.dogService.getDogs();
  }
  editDog(dog: Dog){
    this.selectedDog = Object.assign({},dog);
  }

  deleteDog(dog){
    this.dogService.deleteDog(dog);
  }

  addLastUpdated(dog) {
    this.lastUpdated = "Last dog added: " + new Date().toString() + ", name: " + dog.name;
  }

  addLastEdited(dog){
   let index = this.dogs.findIndex(checkId=>checkId.id === dog.id);
   this.dogs[index] = dog;
   this.dogs[index].edited = true;
  }
}
