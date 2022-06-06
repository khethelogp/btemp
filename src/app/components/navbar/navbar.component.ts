import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { onscroll, select } from 'src/app/utils/utils';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private scroller: ViewportScroller) {}

  ngOnInit(): void {
    (function () {
      let selectHeader = select('#header');
      if (selectHeader) {
        let headerOffset = selectHeader.offsetTop;
        let nextElement = selectHeader.nextElementSibling;
        const headerFixed = () => {
          if (headerOffset - window.scrollY <= 0) {
            selectHeader.classList.add('fixed-top');
            nextElement.classList.add('scrolled-offset');
          } else {
            selectHeader.classList.remove('fixed-top');
            nextElement.classList.remove('scrolled-offset');
          }
        };
        window.addEventListener('load', headerFixed);
        onscroll(document, headerFixed);
      }
    })();
  }

  goToSection(target: string) {
    this.scroller.scrollToAnchor(target);
  }
}
