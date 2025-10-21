import { Component } from '@angular/core';
import { CompetencesComponent } from './competences/competences.component';
import { ContactComponent } from './contact/contact.component';
import { EtudesComponent } from './etudes/etudes.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ProjetsComponent } from './projets/projets.component';


@Component({
  selector: 'app-main',
  imports: [CompetencesComponent, ContactComponent, ProjetsComponent, ExperiencesComponent, EtudesComponent, PresentationComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
}
