import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentSection: string = '';

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.navigationService.currentSection$.subscribe(section => {
      this.currentSection = section;
    });
  }

  scrollToSection(sectionId: string): void {
    this.navigationService.scrollToSection(sectionId);
  }
}
