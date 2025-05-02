import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from './profile.service'; // Assuming the service exists

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @Input() firstname: string = '';
  @Input() lastname: string = '';

  displayName: string = '';
  profession: string = '';
  isLoading: boolean = false;

  hobbies: string[] = [];
  isLoadingHobbies: boolean = false;
  isAscending: boolean = true;

  constructor(private profileService: ProfileService) {
    this.fetchHobbies();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['firstname'] || changes['lastname']) {
      this.displayName = `${this.firstname} ${this.lastname}`;
    }
  }

  fetchProfession() {
    this.isLoading = true;
    this.profession = '';

    this.profileService.getRandomProfession().subscribe({
      next: (profession) => {
        this.profession = profession;
        this.isLoading = false;
      },
    });
  }

  fetchHobbies() {
    this.isLoadingHobbies = true;
    this.hobbies = [];

    this.profileService.getHobbies().subscribe({
      next: (hobbies) => {
        this.hobbies = hobbies;
        this.isLoadingHobbies = false;
      },
    });
  }

  toggleSortHobbies(): void {
    this.hobbies.sort((a, b) =>
      this.isAscending ? a.localeCompare(b) : b.localeCompare(a)
    );
    this.isAscending = !this.isAscending;
  }
}
