import { Component, OnInit } from '@angular/core';
import { Action } from './action'
import { MenuOption } from './menuOption'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'srm';
  actions:Action[];
  menuOptions:MenuOption[];
  menuSelectedIndex:Number;
  actionSelected:Number;
  actionSelected2:Number;
  actionSelected3:Number;

  ngOnInit () {
    this.actions = [
      {Id: 0, Label: "Ações"},
      {Id: 1, Label: "Ação 1"},
      {Id: 2, Label: "Ação 2"},
      {Id: 3, Label: "Ação 3"}
    ];
    this.actionSelected = 0;
    this.actionSelected2 = 0;
    this.actionSelected3 = 0;

    this.menuSelectedIndex = 0;
    this.menuOptions = [
      {Id: 0, Label: "Painel de Gestão", ImageSrc: "../assets/img/internetWhite.png"},
      {Id: 1, Label: "Conta Digital", ImageSrc: "../assets/img/arroba.png"},
      {Id: 2, Label: "Ant. de Recebíveis", ImageSrc: "../assets/img/chart.png"}
    ];
  }

  onActionSelected (val:any) {
    this.logValue(val);
    
  }

  onMenuItemClicked (val:any) {
    this.logValue(val);
    this.menuSelectedIndex = val;
  }

  logValue (val:any) {
    console.log("option '" + val + "' has been selected.");
  }


}
