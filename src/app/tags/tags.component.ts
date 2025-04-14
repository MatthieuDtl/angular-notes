import { Component } from '@angular/core';
import { StorageService } from '../storage.service';
import { Tag } from '../tag';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-tags',
  imports: [TagComponent],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {
  loaded: boolean = false;
  tags: Tag[] = [];

  constructor(private storage: StorageService){
    this.loadTags();
  }

  loadTags(): void {
    if (!this.loaded) {
      this.tags = this.storage.getTags();
      this.loaded = true;
    }}

    dialogAddTag( event :Event ): void {
      event.preventDefault();  
      const tagName = window.prompt('Ajouter un nouveau tag');
      if (tagName && tagName.trim() !== ''){
        const newTag : Tag = new Tag(tagName);
        this.storage.addTag(newTag);
      }
    }
    
    deleteTag(tagToDelete: Tag): void {
      const confirmDelete = window.confirm(`Supprimer le tag "${tagToDelete.name}" ?`);
      if (confirmDelete) {
        this.loaded = false; 
        this.storage.deleteTag(tagToDelete); 
        this.loadTags();
      }
    }
}
