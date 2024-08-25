import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription, interval, take, takeUntil } from 'rxjs';
import { Banner1Component } from './banner-1/banner1.component';
import { Banner2Component } from './banner-2/banner2.component';
import { Banner3Component } from './banner-3/banner3.component';
import { timer } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule, Banner1Component, Banner2Component, Banner3Component],
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.scss',
})
export class HeroBannerComponent {
  // myVariable: number = 0; // Replace 'number' with the type of your variable
  // private intervalId: any;
  // constructor(private cdr: ChangeDetectorRef) {}
  // ngOnInit() {
  //   // Call the function initially
  //   this.changeVariable();
  //   // Set up the interval to call the function every five seconds
  //   // this.intervalId = setInterval(() => {
  //   //   this.changeVariable();
  //   //   this.cdr.detectChanges(); // Manually trigger change detection
  //   // }, 5000);
  // }
  // ngOnDestroy() {
  //   // Clear the interval when the component is destroyed to avoid memory leaks
  //   if (this.intervalId) {
  //     clearInterval(this.intervalId);
  //   }
  // }
  // changeVariable() {
  //   this.myVariable++; // Change this line according to your requirements
  //   console.log(`Variable value: ${this.myVariable}`);
  // }
}
