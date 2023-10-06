import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: ICharacter[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  // onDeleteCharacter(index: number):void{ //TODO:: emitir el id del personaje
  //   this.onDelete.emit(index)
  // }

  deleteCharacterById(id?: string):void{ //TODO:: emitir el id del personaje
    if (!id) return;  
    this.onDelete.emit(id)
  }

}
