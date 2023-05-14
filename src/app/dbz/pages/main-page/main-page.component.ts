import { Component } from '@angular/core';
import { DbzService } from '../../services/dbz.service';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private readonly dbzService: DbzService) { }

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(character: Character): void {
    this.dbzService.removeCharacter(character)
  }

  onNewCharacter(character: Character): void {
    this.dbzService.saveCharacter(character);
  }
}
