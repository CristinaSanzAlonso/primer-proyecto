import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//importamos el componente que hemos hecho -> home
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('primer-proyecto');
}
