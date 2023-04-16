import {Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
// export class ChildComponent implements  OnDestroy, OnInit{
export class ChildComponent implements  OnChanges, DoCheck {
  constructor() {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
