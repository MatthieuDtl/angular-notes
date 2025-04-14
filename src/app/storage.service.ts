import { Injectable } from '@angular/core';
import { Tag } from './tag';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly TAGS_KEY = 'tags';
  tags: Tag[] = [];


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
}
