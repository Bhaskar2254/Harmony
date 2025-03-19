import { Component, Inject, inject, OnInit,PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';
import { once } from 'node:events';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID)private platformId: object){}
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) { 
      AOS.init({
         once: true,
      }); 
    }
  }
  
  downloadBrochure() {
    const brochureUrl = 'tvs.png'; // Update with actual file path
    window.open(brochureUrl, '_blank');
  }
}
