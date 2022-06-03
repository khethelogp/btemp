import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-b2t',
  templateUrl: './b2t.component.html',
  styleUrls: ['./b2t.component.scss'],
})
export class B2tComponent implements OnInit {
  constructor(private scroller: ViewportScroller) {}

  ngOnInit(): void {}

  goToSection(target: string) {
    this.scroller.scrollToAnchor(target);
  }

  scrollToTop() {
    window.scroll(0, 0);
  }
}
