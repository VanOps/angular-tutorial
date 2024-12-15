import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-head',
  // Al declararlo como standalone, no necesita un módulo que lo importe
  standalone: true,
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    // incluyo un nuevo titulo para la APP
    this.titleService.setTitle('Tutorial, Simplest way to start with Angular');
    this.metaService.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'charset', content: 'utf-8' }
    ]);
    // Agrego un mensaje de bienvenida en un popup
    alert('Welcome to the tutorial');
  }
}