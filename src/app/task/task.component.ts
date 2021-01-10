import { TmplAstElement } from '@angular/compiler';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent  {
  @Input() task: Task;
  @Output() edit = new EventEmitter<Task>();

}
