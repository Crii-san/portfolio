import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Technology {
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
  public languages: Technology[] = [
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
      logo: "assets/competences/languages/sql.png",
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

  public frameworks: Technology[] = [
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
    }
  ];
  public database: Technology[] = [
    {
      name: "Oracle",
      logo: "assets/competences/database/oracle.png",
      link: "https://www.oracle.com/",
    },
    {
      name: "MySQL",
      logo: "assets/competences/database/mysql.png",
      link: "https://www.mysql.com/fr/",
    },
    {
      name: "SQLite",
      logo: "assets/competences/database/sqlite.png",
      link: "https://www.sqlite.org/",
    }, 
    {
      name: "MongoDB",
      logo: "assets/competences/database/mongodb.webp",
      link: "https://www.mongodb.com/",
    },
    {
      name: "PostgreSQL",
      logo: "assets/competences/database/postgresql.png",
      link: "https://www.postgresql.org/",
    },
    {
      name: "Doctrine",
      logo: "assets/competences/database/doctrine.png",
      link: "https://www.doctrine-project.org/",
    },
    {
      name: "Prisma",
      logo: "assets/competences/database/prisma.png",
      link: "https://www.prisma.io/",
    },
  ];
  public divers: Technology[] = [
    {
      name: "Docker",
      logo: "assets/competences/divers/docker.webp",
      link: "https://www.docker.com/",
    },
    {
      name: "PrimeNG",
      logo: "assets/competences/divers/primeng.png",
      link: "https://primeng.org/",
    },
    {
      name: "VSCode",
      logo: "assets/competences/divers/vscode.png",
      link: "https://code.visualstudio.com/",
    },
    {
      name: "PhpStorm",
      logo: "assets/competences/divers/phpstorm.png",
      link: "https://www.jetbrains.com/fr-fr/phpstorm/",
    },
    {
      name: "Visual Studio",
      logo: "assets/competences/divers/vs.png",
      link: "https://code.visualstudio.com/",
    },
    {
      name: "Eclipse",
      logo: "assets/competences/divers/eclipse.webp",
      link: "https://eclipseide.org/",
    },
    {
      name: "GitLab",
      logo: "assets/competences/divers/gitlab.png",
      link: "https://about.gitlab.com/fr-fr/free-trial/devsecops/?utm_medium=cpc&utm_source=google&utm_campaign=gitlab_search_fr&utm_content=fr_br_gitlab_core&utm_term=gitlab&_bt=692837190945&_bk=gitlab&_bm=e&_bn=g&_bg=158296160046&gad_source=1&gad_campaignid=21074610372&gbraid=0AAAAADcJCbfuD-DrWDCIATEpo_q49THbb&gclid=CjwKCAjw3_PCBhA2EiwAkH_j4qG7k8g6OrvlMp-TWXtFDzUxhIFbKSA3to54rcXXzlL00k6T8sv9IRoCC-gQAvD_BwE",
    },
    {
      name: "GitHub",
      logo: "assets/competences/divers/github.png",
      link: "https://github.com/"
    },
    {
      name: "Godot",
      logo: "assets/competences/frameworks/godot.png",
      link: "https://godotengine.org/fr/",
    },
  ]
}
