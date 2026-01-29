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
      dates: "Septembre 2025 - aujourd'hui",
      taches : [
        'Participation à la maintenance d’applications web Angular',
        'Correction de bugs et implémentation d’évolutions fonctionnelles',
        'Intégration de composants UI' 
      ]
    },
    {
      entreprise: 'Numih France (anciennement Mipih)',
      logo: 'assets/experiences/numih-france.png',
      site: 'https://numihfrance.fr/',
      poste: 'Conceptrice/Développeuse (Alternance)',
      lieu: 'Reims (51)',
      dates: 'Septembre 2024 - Juin 2025',
      taches : [
        "Participation à la refonte complète d’une application interne utilisée par les équipes métiers",
        "Conception, proposition et implémentation de nouvelles fonctionnalités pour améliorer l'expérience utilisateur",
        "Développement d’interfaces avec Angular",
        "Développement côté serveur avec Java"
      ]
    },
    {
      entreprise: 'Numih France (anciennement Mipih)',
      logo: 'assets/experiences/numih-france.png',
      site: 'https://numihfrance.fr/',
      poste: 'Développeuse full-stack (Stage)',
      lieu: 'Reims (51)',
      dates: 'Avril 2024 - Juin 2024',
      taches : [
        "Initiation au framework Angular à travers la conception d'une application basique",
        "Participation au développement d’un outil de gestion de base de données",
        "Correction de bugs"
      ]
    },
  ]
}
