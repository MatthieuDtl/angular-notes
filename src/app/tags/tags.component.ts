import { Component } from '@angular/core';
import { StorageService } from '../storage.service';
import { Tag } from '../tag';
import { TagComponent } from '../tag/tag.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tags',
  imports: [TagComponent,FormsModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {
  loaded: boolean = false;
  tags: Tag[] = [];
  editing: Tag | null = null;


  constructor(private storage: StorageService){
    this.loadTags();
  }

  loadTags(): void {
    if (!this.loaded) {
      this.tags = this.storage.getTags();
      this.loaded = true;
    }
  }

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

    submitTag(): void {
      if (this.editing) {
        if (this.editing.id === 0) {
          this.storage.addTag(this.editing);
        } else {
          this.storage.updateTag(this.editing);
        }
        this.loadTags();
        this.editing = null;
      }
    }
    
    editTag(tag: Tag): void {
      this.editing = tag;
    }

    cancelEdit(): void {
      this.editing = null;
      this.loaded = false
      this.loadTags();
    }
      
}
