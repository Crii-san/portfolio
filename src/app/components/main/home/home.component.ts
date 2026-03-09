import { Component } from '@angular/core';
import { Button } from "primeng/button";
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-home',
  imports: [Button, TooltipModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
