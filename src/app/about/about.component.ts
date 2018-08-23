import { Component, Input, HostListener, SimpleChanges } from '@angular/core';
import { Todo, Hero,DataResponseuser } from '../todo';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'about-comp',
  templateUrl: './about.component.html',
  styleUrls: ['../app.component.css']


})
export class AboutComponent {


  @Input()
  exampleProperty: string = "myInputproperty"

  title = 'Tour of Heroes';
  users;
  customclass = "myclass";
  heroes = [
    new Hero(1, 'Windstorm', 4),
    new Hero(13, 'Bombasto', 7),
    new Hero(15, 'Magneta', 8),
    new Hero(20, 'Tornado', 9)
  ];

  herolist = [{ id: 1, name: 'John', age: 20 }, { id: 2, name: 'Jack', age: 30 }]

  myHero = this.heroes[0];

  myfavroute = this.herolist[0];

  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) {
    console.log("i am home component constructor");

  }

  addTodo() {  console.log("ssss");
    if (this.newTodo.title != '') {
      this.todoDataService.addTodo(this.newTodo);
    }
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }



  ngOnInit() {

    this.getUsers();
    console.log("ngOnInit() called");
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy() called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit() called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges() called');
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);

    }

  }

  getUsers() {
    console.log("getUsersgetUsers");

    this.todoDataService.getUsers().subscribe(
      data => { this.users = data.games; },
      err => console.error(err),
      () => console.log('done user loading')
    );

  }




}