import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.scss'
})
export class ComingSoonComponent implements OnInit {

  remainingTime: { days: number, hours: number, minutes: number, seconds: number } = {
    days: 0, hours: 0, minutes: 0, seconds: 0
  };

  ngOnInit(): void {
    const targetDate: Date = new Date('2024-04-06T00:00:00');

    setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      this.remainingTime.days = Math.floor(difference / (1000 * 60 * 60 * 24));
      this.remainingTime.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.remainingTime.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      this.remainingTime.seconds = Math.floor((difference % (1000 * 60 )) / (1000 ));
    }, 1000);
  }



}
