import { Tag } from './tag';

export class Note {
    id: number = 1;
    title: string = "";
    color: string = "#FF0000";
    contenu: string = "Contenu";
    tags: Tag[] = [];

    constructor(title:string){
        this.title=title;
    }
};