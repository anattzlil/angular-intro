import { Injectable } from '@angular/core';

const DOGS = [
  {name: 'Rex', weight: 20, birthDate: new Date(2004, 2, 21), btnValue: '-'},
  {name: 'Woof', weight: 8, birthDate: new Date(2016, 3, 20), btnValue: '-'},
  {name: 'Chuck', weight: 28, birthDate: new Date(2010, 10, 10), btnValue: '-'},
  {name: 'Barkley', weight: 4, birthDate: new Date(2017, 8, 15), btnValue: '-'},
  {name: 'Prince', weight: 65, birthDate: new Date(2009, 2, 7), btnValue: '-'}
];

@Injectable()
export class DogService {
  constructor() { }
 getDogs(){
  return DOGS;
 }

 }
