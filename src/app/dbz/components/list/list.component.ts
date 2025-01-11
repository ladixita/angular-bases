import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Goku',
      power: 15000
    }
  ];

  // @Output() public onDeleteId: EventEmitter<number> = new EventEmitter();
  @Output() public deleteCharacterId: EventEmitter<string> = new EventEmitter();

  // onDelete(index: number): void {
  //   console.log({ index });
  //   // this.characterList.splice(index, 1);
  //   this.onDeleteId.emit(index);
  // }

  onDeleteCharacterById(id?: string): void {
    if(!id) return;
    this.deleteCharacterId.emit(id);
  }
}
