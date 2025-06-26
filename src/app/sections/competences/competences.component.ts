import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface technology {
  name: string,
  logo: string,
  link: string,
}

@Component({
  selector: 'app-competences',
  imports: [CommonModule],
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.css'
})
export class CompetencesComponent {
  public languages: technology[] = [
    {
      name: "TypeScript",
      logo: "assets/competences/languages/typescript.png",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "PHP",
      logo: "assets/competences/languages/php.png",
      link: "https://www.php.net/",
    },
    {
      name: "HTML",
      logo: "assets/competences/languages/html.png",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    }, 
    {
      name: "CSS",
      logo: "assets/competences/languages/css.png",
      link: "https://developer.mozilla.org/fr/docs/Web/CSS",
    },
    {
      name: "SQL",
      logo: "assets/competences/languages/sql.png",
      link: "https://sql.sh/",
    },
    {
      name: "PL/SQL",
      logo: "assets/competences/languages/plsql.png",
      link: "https://www.oracle.com/database/technologies/appdev/plsql.html",
    },
    {
      name: "C#",
      logo: "assets/competences/languages/csharp.png",
      link: "https://dotnet.microsoft.com/fr-fr/languages/csharp",
    },
    {
      name: "JavaScript",
      logo: "assets/competences/languages/javascript.png",
      link: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
    },
    {
      name: "Java",
      logo: "assets/competences/languages/java.png",
      link: "https://www.oracle.com/java/technologies/",
    },
  ];

  public frameworks: technology[] = [
    {
      name: "Symfony",
      logo: "assets/competences/frameworks/symfony.png",
      link: "https://symfony.com/",
    },
    {
      name: "Angular",
      logo: "assets/competences/frameworks/angular.png",
      link: "https://angular.dev/",
    },
    {
      name: "React",
      logo: "assets/competences/frameworks/react.png",
      link: "https://fr.react.dev/",
    }, 
    {
      name: "Bootstrap",
      logo: "assets/competences/frameworks/bootstrap.png",
      link: "https://getbootstrap.com/",
    },
    {
      name: "Express.js",
      logo: "assets/competences/frameworks/express.png",
      link: "https://expressjs.com/",
    },
    {
      name: "Spring",
      logo: "assets/competences/frameworks/spring.png",
      link: "https://spring.io/",
    },
    {
      name: ".NET Core",
      logo: "assets/competences/frameworks/net.png",
      link: "https://dotnet.microsoft.com/fr-fr/download",
    },
    {
      name: "React Native",
      logo: "assets/competences/frameworks/react.png",
      link: "https://reactnative.dev/",
    },
    {
      name: "Godot",
      logo: "assets/competences/frameworks/godot.png",
      link: "https://godotengine.org/fr/",
    },
  ]
}
