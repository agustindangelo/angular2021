import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() config = {description: '', incrementNumber: 1};
  @Input() count = 0;
  @Input() subtitle = '';

  @Output() countChanged = new EventEmitter<number>();
  @Output() numberClicked = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  increment(): void{
    this.count = this.count + this.config.incrementNumber;
    this.countChanged.emit(this.count);
  }

  onNumberClicked(): void{
    this.numberClicked.emit(this.count);
  }
}
