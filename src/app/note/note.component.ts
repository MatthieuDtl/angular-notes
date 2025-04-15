import { Component, input } from '@angular/core';

@Component({
  selector: 'app-note',
  imports: [],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent {
  public id = input<number>(1);
  public name = input<string>("Note");
  public color = input<string>("#FF0000");
  public isChecklist = input<boolean>(false);
  public checklist = input<string[]>([]);
  public checked = input<boolean[]>([]);
  public contenu = input<string>("Contenu");

}
