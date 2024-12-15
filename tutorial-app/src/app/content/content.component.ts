import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  content: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadContent();
  }

  loadContent(): void {
    this.http.get('assets/content/content.json').subscribe(data => {
      this.content = data;
    });
  }

  contentKeys(): string[] {
    return Object.keys(this.content);
  }
}