import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <h3> {{ counter }} </h3>
        <button (click)="incraseBy(1)">+1</button>
        <button (click)="resetCounter()">reset</button>
        <button (click)="incraseBy(-1)">-1</button>    
    `
})

export class CounterComponent {
    
    public counter:number = 10;

    constructor() { }

    incraseBy(value: number):void {
      this.counter += value;
    }   
    resetCounter(){
      this.counter = 10;
    }
}