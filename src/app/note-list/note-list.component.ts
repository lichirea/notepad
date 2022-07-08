import { Component, OnInit } from '@angular/core';
import {Note} from "../note/note";
import {NoteService} from "../services/note.service";

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes!: Note[];
  noteSelected: number = 0;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(): void {
    this.noteService.getNotes()
      .subscribe(notes => this.notes = notes);
  }

  addNote(): void {
    this.noteService.addNote()
      .subscribe(note => {
        this.notes.push(note);
        this.noteSelected = note.id;
        console.log("HELLO WE HAVE A NEW NOTE " + note);
      });

  }

  deleteNote() {

  }

  saveNote() {

  }
}
