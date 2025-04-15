import { Component } from '@angular/core';
import { StorageService } from '../storage.service';
import { Note } from '../note';
import { NoteComponent } from '../note/note.component';

@Component({
  selector: 'app-notes',
  imports: [NoteComponent],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {

  loaded: boolean = false;
  notes: Note[] = [];

  constructor(private storage: StorageService){
      this.loadNotes();
    }

    loadNotes(): void {
    if (!this.loaded) {
      this.notes = this.storage.getNotes();
      this.loaded = true;
    }
  }

  dialogAddTag( event :Event ): void {
        event.preventDefault();  
        const noteName = window.prompt('Ajouter une nouvelle note');
        if (noteName && noteName.trim() !== ''){
          const newNote : Note = new Note(noteName);
          this.storage.addNote(newNote);
        }
      }
}
