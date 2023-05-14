import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input() characterList: Character[] = [];
  @Output() removeCharacterEmit: EventEmitter<Character> = new EventEmitter();

  removeCharacter(character: Character) {
    this.removeCharacterEmit.emit(character);
  }
}
