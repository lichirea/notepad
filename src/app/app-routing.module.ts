import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NoteDetailsComponent} from "./note-details/note-details.component";

const routes: Routes = [
  {path: 'notes/:id', component: NoteDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
