import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Trunk',
      power: 10
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 100
    },
    {
      id: uuid(),
      name: 'Vegueta',
      power: 800
    },
  ];

  saveCharacter(character: Character) {
    this.characters.push(character);
  }

  removeCharacter(characteritem: Character) {
    this.characters = this.characters.filter((character) => character.id !== characteritem.id);
  }
}
