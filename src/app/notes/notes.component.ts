import { Component } from '@angular/core';
import { StorageService } from '../storage.service';
import { Note } from '../note';
import { NoteComponent } from '../note/note.component';
import { FormsModule } from '@angular/forms';
import { Tag } from '../tag';

@Component({
  selector: 'app-notes',
  imports: [NoteComponent,FormsModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {

  loaded: boolean = false;
  notes: Note[] = [];
  editing: Note | null = null;
  creating: Note | null = null;
  availableTags: Tag[] = [];
  selectedTagId: number | null = null;

  constructor(private storage: StorageService){
      this.loadNotes();
      this.notes = this.storage.getNotes();
      this.availableTags = this.storage.getTags();
      console.log('Tags disponibles :', this.availableTags);
    }

    loadNotes(): void {
    if (!this.loaded) {
      this.notes = this.storage.getNotes();
      this.loaded = true;
    }
  }

  dialogAddNote( event :Event ): void {
        event.preventDefault();  
        const noteName = window.prompt('Ajouter une nouvelle note');
        if (noteName && noteName.trim() !== ''){
          const newNote : Note = new Note(noteName);
          this.storage.addNote(newNote);
        }
      }

    deleteNote(noteToDelete: Note): void {
        const confirmDelete = window.confirm(`Supprimer la note "${noteToDelete.title}" ?`);
        if (confirmDelete) {
          this.loaded = false; 
          this.storage.deleteNote(noteToDelete); 
          this.loadNotes();
        }
    }

      submitNote(): void {
        if (this.editing) {
          if (this.editing.id === 0) {
            this.storage.addNote(this.editing);
          } else {
            this.storage.updateNote(this.editing);
          }
          this.loadNotes();
          this.editing = null;
        }
      }

      editNote(note: Note): void {
        this.editing = note;
      }
      cancelEditNote(): void {
        this.editing = null;
        this.loaded = false
        this.loadNotes();
      }

      removeTagFromNote(tagIndex: number): void {
        if (this.creating) {
          this.creating.tags.splice(tagIndex, 1);
        } else if (this.editing) {
          this.editing.tags.splice(tagIndex, 1);
        }
      }

      addTagToNote(): void {
        if (!this.selectedTagId) return;
    
        const tagToAdd = this.availableTags.find(tag => tag.id === this.selectedTagId);
        if (tagToAdd) {
          const target = this.creating ?? this.editing;
          if (target && !target.tags.some(tag => tag.id === tagToAdd.id)) {
            target.tags.push(tagToAdd);
          }
        }
    
        this.selectedTagId = null;
      }

}
