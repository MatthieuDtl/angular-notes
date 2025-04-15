import { Component, input } from '@angular/core';
import { Tag } from '../tag';

@Component({
  selector: 'app-tag',
  imports: [],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css'
})
export class TagComponent {
  public id = input<number>(1);
  public name = input<string>("Tag");
  public color = input<string>("#FF0000");
  
}
