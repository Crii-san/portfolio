import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';
import { NgFor } from '@angular/common';
import { Section } from '../header.component';

@Component({
  selector: 'app-burger-menu',
  imports: [NgFor],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.css'
})
export class BurgerMenuComponent implements AfterViewInit, OnInit, OnDestroy {

  @Input() showBurgerMenu: boolean = false;
  
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    // Ajout de la classe pour déclencher l'ouverture avec animation
    requestAnimationFrame(() => {
      this.renderer.addClass(this.el.nativeElement, 'open');
    });
  }
  
  ngOnInit() {
    document.body.classList.add('no-scroll');
  }

  ngOnDestroy() {
    document.body.classList.remove('no-scroll');
  }


  public sections: Section[] = [
    {
      name :'Home',
      link: 'home',
      icon: 'pi pi-home'
    },
    {
      name :'À propos',
      link: 'presentation',
      icon: 'pi pi-user'
    }, 
    {
      name :'Compétences',
      link: 'competences',
      icon: 'pi pi-wrench'
    },
    {
      name :'Études',
      link: 'etudes',
      icon: 'pi-book'
    },
    {
      name :'Expériences',
      link: 'experiences',
      icon: 'pi pi-briefcase'
    },
    {
      name :'Projets',
      link: 'projets',
      icon: 'pi pi-code'
    },
    {
      name :'Contact',
      link: 'contact',
      icon: 'pi pi-mail'
    }
  ]

  @Output() closeBurgerMenu: EventEmitter<boolean> = new EventEmitter();

  public onCloseBurgerMenu(): void {
    const element = this.el.nativeElement;

    this.renderer.removeClass(element, 'open');
    this.renderer.addClass(element, 'close');

    // Écoute la fin de la transition pour enlever la classe .close
    const onTransitionEnd = () => {
      this.renderer.removeClass(element, 'close');
      element.removeEventListener('transitionend', onTransitionEnd);
      this.closeBurgerMenu.emit(true);  // émission ici après fermeture visuelle
    };

    element.addEventListener('transitionend', onTransitionEnd);
  }


  public scrollToSection(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.onCloseBurgerMenu();
  }

}
