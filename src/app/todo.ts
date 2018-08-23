export class Todo {
  id: number;
  title: string = '';
  complete: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}


export class Hero {
    constructor(
    public id: number,
    public name: string,
    public age: number) { }
}





export class DataResponseuser{
   constructor(
    public title: string,
    public enabled: string) { }  

}
