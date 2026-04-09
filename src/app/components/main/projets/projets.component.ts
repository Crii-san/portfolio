import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CarouselComponent } from './carousel/carousel.component';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';

export interface Projet {
  name: string,
  image: string,
  description: string,
  technologies: string[],
  link: string
}

@Component({
  selector: 'app-projets',
  imports: [CarouselModule, CarouselComponent, ButtonModule, ChipModule],
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.css'
})
export class ProjetsComponent {
  public projets: Projet[] = [
    {
      name: "Site web personnel",
      image: "/assets/projets/project1.png",
      description: "Ce site est une extension de mon CV, conçu pour présenter plus concrètement mon parcours, mes compétences et mes projets à travers des réalisations personnelles.",
      technologies : ['Angular', 'PrimeNG', 'Github Pages'],
      link: "https://github.com/Crii-san/portfolio"
    },
  ];
}
