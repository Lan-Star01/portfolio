import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  cards: Card[] = [
    {
      classname: '',
      iconname: 'assets/img/management.png',
      title: 'Workday Management Project',
      description: "The website helps companies to effectively manage their working day. I started this project at work and am currently working on it. For the project I use angular.js, rxjs, primeng, bootsrtap, for the full functionality of the site I cooperate with the back to use the restful API and I always test new futures and follow the debugging. I also designed and built the site according to the client's request."
    },
    {
      classname: '',
      iconname: 'assets/img/medicl.png',
      title: 'Medicine Project',
      description: 'The website is intended for hospital staff to store patient information electronically instead of writing and printing on paper. I started working on this project during my internship and now I am continuing this project. Since this project was already started I had to analyze the whole code. I use angular.js, primeng, bootstrap, restfull API for it. Since the design was already assembled, I have to do mostly the logical part and make some minor changes to the design.'
    },
    {
      classname: '',
      iconname: 'assets/img/market.png',
      title: 'Market Project',
      description: 'The website helps store associates to see product quantities, and can add, filter, or send back to the warehouse, etc. I started working on this project during my internship, because the project was already active, I analyzed the code and started working on it, added new futures and also redesigned the old ones. The project started with jquery and I continued to write the codes using it, but later on I used typescript. I also used bootstrap, Restfull API.'
    },
    // Add more card objects as needed
  ];
}

interface Card {
  classname: string;
  iconname: string;
  title: string;
  description: string;
}
