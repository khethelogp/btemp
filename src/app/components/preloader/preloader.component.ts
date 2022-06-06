import { Component, OnInit } from '@angular/core';
import { select } from 'src/app/utils/utils';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss'],
})
export class PreloaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    (function () {
      const scrollto = (el: HTMLElement) => {
        let header = select('#header');
        let offset = header.offsetHeight;

        if (!header.classList.contains('header-scrolled')) {
          offset -= 16;
        }

        let elementPos = select(el).offsetTop;
        window.scrollTo({
          top: elementPos - offset,
          behavior: 'smooth',
        });
      };

      window.addEventListener('load', () => {
        if (window.location.hash) {
          if (select(window.location.hash)) {
            scrollto(window.location.hash as any);
          }
        }
      });

      let preloader = select('#preloader');
      if (preloader) {
        window.addEventListener('load', () => {
          preloader.remove();
        });
      }
    })();
  }
}
