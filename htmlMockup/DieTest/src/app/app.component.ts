import { Component, OnInit } from '@angular/core';
import { DieComponent } from '../app/die/die.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DieTest';

  public dice: Array<DieComponent> = [
      new DieComponent(1), new DieComponent(2), new DieComponent(3), new DieComponent(4), new DieComponent(5)
  ];
  


  ngOnInit() {
    this.dice[0].rollDie();
    this.dice[1].rollDie();  
    this.dice[2].rollDie()    
    this.dice[3].rollDie();
    this.dice[4].rollDie();
    console.log('app component Init');
 
  }

}
