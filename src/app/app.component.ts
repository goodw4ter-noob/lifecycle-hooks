import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lifecycle-hooks';
  public show: boolean = true;

  public array = [1, 2, 3];

  public modifyArray() {
    const lastElemIndex = this.array.length - 1;
    // this.array.push(this.array[lastElemIndex] + 1);
    this.array = [...this.array, this.array.push(this.array[lastElemIndex] + 1)];
  }
}
