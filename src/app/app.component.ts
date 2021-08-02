import { Component, OnInit } from '@angular/core';
import TabItem from './types/tab';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  name:string | undefined;
  tabs: TabItem[] | undefined;

  ngOnInit(): void {
    this.name="Vishnu Ranjan";
    this.tabs = [{name: 'Home', id:'1000',url:'home'}, {name:'Admin', id:'1010',url:'Admin'}];
  }  
}
