import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-workshop';
  firstName: string = 'John';
  lastName: string = 'Doe';

  constructor() {
    // get random firstName and lastName
    this.firstName = this.getRandomFirstName();
    this.lastName = this.getRandomLastName();
  }

  getRandomFirstName(): string {
    const firstNames = ['John', 'Jane', 'Alice', 'Bob', 'Charlie'];
    return firstNames[Math.floor(Math.random() * firstNames.length)];
  }

  getRandomLastName(): string {
    const lastNames = ['Doe', 'Smith', 'Johnson', 'Brown', 'Williams'];
    return lastNames[Math.floor(Math.random() * lastNames.length)];
  }
}
