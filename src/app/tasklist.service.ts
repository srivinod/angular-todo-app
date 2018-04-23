import { Task } from './task.model';
import { EventEmitter } from '@angular/core';
 
export class TasklistService {
  TasksChanged =  new EventEmitter<Task[]>();

  private tasks : Task []  = [
    new Task('Cras justo odio','active'),
    new Task('Dapibus ac facilisis in','active'),
    new Task('Morbi leo risus','active'),
    new Task('Porta ac consectetur ac','active'),
    new Task('Vestibulum at eros','active')
  ];

  constructor() { }

  getallTasks(){
    return this.tasks.slice();
  } 

  addnewTask(receiveTaskName , receiveTaskStatus){ 
    console.log(receiveTaskStatus);
    this.tasks.push(new Task(receiveTaskName,receiveTaskStatus));    
    return this.TasksChanged.emit(this.tasks.slice());
  }

}
