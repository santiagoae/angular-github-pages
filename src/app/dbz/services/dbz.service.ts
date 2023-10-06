import { Injectable } from '@angular/core';
import { ICharacter } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

console.log(uuid());

@Injectable({
    providedIn: 'root'
})
export class DbzService {

    public characters: ICharacter[] = [
        {
            name: 'Krillin',
            power: 1000,
            id: uuid(),
        },
        {
            name: 'Goku',
            power: 9500,
            id: uuid(),
        },
        {
            name: 'Vegueta',
            power: 9200,
            id: uuid(),
        }
    ];

    addCharacter( c:ICharacter ):void{
        const newCharacter: ICharacter = { ...c, id: uuid() }
        this.characters.push(newCharacter);
    }

    // onDeleteCharacter( id:number ):void {
    //     this.characters.splice(id,1);
    // }
    deleteCharacterById( id:string ):void {
        this.characters = this.characters.filter( ({id: idCharacter}) => idCharacter !== id )
    }
    
}