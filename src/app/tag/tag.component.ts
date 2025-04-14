import { Component, input } from '@angular/core';
import { Tag } from '../tag';

@Component({
  selector: 'app-tag',
  imports: [],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css'
})
export class TagComponent {
  tag = input<Tag>({ id: 0, name: 'Tag', color: '#000000' });
}
