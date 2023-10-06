import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { ICharacter } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {

    constructor( private dbzSvc: DbzService ){}

    get characters():ICharacter[]{
        return [ ...this.dbzSvc.characters ];
    }

    onDeleteCharacter( id:string ):void{
        this.dbzSvc.deleteCharacterById( id );
    }

    onNewCharacter( character: ICharacter ):void{
        this.dbzSvc.addCharacter( character );
    }

}