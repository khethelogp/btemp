import { Component, OnInit } from '@angular/core';
import { on, select, onscroll } from 'src/app/utils/utils';
import * as AOS from 'aos';
import * as Isotope from 'isotope-layout';
declare var require: any;
const GLightbox = require('glightbox');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    (function () {
      'use strict';

      let navbarlinks = select('#navbar .scrollto', true);
      const navbarlinksActive = () => {
        let position = window.scrollY + 200;
        navbarlinks.forEach((navbarlink: any) => {
          if (!navbarlink.hash) return;
          let section = select(navbarlink.hash);
          if (!section) return;
          if (
            position >= section.offsetTop &&
            position <= section.offsetTop + section.offsetHeight
          ) {
            navbarlink.classList.add('active');
          } else {
            navbarlink.classList.remove('active');
          }
        });
      };

      window.addEventListener('load', navbarlinksActive);
      onscroll(document, navbarlinksActive);

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

      on('click', '.mobile-nav-toggle', function (this: any, e: any) {
        select('#navbar').classList.toggle('navbar-mobile');
        this.classList.toggle('bi-list');
        this.classList.toggle('bi-x');
      });

      on(
        'click',
        '.navbar .dropdown > a',
        function (this: any, e: any) {
          if (select('#navbar').classList.contains('navbar-mobile')) {
            e.preventDefault();
            this.nextElementSibling.classList.toggle('dropdown-active');
          }
        },
        true
      );

      on(
        'click',
        '.scrollto',
        function (this: any, e: any) {
          if (select(this.hash)) {
            e.preventDefault();

            let navbar = select('#navbar');
            if (navbar.classList.contains('navbar-mobile')) {
              navbar.classList.remove('navbar-mobile');
              let navbarToggle = select('.mobile-nav-toggle');
              navbarToggle.classList.toggle('bi-list');
              navbarToggle.classList.toggle('bi-x');
            }
            scrollto(this.hash);
          }
        },
        true
      );

      window.addEventListener('load', () => {
        let portfolioContainer = select('.portfolio-container');
        if (portfolioContainer) {
          let portfolioIsotope = new Isotope(portfolioContainer, {
            itemSelector: '.portfolio-item',
          });

          let portfolioFilters = select('#portfolio-flters li', true);

          on(
            'click',
            '#portfolio-flters li',
            function (this: any, e: any) {
              e.preventDefault();
              portfolioFilters.forEach(function (el: any) {
                el.classList.remove('filter-active');
              });
              this.classList.add('filter-active');

              portfolioIsotope.arrange({
                filter: this.getAttribute('data-filter'),
              });
              // portfolioIsotope.on('arrangeComplete', function () {
              //   AOS.refresh();
              // });
            },
            true
          );
        }
      });

      const portfolioLightbox = GLightbox({
        selector: '.portfolio-lightbox',
      });

      window.addEventListener('load', () => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: true,
          mirror: false,
        });
      });
    })();
  }
}
