import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//importamos el componente que hemos hecho -> home
import { Home } from './home/home';
import { PruebaComponent } from './components/prueba/prueba';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, PruebaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('primer-proyecto');
}
