import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    this.setTitleAndMeta();
  }

  setTitleAndMeta() {
    this.titleService.setTitle('TutorialApp');
    this.metaService.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'charset', content: 'utf-8' }
    ]);
  }
}