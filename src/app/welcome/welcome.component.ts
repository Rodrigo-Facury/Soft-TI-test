import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  goToDashboard() {
    history.pushState('/dashboard', '');

    location.replace(history.state)
  }
}
