import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { AccordionModule } from 'primeng/accordion';

interface Experience {
  id: number,
  entreprise: string,
  logo: string,
  site: string,
  poste: string,
  typePoste: string,
  lieu: string,
  dates: string
  taches: string[],
  description: string
}

@Component({
  selector: 'app-experiences',
  imports: [NgFor, CardModule, TagModule, AccordionModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {
  public experiences: Experience[] = [
    {
      id: 0,
      entreprise: 'Inflexsys',
      logo: 'assets/experiences/inflexsys.png',
      site: 'https://www.inflexsys.com/',
      poste: 'Développeuse front-end',
      typePoste: 'Alternance',
      lieu: 'Mérignac (33)',
      dates: "Septembre 2025 - Mars 2026",
      taches : [
        'Participation à la maintenance d’applications web Angular',
        'Correction de bugs et implémentation d’évolutions fonctionnelles',
        'intégration de composants UI'
      ],
      description: 'Développement sur différentes applications back-office en fonction des tickets Jira.'
    },
    {
      id: 1,
      entreprise: 'Numih France',
      logo: 'assets/experiences/numih-france.png',
      site: 'https://numihfrance.fr/',
      poste: 'Conceptrice / Développeuse',
      typePoste: 'Stage et Alternance',
      lieu: 'Reims (51)',
      dates: 'Avril 2024 - Juin 2025',
      taches : [
        "Conception, proposition et implémentation de nouvelles fonctionnalités pour améliorer l'expérience utilisateur",
        "Développement d’interfaces avec Angular",
        "Développement côté serveur avec Java"
      ],
      description: "Refonte complète d’une application interne utilisée par les équipes métiers, destinée à gérer les données d’une application tierce."
    },
  ]
}
