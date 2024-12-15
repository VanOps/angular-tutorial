import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Aquí importo el componente HeadComponent
import { HeadComponent } from './head/head.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutorial-app';
}
