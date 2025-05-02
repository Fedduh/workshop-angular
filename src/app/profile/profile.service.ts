import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  professions = [
    'Teacher',
    'Engineer',
    'Teacher',
    'Doctor',
    'Teacher',
    'Artist',
  ];

  getRandomProfession(): Observable<string> {
    return new Observable<string>((observer) => {
      const index = this.getRandomIndexProfession();
      observer.next(this.professions[index]);
      observer.complete();
    }).pipe(delay(200));
  }

  getRandomIndexProfession(): number {
    return Math.floor(Math.random() * this.professions.length);
  }

  getHobbies(): Observable<string[]> {
    return new Observable<string[]>((observer) => {
      const hobbies = ['Reading', 'Traveling', 'Cooking', 'Gardening'];
      observer.next(hobbies);
      observer.complete();
    }).pipe(delay(500));
  }

  save(firstname: string, lastname: string): void {
    console.log(`Profile saved: ${firstname} ${lastname}`);
  }
}
