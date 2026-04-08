import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CarouselComponent } from './carousel/carousel.component';

export interface Projet {
  name: string,
  image: string,
  description: string,
  technologies: string[]
}

@Component({
  selector: 'app-projets',
  imports: [CarouselModule, CarouselComponent],
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.css'
})
export class ProjetsComponent {
  public projets: Projet[] = [
    {
      name: "Projet 1",
      image: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. ",
      technologies : ['Java', 'Spring', 'Angular']
    },
    {
      name: "Projet 2",
      image: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. ",
      technologies : ['React', 'React Native', 'NodeJS']    
    },
    {
      name: "Projet 3",
      image: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. ",
      technologies : ['Express', 'TypeScript']
    },
    {
      name: "Projet 4",
      image: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. ",
      technologies : ['Symfony', 'PHP', 'Angular', 'MySQL']
    }
  ];
}
