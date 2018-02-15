import { Injectable } from '@angular/core';

const CATS = [
  {name: 'Mitzi', weight: 20, birthDate: new Date(2004, 2, 21)},
  {name: 'Cat', weight: 8, birthDate: new Date(2016, 3, 20)},
  {name: 'Charlie', weight: 28, birthDate: new Date(2010, 10, 10)},
  {name: 'Bagira', weight: 4, birthDate: new Date(2017, 8, 15)},
  {name: 'Chittos', weight: 65, birthDate: new Date(2009, 2, 7)}
];

@Injectable()
export class CatService {

  constructor() { }
  getCats(){
    return CATS;
  }
}
