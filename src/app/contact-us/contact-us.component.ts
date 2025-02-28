import { Component,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  standalone: false,
  
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements AfterViewInit {
  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      const accordions = document.querySelectorAll(".accordion");
  
      accordions.forEach((accordion: Element, index: number) => {
        const header = accordion.querySelector(".accordion__header") as HTMLElement;
        const content = accordion.querySelector(".accordion__content") as HTMLElement;
        const icon = accordion.querySelector("#accordion-icon") as HTMLElement;
  
        header.addEventListener("click", () => {
          const isOpen = content.style.height === `${content.scrollHeight}px`;
  
          accordions.forEach((a: Element, i: number) => {
            const c = a.querySelector(".accordion__content") as HTMLElement;
            const ic = a.querySelector("#accordion-icon") as HTMLElement;
  
            c.style.height = i === index && !isOpen ? `${c.scrollHeight}px` : "0px";
            ic.classList.toggle("ri-add-line", i !== index || !isOpen);
            ic.classList.toggle("ri-subtract-fill", i === index && !isOpen);
          });
        });
      });
    }

}
}
