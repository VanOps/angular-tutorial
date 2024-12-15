import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-welcome-message',
  imports: [CommonModule],
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.css']
})
export class WelcomeMessageComponent {
  showAlert = true;

  closeAlert() {
    this.showAlert = false;
  }
}