import {Component, Input, OnInit} from '@angular/core';
import {Note} from "../note/note";
import {ActivatedRoute, Router} from "@angular/router";
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
    private router: Router,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit(): void {
    this.getNote();
  }

  getNote(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.noteService.getNote(id)
      .subscribe(note => this.note = note);
  }
}
