import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Note } from "../note/note";

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const notes = [
      { id: 1, title: 'Test1Title', date_created: new Date('2019-01-16'), last_modified: new Date(2019, 0, 17, 23,42, 11), content: 'This is a cool note'},
      { id: 2, title: 'Test2Title', date_created: new Date('2019-01-16'), last_modified: new Date(2019, 0, 17, 23,43, 11), content: 'This is a cool note2'},
    ];
    return {notes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(notes: Note[]): number {
    return notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 11;
  }
}
