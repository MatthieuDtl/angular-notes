import { Component, input } from '@angular/core';

@Component({
  selector: 'app-note',
  imports: [],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent {
  public id = input<number>(1);
  public title = input<string>("Note");
  public color = input<string>("#FF0000");
  public contenu = input<string>("Contenu");
  public tags = input<string[]>([]);

}
