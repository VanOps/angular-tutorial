// filepath: /home/epicuro/Desktop/IngenieríaInformatica/curso2/cuatrimestre1/MI-DesarrolloAplicacionRed/code/angular-tutorial/tutorial-app/src/app/head/head.component.ts
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [],
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  title = 'Tutorial rápido Angular';

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      { name: 'description', content: 'Tutorial rápido de Angular para principiantes.' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'charset', content: 'utf-8' }
    ]);
  }
}