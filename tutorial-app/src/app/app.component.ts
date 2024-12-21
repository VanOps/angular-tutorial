import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutorial-app';
}