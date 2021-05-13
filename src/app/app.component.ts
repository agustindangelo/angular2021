import { Component } from '@angular/core';

interface Item {
  description: string;
  completed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  list: Item[] = [];
  title = 'angular2021';
  value = 0;

  add(increment: number): void {
    this.value = this.value + increment;
  }

  reset(): void {
    this.value = 0;
  }
  getClassesForDiv(): string[]{
    if (this.value > 5){
      return ['resaltado'];
    } else{
      return ['atenuado'];
    }
  }

  addItem(inputControl: any): void {
    if (inputControl.value === ''){
      return;
    }
    this.list.push(
      {
        description: inputControl.value,
        completed: false,
      }
    );
    inputControl.value = '';
  }
  remove(item: any): void {
    const index = this.list.findIndex(each => each.description === item.description);
    this.list.splice(index, 1);
  }

  toggle(item: any): void{
    item.completed = !item.completed;
  }

  edit(item: any, inputControl: any): void {
    if (inputControl.value === ''){
      return;
    }
    item.description = inputControl.value;
  }
}
