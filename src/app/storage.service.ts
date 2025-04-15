import { Injectable } from '@angular/core';
import { Tag } from './tag';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly TAGS_KEY = 'tags';
  tags: Tag[] = [];
  notes: Note[] = [];
  private readonly NOTES_KEY = 'notes';


  constructor() {
    this.getTags();
   }

  getTags(): Tag[] {
    const data = localStorage.getItem(this.TAGS_KEY);
    this.tags = data ? JSON.parse(data) : [];
    return this.tags;
  }

  addTag(tag: Tag): void {
    this.tags.push(tag);
    localStorage.setItem(this.TAGS_KEY, JSON.stringify(this.tags));
  }

  deleteTag(tagToDelete: Tag): void {
    this.tags = this.tags.filter(tag => tag.name !== tagToDelete.name);
    localStorage.setItem(this.TAGS_KEY, JSON.stringify(this.tags));
  }

  updateTag(updatedTag: Tag): void {
    const index = this.tags.findIndex(t => t.id === updatedTag.id);
    if (index !== -1) {
      this.tags[index] = updatedTag;
      this.addTags(this.tags);
    }
  }

  addTags(tags: Tag[]): void {
    localStorage.setItem(this.TAGS_KEY, JSON.stringify(tags));
  }

  getNotes(): Note[] {
    const data = localStorage.getItem(this.NOTES_KEY);
    this.notes = data ? JSON.parse(data) : [];
    return this.notes;
  }
  
  addNote(note: Note): void {
    this.notes.push(note);
    localStorage.setItem(this.NOTES_KEY, JSON.stringify(this.notes));
  }
  
  deleteNote(noteToDelete: Note): void {
    this.notes = this.notes.filter(note => note.id !== noteToDelete.id);
    localStorage.setItem(this.NOTES_KEY, JSON.stringify(this.notes));
  }
  
  updateNote(updatedNote: Note): void {
    const index = this.notes.findIndex(n => n.id === updatedNote.id);
    if (index !== -1) {
      this.notes[index] = updatedNote;
      this.addNotes(this.notes);
    }
  }
  
  addNotes(notes: Note[]): void {
    localStorage.setItem(this.NOTES_KEY, JSON.stringify(notes));
  }
  
}
