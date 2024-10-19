import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home-about',
  standalone: true,
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.css'],
})
export class HomeAboutComponent implements OnInit, OnDestroy {
  num1: number = 0;
  num2: number = 0;
  num3: number = 0;

  constructor() {}

  ngOnInit() {
    this.cuonterUp();
  }
  cuonterUp() {
    const a = interval(20).subscribe((value) => {
      this.num1 = value;
      if (this.num1 == 265) {
        a.unsubscribe();
      }
    });
    const b = interval(28).subscribe((value) => {
      this.num2 = value;
      if (this.num2 == 200) {
        b.unsubscribe();
      }
    });
    const c = interval(50).subscribe((value) => {
      this.num3 = value;
      if (this.num3 == 53) {
        c.unsubscribe();
      }
    });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.num1 = 0;
    this.num2 = 0;
    this.num3 = 0;
  }
}
