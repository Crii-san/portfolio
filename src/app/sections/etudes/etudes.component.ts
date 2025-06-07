import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

interface etude {
  formation: string,
  etablissement: string,
  parcours: string | null,
  lieu: string,
  dates: string
}

@Component({
  selector: 'app-etudes',
  imports: [NgFor, NgIf],
  templateUrl: './etudes.component.html',
  styleUrl: './etudes.component.css'
})
export class EtudesComponent {
  public etudes: etude[] = [
    {
      formation: 'Cycle ingénieur en alternance',
      etablissement: 'EFREI (campus de Bordeaux)',
      parcours: 'Parcours Logiciels et Systèmes d’Information',
      lieu: 'Bordeaux (33)',
      dates: '2025 - 2028'
    },
    {
      formation: 'BUT Informatique',
      etablissement: 'IUT de Reims-Châlons-Charleville',
      parcours: "Parcours réalisation d'applications : conception, développement, validation",
      lieu: 'Reims (51)',
      dates: '2022 - 2025'
    },
    {
      formation: "Licence d'économie et gestion",
      etablissement: 'Université de Reims Champagne-Ardenne',
      parcours: null,
      lieu: 'Reims (51)',
      dates: '2020 - 2022'
    }
  ]
}
