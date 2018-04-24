import { Component, ViewChild, OnInit, ElementRef, ViewChildren } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Task } from './task.model';
import { TasklistService } from "./tasklist.service";
import { QueryList } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
 
  @ViewChild('addTaskForm') addtaskform: NgForm;
  @ViewChildren('editedTask') updatedTask : QueryList<ElementRef>;
  @ViewChildren('checkTask') checkTaskStatus : QueryList<ElementRef>;
 
  tasks:Task[]; 
  EditMode:Boolean= true;
  selectedTask:number;
  textUpdatedTask : string;
  filteredTask : Boolean = true;
  textfilteredTask : string = 'active';


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
    this.taskService.addnewTask(this.addtaskform.value.task,'active');
  }

  enableEditMode(taskId : number){  
      this.selectedTask = taskId;
      this.EditMode = !this.EditMode;          
  }

  updateTask(taskId){
    this.EditMode = !this.EditMode;    
    this.updatedTask.toArray().forEach((child : ElementRef, key) => { 
      if(key  == taskId)
      this.textUpdatedTask = child.nativeElement.value;      
     });
    const newTaskName = new Task(this.textUpdatedTask,'active');    
    this.taskService.updateTask(taskId,newTaskName);     
  }
 
  deleteTask(taskId : number){
    this.taskService.deleteTask(taskId);
  }
 

}
