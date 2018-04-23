import { Component, ViewChild, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Task } from './task.model';
import { TasklistService } from "./tasklist.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
 
  @ViewChild('addTaskForm') addtaskform: NgForm;
 
  tasks:Task[]; 
  EditMode:Boolean= true;
  selectedTask:number;

  ngOnInit( ) { 
    this.tasks = this.taskService.getallTasks(); 
    this.taskService.TasksChanged.subscribe(
      (tasks : Task[]) => {
        this.tasks = tasks;
      }
    );
  }
 
  constructor(private taskService : TasklistService){} 
  
  onAddtask(){
    this.taskService.addnewTask(this.addtaskform.value.task,'sdfs');
  }

  enableEditMode(taskId : number){  
    this.selectedTask = taskId;
    this.EditMode = !this.EditMode;
  }

}
