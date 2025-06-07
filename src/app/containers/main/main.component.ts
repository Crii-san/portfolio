import { Component } from '@angular/core';
import { CompetencesComponent } from "../../sections/competences/competences.component";
import { ContactComponent } from "../../sections/contact/contact.component";
import { ProjetsComponent } from "../../sections/projets/projets.component";
import { ExperiencesComponent } from "../../sections/experiences/experiences.component";
import { EtudesComponent } from "../../sections/etudes/etudes.component";
import { PresentationComponent } from "../../sections/presentation/presentation.component";

@Component({
  selector: 'app-main',
  imports: [CompetencesComponent, ContactComponent, ProjetsComponent, ExperiencesComponent, EtudesComponent, PresentationComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
}
