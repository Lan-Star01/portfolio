import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: string[] = [
    'HTML',
    'CSS',
    'JavaScript',
    'Angular.js',
    'Creativity',
    'Debugging',
    'Communication with Back-end',
    'Problem Solving'
  ];
}
