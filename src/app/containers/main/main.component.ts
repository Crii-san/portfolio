import { Component } from '@angular/core';
import { CompetencesComponent } from "../../competences/competences.component";
import { ContactComponent } from "../../contact/contact.component";

@Component({
  selector: 'app-main',
  imports: [CompetencesComponent, ContactComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
}
