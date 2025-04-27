import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-services',
  standalone: false,
  
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
 
  services3 = [
    {
      image: '/Watchman/privatewatchman.jpg',
      title: 'Residential Security Services',
      description: 'Reliable security for a safer society.safety is our commitment.'
    },
    {
      image: '/Watchman/commercial_watchman.jpeg',
      title: 'Commercial Security Services',
      description: 'Ensure the Safe and Anti-Theft Atmosphere for your Customers at Banks/Hospitals'
    },
    {
      image: '/Watchman/watchmanBack.jpeg',
      title: 'Security Services for Events/Sites',
      description: 'Ensuring a safe workplace.Protecting your business, ensuring peace of mind.'
    },
    {
      image: '/Watchman/bouncer1.jpg',
      title: 'Bodyguard / Bouncer services',
      description: 'We ensure your safety with elite protection.Trust us for unmatched security and peace of mind.'
    },
    {
      image: 'Gallery/vision.jpg',
      title: 'Training staff/employees services',
      description: 'We ensure your safety with elite protection.Trust us for unmatched security and peace of mind.'
    },
    {
      image: 'HouseKeeping1.jpg',
      title: 'HouseKeeping Services for Private',
      description: 'Enrich the productivity with our shining and calming housekeeping services.'
    } 
  ];
  
}
