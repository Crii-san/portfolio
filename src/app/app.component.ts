import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./containers/header/header.component";
import { MainComponent } from "./containers/main/main.component";
import { FooterComponent } from "./containers/footer/footer.component";
import { BurgerMenuComponent } from "./sections/burger-menu/burger-menu.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MainComponent, FooterComponent, BurgerMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  public showBurgerMenu: boolean = false;

  public closeBurgerMenu(): void {
      this.showBurgerMenu = false;
  }
}
