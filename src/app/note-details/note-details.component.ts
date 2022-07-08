import {Component, Input, OnInit} from '@angular/core';
import {Note} from "../note/note";
import {ActivatedRoute} from "@angular/router";
import {NoteService} from "../services/note.service";

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {

  @Input() note?: Note;

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
  ) {
  }

  ngOnInit(): void {
    this.getNote();
  }


  private getNote(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.noteService.getNote(id)
      .subscribe(note => this.note = note);
  }
}
