import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-services',
  standalone: false,
  
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ServicesComponent {
 
  services3 = [
    {
      image: 'watch3.jpg',
      title: 'Security Services for Societies',
      description: 'Reliable security for a safer society.safety is our commitment.'
    },
    {
      image: 'watch2.jpg',
      title: 'Security Services for Banks',
      description: 'Ensure the Safe and Anti-Theft Atmosphere for your Customers at Bank.'
    },
    {
      image: 'watch1.jpg',
      title: 'Security Services for Offices',
      description: 'Ensuring a safe workplace.Protecting your business, ensuring peace of mind.'
    },
    {
      image: 'watch3.jpg',
      title: 'HOUSEKEEPING SERVICES',
      description: 'Enrich the productivity with our shining and calming housekeeping services.'
    },
    {
      image: 'watch1.jpg',
      title: 'Bodyguard services',
      description: 'We ensure your safety with elite protection.Trust us for unmatched security and peace of mind.'
    }
  ];
  
}
