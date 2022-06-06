import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { select, onscroll } from 'src/app/utils/utils';

@Component({
  selector: 'app-b2t',
  templateUrl: './b2t.component.html',
  styleUrls: ['./b2t.component.scss'],
})
export class B2tComponent implements OnInit {
  constructor(private scroller: ViewportScroller) {}

  ngOnInit(): void {
    (() => {
      let backtotop = select('.back-to-top');
      if (backtotop) {
        const toggleBacktotop = () => {
          if (window.scrollY > 100) {
            backtotop.classList.add('active');
          } else {
            backtotop.classList.remove('active');
          }
        };
        window.addEventListener('load', toggleBacktotop);
        onscroll(document, toggleBacktotop);
      }
    })();
  }

  goToSection(target: string) {
    this.scroller.scrollToAnchor(target);
  }

  scrollToTop() {
    window.scroll(0, 0);
  }
}
