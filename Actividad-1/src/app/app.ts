import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonaComponente } from './components/persona-componente/persona-componente';

@Component({
  imports: [RouterOutlet, PersonaComponente],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Actividad-1');
}
