import { Component, OnInit } from '@angular/core';
import { Die } from '../die';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public roll: number;  // tracks roll #1, #2, #3 
  public rollable: boolean// game allows rolling
  public rollButtonLabel: string; // ROLL, Roll #2, Roll #3
  public scoreKeepLabel: string // Keep These:/Score These:
  public showRollTable: boolean;
  public die1: Die;
  public die2: Die;
  public die3: Die;
  public die4: Die;
  public die5: Die;
  public scoreable: boolean;

  constructor() { 

  }

  ngOnInit() {
    console.log('Game initialized');
    this.die1 = new Die();
    this.die2 = new Die();
    this.die3 = new Die();
    this.die4 = new Die();
    this.die5 = new Die();
     this.StartRollPhase();
  }

  StartRollPhase() {
    console.log('Game started');
    this.roll = 1;
    this.rollable = true;
    this.rollButtonLabel="ROLL #1";
    this.showRollTable = false;
    this.scoreKeepLabel = "Keep These:";
    this.scoreable = false;
  }

  RollDice() {
    console.log('RollDice() called');
    this.showRollTable = true;
    let rollingDieFound = false;
    if(this.die1.keep == false)
    {
      this.die1.rollDie();
      rollingDieFound=true;
    }
    if(this.die2.keep == false)
    {
      this.die2.rollDie();
      rollingDieFound=true;
    }
    if(this.die3.keep == false)
    {
      this.die3.rollDie();
      rollingDieFound=true;
    }
    if(this.die4.keep == false)
    {
      this.die4.rollDie();
      rollingDieFound=true;
    }
    if(this.die5.keep == false)
    {
      this.die5.rollDie();
      rollingDieFound=true;
    }  
    
    if(rollingDieFound) 
    {
      //has to be true to be a valid Roll -- user might be keeping all dice,
      // and we don't want it to count as a roll in that case
      this.roll++;
      this.scoreable = true;
      this.rollButtonLabel = "ROLL #" + this.roll;
      if(this.roll > 3)
      {
        this.scoreKeepLabel = "Score These:"
        this.rollable = false;
        this.die1.keep = true;
        this.die2.keep = true;
        this.die3.keep = true;
        this.die4.keep = true;
        this.die5.keep = true;

      }
    }
   

    
  }

  KeepDie1() {
    console.log("Keep click on Die 1");
    this.die1.keep = true;
  }

  RollDie1() {
    console.log("Roll click on Die 1");
    if( this.rollable)
      this.die1.keep = false; 
  }

  KeepDie2() {
    console.log("Keep click on Die 2");
    this.die2.keep = true;
  }

  RollDie2() {
    console.log("Roll click on Die 2");
    if( this.rollable)
        this.die2.keep = false; 
  }

  KeepDie3() {
    console.log("Keep click on Die 3");
    this.die3.keep = true;
  }

  RollDie3() {
    console.log("Roll click on Die 3");
    if( this.rollable)
        this.die3.keep = false; 
  }

  KeepDie4() {
    console.log("Keep click on Die 4");
    this.die4.keep = true;
  }

  RollDie4() {
    console.log("Roll click on Die 4");
    if( this.rollable)
        this.die4.keep = false; 
  }

  KeepDie5() {
    console.log("Keep click on Die 5");
    this.die5.keep = true;
  }

  RollDie5() {
    console.log("Roll click on Die 5");
    if( this.rollable)
        this.die5.keep = false; 
  }
}
