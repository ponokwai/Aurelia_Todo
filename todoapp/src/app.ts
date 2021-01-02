interface Todo{
  description: string,
  done: boolean
}

export class App {
  heading = "Todo";
  todos: Todo[] = [];
  todoDescription = '';

  addTodo(){
    if(this.todoDescription){
      this.todos.push({
        description: this.todoDescription,
        done: false
      });
      
      this.todoDescription = '';
    }
  }

  removeTodo(todo){
    const index = this.todos.indexOf(todo);
    if(index !== 1){
      this.todos.splice(index, 1);
    }
  }

  cloneTodo(todo){
    const index = this.todos.indexOf(todo);
    if(index !== -1){
      this.todos.push(todo);
    }   
  }

  updateTodo(todo){
    console.log(todo);
    this.todoDescription = todo.todoDescription;
    this.heading = "Updating";
    this.removeTodo(todo);
  }
}
