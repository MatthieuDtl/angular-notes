export class Tag {
    id: number = 1;
    name: string;
    color: string='#FF0000';

    constructor(name:string){
        this.name=name;
        this.id+1;
    }
}

  
  