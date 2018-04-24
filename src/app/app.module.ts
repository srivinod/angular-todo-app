import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TasklistService } from './tasklist.service';
import { TaskStatus } from './taskstatus.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TaskStatus
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [TasklistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
