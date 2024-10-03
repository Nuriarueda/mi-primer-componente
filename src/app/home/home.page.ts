import { Component } from '@angular/core';

interface Person {
  name: string;
  surname: string;
  age: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  people: Person[] = [];

  newName: string = '';
  newSurname: string = '';
  newAge: string = '';

  constructor() {}

  addPerson() {
    if (this.newName && this.newSurname && this.newAge !== null) {
      this.people.push({
        name: this.newName,
        surname: this.newSurname,
        age: this.newAge
      });
      this.newName = '';
      this.newSurname = '';
      this.newAge = '';
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }

  deletePerson(index: number) {
    this.people.splice(index, 1);
  }
}
