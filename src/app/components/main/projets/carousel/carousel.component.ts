// carousel.component.ts
import { Component, Input } from '@angular/core';
import { Projet } from '../projets.component';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  imports: [ChipModule]
})
export class CarouselComponent {
  @Input() projets: Projet[] = [];
  
  public currentIndex: number = 0;

  public next() {
    this.currentIndex = (this.currentIndex + 1) % this.projets.length;
  }

  public prev() {
    this.currentIndex = (this.currentIndex - 1 + this.projets.length) % this.projets.length;
  }
}