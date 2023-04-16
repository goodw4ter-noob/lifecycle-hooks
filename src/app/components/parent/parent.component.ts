import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {Subject} from "rxjs";
import {UntilDestroy} from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// export class ParentComponent implements OnDestroy, OnInit, OnChanges {
export class ParentComponent implements OnChanges, DoCheck {
  @Input() public title: string = 'before init parent';
  @Input() public array: number[] = []; // ngOnChanges работать не будет, так как слушается только ссылка, а не сами значения
  private destroy$ = new Subject();
  private length: number = this.array.length;

  constructor(
    private readonly cdr: ChangeDetectorRef,
  ) {
    console.log('constructor', this.title);
  }

  ngOnInit(): void {
    // console.log('ngOnInit', this.title);
    // fromEvent(document, 'click')
    //   // .pipe(untilDestroyed(this))
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe(console.log);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes, this.title);
  }

  ngDoCheck(): void {
    if (this.length !== this.array.length) {
      console.log('ngDoCheck works!');
      // this.cdr.markForCheck();
      this.length = this.array.length;
    }
  }

  ngOnDestroy(): void {
    // this.destroy$.next(true);
    // this.destroy$.complete();
  }

}
