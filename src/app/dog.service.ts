import { Injectable } from '@angular/core';
import { Dog } from './dogs/dog';

const DOGS: Dog[] = [
  {id: 1, name: 'Rex', weight: 20, birthDate: new Date(2004, 2, 21), edited: false},
  {id: 2, name: 'Woof', weight: 8, birthDate: new Date(2016, 3, 20), edited: false},
  {id: 3, name: 'Chuck', weight: 28, birthDate: new Date(2010, 10, 10), edited: false},
  {id: 4, name: 'Barkley', weight: 4, birthDate: new Date(2017, 8, 15), edited: false},
  {id: 5, name: 'Prince', weight: 65, birthDate: new Date(2009, 2, 7), edited: false}
];

@Injectable()
export class DogService {
  dogs: Dog[] = DOGS;
  
  constructor() { }

   getDogs(): Dog[] {
    return this.dogs;
  }

  addDog(newDog: Dog){
    newDog.edited = false;
    newDog.id = this.generateId();
    this.dogs.push(newDog);
  }

  generateId() : number {
    return this.dogs[this.dogs.length-1].id+1;
  }

  editDog(id: number, dog: Dog){
    let updateDogIndex = this.dogs.findIndex((dog)=> dog.id == id);
    this.dogs[updateDogIndex] = dog;
  }

  deleteDog(dog){
   DOGS.splice(DOGS.indexOf(dog), 1);
   return DOGS;
  }

 }
