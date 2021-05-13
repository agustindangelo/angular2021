import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular2021';

  counterValue = 0;

  onCountChanged(event: any): void{
    this.counterValue = event;
  }
  onSecondCounterNumberClicked(event: any): void{
    this.counterValue = 0;
  }
}
