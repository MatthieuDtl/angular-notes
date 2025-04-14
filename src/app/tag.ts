export class Tag {
    id: number = 1;
    name: string;
    color: string='#000000';

    constructor(name:string){
        this.name=name;
        this.id+1;
    }
}

  
  