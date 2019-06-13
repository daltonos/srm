import { Component, OnInit } from '@angular/core';
import { Action } from './action'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'srm';
  actions:Action[];

  ngOnInit () {
    this.actions = [
      {Id: 1, Label: "Action 1"},
      {Id: 2, Label: "Action 2"},
      {Id: 3, Label: "Action 3"}
    ];
  }
}
