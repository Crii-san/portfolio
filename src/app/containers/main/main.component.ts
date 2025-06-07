import { Component } from '@angular/core';
import { CompetencesComponent } from "../../sections/competences/competences.component";
import { ContactComponent } from "../../sections/contact/contact.component";

@Component({
  selector: 'app-main',
  imports: [CompetencesComponent, ContactComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
}
