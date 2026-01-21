import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Timeline } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

interface etude {
  formation: string,
  etablissement: string,
  parcours: string | null,
  lieu: string,
  dates: string,
  link: string
}

@Component({
  selector: 'app-etudes',
  imports: [NgFor, NgIf, Timeline, CardModule, ButtonModule],
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
      dates: '2025 - 2028',
      link: 'https://www.efrei.fr/programme-grande-ecole/cycle-ingenieur-par-apprentissage-lsi-hybride/'
    },
    {
      formation: 'Bachelor Universitaire de Technologie en Informatique (BUT)',
      etablissement: 'IUT de Reims-Châlons-Charleville',
      parcours: "Parcours réalisation d'applications : conception, développement, validation",
      lieu: 'Reims (51)',
      dates: '2022 - 2025',
      link: 'https://www.univ-reims.fr/formation/catalogue-de-formation/bachelor-universitaire-de-technologie-informatique,23515,38949.html?args=R9qFsCnMmKDtxCa17YTDkHVqaqbfYRXwwTnCVt2witCDUIiVoUdkeMDp%2AXGEGm2SMIhvMbuZ3_kOrRxvJlk6dOorIryuNioRCyFFyPAvhl9tCdwYdtHRrwAvNC1tDg_H&formation_id=1584&sit_id=1'
    },
    {
      formation: "Licence d'économie et gestion",
      etablissement: 'Université de Reims Champagne-Ardenne',
      parcours: null,
      lieu: 'Reims (51)',
      dates: '2020 - 2022',
      link: 'https://www.univ-reims.fr/formation/catalogue-de-formation/licence-economie,23515,38949.html?args=R9qFsCnMmKDtxCa17YTDkHVqaqbfYRXwwTnCVt2witCDUIiVoUdkeMDp%2AXGEGm2SMIhvMbuZ3_kOrRxvJlk6dOorIryuNioRCyFFyPAvhl9tCdwYdtHRrwAvNC1tDg_H&formation_id=1487&sit_id=1'
    }
  ]
}
