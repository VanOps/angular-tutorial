import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WelcomeMessageComponent } from '../welcome-message/welcome-message.component';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [WelcomeMessageComponent],
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Tutorial, Simplest way to start with Angular');
    this.metaService.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'charset', content: 'utf-8' }
    ]);
  }
}