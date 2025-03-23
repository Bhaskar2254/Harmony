import { Component, Inject, inject, OnInit,PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';
import { once } from 'node:events';
import { Router,NavigationEnd, RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Harmony';

  constructor(@Inject(PLATFORM_ID) private platformId: object, private router: Router) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize AOS only in the browser
      AOS.init({
        once: true, // Run animation only once
        duration: 1000,
        easing: 'ease-in-out',
      });

      // Refresh AOS when the page has fully loaded
      window.addEventListener('load', () => {
        AOS.refresh();
      });

      // Reinitialize AOS on route change (important if you're navigating to different views)
      this.router.events.subscribe((event: any) => {
        if (event instanceof NavigationEnd) {
          // Re-initialize AOS on route change to apply animations to the newly loaded content
          AOS.refresh();
        }
      });
      }
    }
}
