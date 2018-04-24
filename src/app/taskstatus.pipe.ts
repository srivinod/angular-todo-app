import { PipeTransform, Pipe } from "@angular/core";
import { Task } from "./task.model";

@Pipe({
    name: 'filterStatus'
})
export class TaskStatus implements PipeTransform{    
    transform(items: Array<any>, status: string): Array<any> { 
        return items.filter(item => item.status === status);
      
        
    }   
}