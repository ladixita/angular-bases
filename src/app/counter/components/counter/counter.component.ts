import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <p>Bienvenidos a Angular</p>
    <p>Counter: {{counter}}</p>
    <button (click)="increaseBy(1)">+ 1</button>
    <button (click)="resetDefault()">Reset</button>
    <button (click)="increaseBy(-1)">- 1</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;
  public counterSave: number = this.counter;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetDefault(): void {
    // this.counter = this.counterSave;
    this.counter = 10;
  }
}
