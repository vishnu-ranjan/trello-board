import { Component, OnInit } from '@angular/core';
import TabItem from 'src/app/types/tab';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.component.html',
  styleUrls: ['./home-tab.component.css']
})
export class HomeTabComponent implements OnInit {

  tabItems: TabItem[] | undefined;
  ngOnInit(): void {
    this.tabItems = [{ name: "Board", id: '1100', url: 'board' }
    ]
  }
}
