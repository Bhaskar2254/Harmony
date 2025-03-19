import { Component, Inject, inject, OnInit,PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';
import { once } from 'node:events';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Harmony';
  constructor(@Inject(PLATFORM_ID)private platformId: object){}
    ngOnInit(): void {
      if (isPlatformBrowser(this.platformId)) { 
        AOS.init({
           once: true,
        }); 
        window.addEventListener('load', function() {
          AOS.refresh();});
      }
    }
}
