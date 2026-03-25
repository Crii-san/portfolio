import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

interface Experience {
  entreprise: string,
  logo: string,
  site: string,
  poste: string,
  lieu: string,
  dates: string
  taches: string[]
}

@Component({
  selector: 'app-experiences',
  imports: [NgFor, CardModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {
  public experiences: Experience[] = [
    {
      entreprise: 'Inflexsys',
      logo: 'assets/experiences/inflexsys.png',
      site: 'https://www.inflexsys.com/',
      poste: 'Développeuse front-end (Alternance)',
      lieu: 'Mérignac (33)',
      dates: "Septembre 2025 - Mars 2026",
      taches : [
        'Participation à la maintenance d’applications web Angular, correction de bugs et implémentation d’évolutions fonctionnelles, intégration de composants UI' 
      ]
    },
    {
      entreprise: 'Numih France',
      logo: 'assets/experiences/numih-france.png',
      site: 'https://numihfrance.fr/',
      poste: 'Conceptrice/Développeuse (Stage et alternance)',
      lieu: 'Reims (51)',
      dates: 'Avril 2024 - Juin 2025',
      taches : [
        "Participation à la refonte complète d’une application interne utilisée par les équipes métiers, conception, proposition et implémentation de nouvelles fonctionnalités pour améliorer l'expérience utilisateur, développement d’interfaces avec Angular, développement côté serveur avec Java"
      ]
    },
  ]
}
