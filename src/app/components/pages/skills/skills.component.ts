import { Component } from '@angular/core';

export interface Skill {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name: 'Angular',
      icon: 'assets/img/angular.svg'
    },
    {
      name: 'TypeScript',
      icon: 'assets/img/icon-typescript.svg'
    },
    {
      name: 'JavaScript',
      icon: 'assets/img/icon-javscript.svg'
    },
    {
      name: 'Html',
      icon: 'assets/img/Html 5.svg'
    },
    {
      name: 'CSS',
      icon: 'assets/img/CSS3.svg'
    },
    {
      name: 'Git',
      icon: 'assets/img/icon-git.svg'
    },
    {
      name: 'GitHub',
      icon: 'assets/img/GitHub.svg'
    },
    {
      name: 'Azure DevOps',
      icon: 'assets/img/Azure.svg'
    },
    {
      name: 'Figma',
      icon: 'assets/img/Figma.svg'
    },
    {
      name: 'Bootstrap',
      icon: 'assets/img/Bootstrap.svg'
    }
  ];
}
