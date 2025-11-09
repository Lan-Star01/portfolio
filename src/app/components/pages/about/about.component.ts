import { Component } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private navigationService: NavigationService) {}

  scrollToSection(sectionId: string): void {
    this.navigationService.scrollToSection(sectionId);
  }
}
