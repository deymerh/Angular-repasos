import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {

  @Output()
  public onNewEventEmitter: EventEmitter<Character> = new EventEmitter();

  public character = {
    id: uuid(),
    name: '',
    power: 0
  }

  emitCharacter() {
    if (!this.character.name) return;
    this.onNewEventEmitter.emit(this.character);
    this.character = { name: '', power: 0, id: '' };
  }
}
