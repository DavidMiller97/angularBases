import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input('characterList')
  public characterList: Character[] = [
    {
      name: 'Goku',
      power: 10000
    }
  ];

  @Output('onDelete')
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  public delete(id: string): void {

    this.onDeleteCharacter.emit(id)

  }
}
