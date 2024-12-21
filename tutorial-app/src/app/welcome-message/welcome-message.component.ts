import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome-message',
  imports: [CommonModule],
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.css']
})
export class WelcomeMessageComponent implements OnInit {
  showAlert = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.showAlert = false;
    }, 2000); // 2000 milliseconds = 2 seconds
  }

  closeAlert() {
    this.showAlert = false;
  }
}