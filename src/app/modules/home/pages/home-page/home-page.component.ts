import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {

  anio: number = new Date().getFullYear();

  constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) { }

  public styles: string[] = [
    'assets/vendor/animate.css/animate.min.css',
    'assets/vendor/aos/aos.css',
    'assets/vendor/bootstrap/css/bootstrap.min.css',
    'assets/vendor/bootstrap-icons/bootstrap-icons.css',
    'assets/vendor/glightbox/css/glightbox.min.css',
    'assets/vendor/swiper/swiper-bundle.min.css',
    'assets/css/style.css'
  ];

  public scripts: string[] = [
    'assets/vendor/purecounter/purecounter_vanilla.js',
    'assets/vendor/aos/aos.js',
    'assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
    'assets/vendor/glightbox/js/glightbox.min.js',
    'assets/vendor/isotope-layout/isotope.pkgd.min.js',
    'assets/vendor/swiper/swiper-bundle.min.js',
    'assets/vendor/waypoints/noframework.waypoints.js',
    'assets/js/home/main.js'
  ];

  ngOnInit(): void { 
    this.loadStyles();
    this.loadScripts();
  }

  public loadStyles(): void {
    this.styles.forEach(style => {
      const link = this._renderer2.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('href', style);
      this._renderer2.appendChild(this._document.head, link);
    });
  }

  public removeStyles(): void {
    this.styles.forEach(style => {
      const link = this._document.querySelector(`link[href="${style}"]`);
      this._renderer2.removeChild(this._document.head, link);
    });
  }

  public loadScripts(): void {
    this.scripts.forEach(script => {
      const scriptElement = this._renderer2.createElement('script');
      scriptElement.setAttribute('src', script);
      this._renderer2.appendChild(this._document.body, scriptElement);
    });
  }

  public removeScripts(): void {
    this.scripts.forEach(script => {
      const scriptElement = this._document.querySelector(`script[src="${script}"]`);
      this._renderer2.removeChild(this._document.body, scriptElement);
    });
  }

  ngOnDestroy(): void {
    this.removeStyles();
    this.removeScripts();
  }

}