import { Component, Renderer2, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { Randominfo } from './pages/randominfo/randominfo';
import { Funstuff } from './pages/funstuff/funstuff';
import { Sidebar } from './sidebar/sidebar/sidebar';
import { Gallery } from './pages/gallery/gallery/gallery';
import { Contact } from './pages/contact/contact/contact';
import { Router, NavigationEnd } from '@angular/router';
import { Books } from './pages/books/books/books';
import { CommonModule } from '@angular/common';
import { Personalcard } from './pages/personalcard/personalcard';
import { trigger, transition, style, animate, query } from '@angular/animations';
import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, Home, Randominfo, Funstuff, Sidebar, Gallery, Contact, Books, CommonModule, Personalcard],
  templateUrl: './app.html',
  styleUrl: './app.css',
  animations: [
    trigger('routeFade', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0 })
        ], { optional: true }),

        query(':enter', [
          animate('180ms ease-in', style({ opacity: 1 }))
        ], { optional: true })
      ])
    ])
  ]
})
export class App {
  routeState = '';
  protected readonly title = signal('My Random site x3');
constructor(private router: Router, private renderer: Renderer2) {this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.routeState = event.urlAfterRedirects;
      });}

  ngOnInit(): void {
    if (this.router.url === '/') {
      this.router.navigateByUrl('/home', { replaceUrl: true });
  }
}

  isLeftSidebarCollapsed = signal(true);
  toggleIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void 
  {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }
  darkMode = true;

toggleDarkMode() {
  this.darkMode = !this.darkMode;

  if (this.darkMode) {
      this.renderer.addClass(document.body, 'body-dark');
      this.renderer.removeClass(document.body, 'body-light');
    } else {
      this.renderer.addClass(document.body, 'body-light');
      this.renderer.removeClass(document.body, 'body-dark');
    }
  }
  

  


}


