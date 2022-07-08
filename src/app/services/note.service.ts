import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {Note} from "../note/note";

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private notesUrl = 'api/notes';

  constructor(
    private http: HttpClient,

  ) { }

  getNotes(): Observable<Note[]>{
    return this.http.get<Note[]>(this.notesUrl)
      .pipe(
        tap(_ => this.log('Fetched notes')),
        catchError(this.handleError<Note[]>('getNotes', []))
      );
  }

  getNote(id: number): Observable<Note> {
    return this.http.get<Note>(this.notesUrl + '/' + id)
      .pipe(
        tap(_ => this.log(`Fetched note with id=${id}`)),
        catchError(this.handleError<Note>('getNote'))
      );
  }

  addNote(): Observable<any> {
    let currentDate = new Date();
    let newNote = {title: 'Untitled note', date_created: currentDate, last_modified: currentDate, content: 'Write some notes!'};
    return this.http.post<Note>(this.notesUrl, newNote, this.httpOptions)
      .pipe(
        //tap((newNote: Note) => this.log(`added note w/ id=${newNote.id}`)),
        catchError(this.handleError<any>('addNote'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  //TODO show messages
  private log(message: string) {
    //this.messageService.add(`HeroService: ${message}`)
  }



}
