import { Component, OnInit } from '@angular/core';
import { Die } from '../die';
import { isNumber } from 'util';


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

  public scoreOnes: number;
  public scoreOnesFilled: boolean;
  public scoreTwos: number;
  public scoreTwosFilled: boolean;
  public scoreThrees: number;
  public scoreThreesFilled: boolean;
  public scoreFours: number;
  public scoreFoursFilled: boolean;
  public scoreFives: number;
  public scoreFivesFilled: boolean;
  public scoreSixes: number;
  public scoreSixesFilled: boolean;
  public score3K: number;
  public score3KFilled: boolean;
  public score4K: number;
  public score4KFilled: boolean;
  public scoreFullHouse: number;
  public scoreFullHouseFilled: boolean;
  public scoreSmallStr: number;
  public scoreSmallStrFilled: boolean;
  public scoreLargeStr: number;
  public scoreLargeStrFilled: boolean;
  public scoreYahtzee: number;
  public scoreYahtzeeFilled: boolean;
  public scoreChance: number;
  public scoreChanceFilled: boolean;

  constructor() { 

  }

  ngOnInit() {
    console.log('Game initialized');
    this.die1 = new Die();
    this.die2 = new Die();
    this.die3 = new Die();
    this.die4 = new Die();
    this.die5 = new Die(); 
    this.ClearScores();
    this.StartRollPhase();
  }

  /////////////////////////////////////////// ROLLING
  StartRollPhase() {
    console.log('Roll phase started');
    this.roll = 1;
    this.rollable = true;
    this.rollButtonLabel="ROLL #1";
    this.showRollTable = false;
    this.scoreKeepLabel = "Keep These:";
    this.scoreable = false;
    this.die1.keep = false;
    this.die2.keep = false;
    this.die3.keep = false;
    this.die4.keep = false;
    this.die5.keep = false;
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
  ////////////////////////////////////////////////////////// SCORING
  MayScore() : boolean {
    if( this.rollable && this.scoreable)
      return true;
    else
      return false;
  }
  MustScore() : boolean {
    if( !this.rollable && this.scoreable)
      return true;
    else
      return false;
  }

  ClearScores() {
    this.scoreOnes = null;
    this.scoreOnesFilled = false;
    this.scoreTwos = null;
    this.scoreTwosFilled = false;
    this.scoreThrees = null;
    this.scoreThreesFilled = false;
    this.scoreFours = null;
    this.scoreFoursFilled = false;
    this.scoreFives = null;
    this.scoreFivesFilled = false;
    this.scoreSixes = null;
    this.scoreSixesFilled = false;
    this.score3K = null;
    this.score3KFilled = false;
    this.score4K = null;
    this.score4KFilled = false;
    this.scoreFullHouse = null;
    this.scoreFullHouseFilled = false;
    this.scoreSmallStr = null;
    this.scoreSmallStrFilled = false;
    this.scoreLargeStr = null;
    this.scoreLargeStrFilled = false;
    this.scoreYahtzee = null;
    this.scoreYahtzeeFilled = false;
    this.scoreChance = null;
    this.scoreChanceFilled = false;
  }



  ScoreOnes() {
    if( this.scoreable && !this.scoreOnesFilled )
    {
      console.log('Scoring Ones');
      let returnVal = 0;
      if(this.die1.value == 1)
        returnVal += this.die1.value;
      if(this.die2.value == 1)
        returnVal += this.die2.value;
      if(this.die3.value == 1)
        returnVal += this.die3.value;   
      if(this.die4.value == 1)
        returnVal += this.die4.value; 
      if(this.die5.value == 1)
        returnVal += this.die5.value; 
      this.scoreOnes = returnVal;
      this.scoreOnesFilled = true;
      if(this.CheckAllScoresFilled())
      {
        // game is over
        this.scoreable = false;
      }
      else
      {
        this.StartRollPhase();
      }

    }
  }

  ScoreOnesFilled() {
    console.log('Score Ones returns ' + this.scoreOnesFilled);
    return this.scoreOnesFilled;
  }

  ScoreTwos() {
    if( this.scoreable  && !this.scoreTwosFilled )
    {
      console.log('Scoring Twos');
      let returnVal = 0;
      if(this.die1.value == 2)
        returnVal += this.die1.value;
      if(this.die2.value == 2)
        returnVal += this.die2.value;
      if(this.die3.value == 2)
        returnVal += this.die3.value;   
      if(this.die4.value == 2)
        returnVal += this.die4.value; 
      if(this.die5.value == 2)
        returnVal += this.die5.value; 
      this.scoreTwos = returnVal;
      this.scoreTwosFilled = true;
      if(this.CheckAllScoresFilled())
      {
        // game is over
        this.scoreable = false;
      }
      else
      {
        this.StartRollPhase();
      }

    }
  }

  ScoreTwosFilled() {
    console.log('Score Twos returns ' + this.scoreTwosFilled);
    return this.scoreTwosFilled;
  }


  ScoreThrees() {
    if( this.scoreable  && !this.scoreThreesFilled )
    {
      console.log('Scoring Threes');
      let returnVal = 0;
      if(this.die1.value == 3)
        returnVal += this.die1.value;
      if(this.die2.value == 3)
        returnVal += this.die2.value;
      if(this.die3.value == 3)
        returnVal += this.die3.value;   
      if(this.die4.value == 3)
        returnVal += this.die4.value; 
      if(this.die5.value == 3)
        returnVal += this.die5.value; 
      this.scoreThrees = returnVal;
      this.scoreThreesFilled = true;
      if(this.CheckAllScoresFilled())
      {
        // game is over
        this.scoreable = false;
      }
      else
      {
        this.StartRollPhase();
      }

    }
  }

  ScoreThreesFilled() {
    console.log('Score Threes returns ' + this.scoreThreesFilled);
    return this.scoreThreesFilled;
  }

  ScoreFours() {
    if( this.scoreable && !this.scoreFoursFilled )
    {
      console.log('Scoring Fours');
      let returnVal = 0;
      if(this.die1.value == 4)
        returnVal += this.die1.value;
      if(this.die2.value == 4)
        returnVal += this.die2.value;
      if(this.die3.value == 4)
        returnVal += this.die3.value;   
      if(this.die4.value == 4)
        returnVal += this.die4.value; 
      if(this.die5.value == 4)
        returnVal += this.die5.value; 
      this.scoreFours = returnVal;
      this.scoreFoursFilled = true;
      if(this.CheckAllScoresFilled())
      {
        // game is over
        this.scoreable = false;
      }
      else
      {
        this.StartRollPhase();
      }

    }
  }

  ScoreFoursFilled() {
    console.log('Score Fours returns ' + this.scoreFoursFilled);
    return this.scoreFoursFilled;
  }

  
  ScoreFives() {
    if( this.scoreable && !this.scoreFivesFilled )
    {
      console.log('Scoring Fives');
      let returnVal = 0;
      if(this.die1.value == 5)
        returnVal += this.die1.value;
      if(this.die2.value == 5)
        returnVal += this.die2.value;
      if(this.die3.value == 5)
        returnVal += this.die3.value;   
      if(this.die4.value == 5)
        returnVal += this.die4.value; 
      if(this.die5.value == 5)
        returnVal += this.die5.value; 
      this.scoreFives = returnVal;
      this.scoreFivesFilled = true;
      if(this.CheckAllScoresFilled())
      {
        // game is over
        this.scoreable = false;
      }
      else
      {
        this.StartRollPhase();
      }

    }
  }

  ScoreFivesFilled() {
    console.log('Score Fives returns ' + this.scoreFivesFilled);
    return this.scoreFivesFilled;
  }

  
  ScoreSixes() {
    if( this.scoreable && !this.scoreSixesFilled )
    {
      console.log('Scoring Sixes');
      let returnVal = 0;
      if(this.die1.value == 6)
        returnVal += this.die1.value;
      if(this.die2.value == 6)
        returnVal += this.die2.value;
      if(this.die3.value == 6)
        returnVal += this.die3.value;   
      if(this.die4.value == 6)
        returnVal += this.die4.value; 
      if(this.die5.value == 6)
        returnVal += this.die5.value; 
      this.scoreSixes = returnVal;
      this.scoreSixesFilled = true;
      if(this.CheckAllScoresFilled())
      {
        // game is over
        this.scoreable = false;
      }
      else
      {
        this.StartRollPhase();
      }

    }
  }

  ScoreSixesFilled() {
    console.log('Score Sixes returns ' + this.scoreSixesFilled);
    return this.scoreSixesFilled;
  }

  Score3K() {
    if( this.scoreable && !this.score3KFilled )
    {
      console.log('Scoring Three of a Kind');
      let threeKfound = false;
      // compare first die to d2,d3,d4,d5, matching 2
      // compare second die to d3,d4,d5, matching 2
      // compare third die to d4,d5. matching 2
      // test1
      let count = 0;
      let matchVal = this.die1.value;
      if( this.die2.value == matchVal)
        count++;
      if( this.die3.value == matchVal)
        count++;
      if( this.die3.value == matchVal)
        count++;
      if( this.die4.value == matchVal)
        count++;
      if( this.die5.value == matchVal)
        count++;
      if(count >= 2)
        threeKfound = true;

      // test2
      count = 0;
      matchVal = this.die2.value;  
      if( this.die3.value == matchVal)
        count++;
      if( this.die4.value == matchVal)
        count++;
      if( this.die5.value == matchVal) 
        count++;  
      if(count >= 2)
        threeKfound = true; 

      //test3
      count = 0;
      matchVal = this.die3.value; 
      if( this.die4.value == matchVal)
        count++;
      if( this.die5.value == matchVal) 
        count++;  
      if(count >= 2)
        threeKfound = true; 

      // end tests
      if(threeKfound)
      {
        this.score3K = this.SumDice();
      }
      else
      {
        this.score3K = 0;
      }
      this.score3KFilled = true;
      if(this.CheckAllScoresFilled())
      {
        // game is over
        this.scoreable = false;
      }
      else
      {
        this.StartRollPhase();
      }
    }
  }

  Score3KFilled() {
    console.log('Score3KFilled returns ' + this.score3KFilled);
    return this.score3KFilled;
  }

  Score4K() {
    if( this.scoreable && !this.score4KFilled )
    {
      console.log('Scoring Three of a Kind');
      let fourKfound = false;
      // compare first die to d2,d3,d4,d5, matching 3
      // compare second die to d3,d4,d5, matching 3
      //test1
      let count = 0
      let matchVal = this.die1.value;
      if(this.die2.value == matchVal)
        count++;
      if(this.die3.value == matchVal)
        count++;
      if(this.die4.value == matchVal)
        count++;
      if(this.die5.value == matchVal)
        count++
      if (count >= 3)
        fourKfound = true;
      //test2
      count = 0;
      matchVal = this.die2.value;
      if(this.die3.value == matchVal)
        count++;
      if(this.die4.value == matchVal)
        count++;
      if(this.die5.value == matchVal)
        count++      
      if(count >= 3)
      fourKfound = true;
      // end tests
      if(fourKfound)
      {
        this.score4K = this.SumDice();
      }
      else
      {
        this.score4K = 0;
      }
      this.score4KFilled = true;
      if(this.CheckAllScoresFilled())
      {
        // game is over
        this.scoreable = false;
      }
      else
      {
        this.StartRollPhase();
      }
    }
  }

  Score4KFilled() {
    console.log('Score4KFilled returns ' + this.score4KFilled);
    return this.score4KFilled;
  }


  ScoreFullHouse() {
    if( this.scoreable && !this.scoreFullHouseFilled )
    {
      console.log('Scoring FullHouse');
      let returnVal = 0;
      // get value of d1
      // Special Case: if all dice the same (HowMany returns 5), then
      // this is a triple and a double both of which are the same value
      // get a second value that doesn't match d1
      // count HowMany d1 and HowMany second value. Has to be 2,3 or 3,2
      let firstSet = this.die1.value;
      let secondSet = null;
      if( this.HowMany(firstSet) == 5)
        returnVal = 25;
      else 
      {
        if( (this.HowMany(firstSet) == 2) || (this.HowMany(firstSet) == 3)) 
        {
          if( this.die2.value != firstSet) 
          {
            secondSet = this.die2.value;
          } 
          else 
          {
              if (this.die3.value != firstSet)
              {
                secondSet = this.die3.value;
              }
              else
              {
                if (this.die4.value != firstSet)
                {
                  secondSet = this.die4.value
                }
              }
          }
              
        }
        // now we have first set and second set
        if( (this.HowMany(firstSet) == 3) && (this.HowMany(secondSet) == 2) )
          returnVal = 25;
        if( (this.HowMany(firstSet) == 2) && (this.HowMany(secondSet) == 3) )
          returnVal = 25;

      
      } // end non-special case
      this.scoreFullHouse = returnVal;
      this.scoreFullHouseFilled = true;
      if(this.CheckAllScoresFilled())
      {
        // game is over
        this.scoreable = false;
      }
      else
      {
        this.StartRollPhase();
      }

    } // end scoreable


  }



  ScoreFullHouseFilled() {
    console.log('ScoreFullHouseFilled returns ' + this.scoreFullHouseFilled);
    return this.scoreFullHouseFilled;  
  }

  ScoreSmallStr() {
    // Three possibilities:
    // We have at least one of values 1,2,3,4 OR
    // we have at least one of values 2,3,4,5, OR
    // we have at least one of values 3,4,5,6

    if( this.scoreable && !this.scoreSmallStrFilled )
    {
      console.log('Scoring Small Straight');
      this.scoreSmallStr = 0;
      if( this.HowMany(1) >= 1 && 
          this.HowMany(2) >= 1 &&
          this.HowMany(3) >= 1 &&
          this.HowMany(4) >= 1 )
        this.scoreSmallStr = 30;

      if( this.HowMany(2) >= 1 && 
          this.HowMany(3) >= 1 &&
          this.HowMany(4) >= 1 &&
          this.HowMany(5) >= 1 )
        this.scoreSmallStr = 30;

        if( this.HowMany(3) >= 1 && 
        this.HowMany(4) >= 1 &&
        this.HowMany(5) >= 1 &&
        this.HowMany(6) >= 1 )
      this.scoreSmallStr = 30; 
      this.scoreSmallStrFilled = true;
      if(this.CheckAllScoresFilled()) {
        // game is over
        this.scoreable = false;
      }
      else {
        this.StartRollPhase();
      }      
    }   
  
  }

  ScoreSmallStrFilled() {
    console.log('ScoreSmallStrFilled returns ' + this.scoreSmallStrFilled);
    return this.scoreSmallStrFilled;  
  }

  ScoreLargeStr() {
    // Two possibilities:
    // We have at least one of values 1,2,3,4,5 OR
    // we have at least one of values 2,3,4,5,6
    if( this.scoreable && !this.scoreLargeStrFilled )
    {
      console.log('Scoring Large Straight');
      this.scoreLargeStr = 0;
      if( this.HowMany(1) >= 1 && 
          this.HowMany(2) >= 1 &&
          this.HowMany(3) >= 1 &&
          this.HowMany(4) >= 1 &&
          this.HowMany(5) >= 1 )
        this.scoreLargeStr = 40;

      if( this.HowMany(2) >= 1 && 
          this.HowMany(3) >= 1 &&
          this.HowMany(4) >= 1 &&
          this.HowMany(5) >= 1 &&
          this.HowMany(6) >= 1 )
        this.scoreLargeStr = 40; 

      this.scoreLargeStrFilled = true;
      if(this.CheckAllScoresFilled()) {
        // game is over
        this.scoreable = false;
      }
      else {
        this.StartRollPhase();
      }      
    }
  }

  ScoreLargeStrFilled() {
    console.log('ScoreLargeStrFilled returns ' + this.scoreLargeStrFilled);
    return this.scoreLargeStrFilled;  
  }

  ScoreYahtzee() {
    // check d1, must match all others
    let matchVal = this.die1.value;
    let yahtzeeFound = true;
    if( this.die2.value != matchVal)
      yahtzeeFound = false;
    if( this.die3.value != matchVal)
      yahtzeeFound = false;
    if( this.die4.value != matchVal)
      yahtzeeFound = false;
    if( this.die5.value != matchVal)
      yahtzeeFound = false;    
    if( yahtzeeFound )
    {
      this.scoreYahtzee = 50;
    }
    else
    {
      this.scoreYahtzee = 0;
    }
    this.scoreYahtzeeFilled = true;
    if(this.CheckAllScoresFilled())
    {
      // game is over
      this.scoreable = false;
    }
    else
    {
      this.StartRollPhase();
    }  
  }

  ScoreYahtzeeFilled() {
    console.log('ScoreYahtzeeFilled returns ' + this.scoreYahtzeeFilled);
    return this.scoreYahtzeeFilled;  
  }

  ScoreChance() {
    if( this.scoreable && !this.scoreChanceFilled )
    {
      console.log('Scoring Chance');
      this.scoreChance = this.SumDice();
      this.scoreChanceFilled = true;
      if(this.CheckAllScoresFilled())
      {
        // game is over
        this.scoreable = false;
      }
      else
      {
        this.StartRollPhase();
      }
    }
  }

  ScoreChanceFilled() {
    console.log('ScoreChanceFilled returns ' + this.scoreChanceFilled);
    return this.scoreChanceFilled;  
  }

  SumDice() : number {
    let retVal = 0;
    retVal += this.die1.value;
    retVal += this.die2.value;
    retVal += this.die3.value;
    retVal += this.die4.value;
    retVal += this.die5.value;
    return retVal;
  }

  UpperSubtotal() : number{
    console.log('Upper Subtotal called');
    let retVal = 0;
    if(isNumber(this.scoreOnes))
      retVal += this.scoreOnes;
    if(isNumber(this.scoreTwos))
      retVal += this.scoreTwos;
    if(isNumber(this.scoreThrees))
      retVal += this.scoreThrees;
    if(isNumber(this.scoreFours))
      retVal += this.scoreFours;
    if(isNumber(this.scoreFives))
      retVal += this.scoreFives;
    if(isNumber(this.scoreSixes))
      retVal += this.scoreSixes;
    return retVal;
  }

  UpperTotal() : number {
    console.log('Upper Total called');
    let retVal = this.UpperSubtotal();
    if( retVal >= 63 )
      retVal += 35;
    return retVal;
  }

  LowerSubtotal() : number {
    console.log('Lower Subtotal called');
    let retVal = 0;
    if(isNumber(this.score3K))
      retVal += this.score3K;
    if(isNumber(this.score4K))
      retVal += this.score4K;
    if(isNumber(this.scoreFullHouse))
      retVal += this.scoreFullHouse;
    if(isNumber(this.scoreSmallStr))
      retVal += this.scoreSmallStr;
    if(isNumber(this.scoreLargeStr))
      retVal += this.scoreLargeStr;   
    if(isNumber(this.scoreYahtzee))
      retVal += this.scoreYahtzee;  
    if(isNumber(this.scoreChance))
      retVal += this.scoreChance;

    return retVal;
  }

  GrandTotal() : number {
    console.log('Grand Total called');
    let retVal = 0;
    return this.UpperTotal() + this.LowerSubtotal();
  }

  CheckAllScoresFilled(): boolean {
    if (this.scoreOnesFilled && this.scoreTwosFilled && this.scoreThreesFilled &&
      this.scoreFoursFilled && this.scoreFivesFilled && this.scoreSixesFilled &&
      this.score3KFilled && this.score4KFilled && this.scoreFullHouseFilled &&
      this.scoreSmallStrFilled && this.scoreLargeStrFilled && this.scoreYahtzeeFilled &&
      this.scoreChanceFilled)
    {
      console.log('CheckAllScoresFilled returning true');
      return true;
    }
    else
    {
      console.log('CheckAllScoresFilled returning true');
      return false;
    }

  }

  HowMany(valueToFind: number) : number {
    // simple utility returning a count of how many dice match a given input value
    let numFound  = 0;
    if( this.die1.value == valueToFind )
      numFound++;
    if( this.die2.value == valueToFind )
      numFound++;
    if( this.die3.value == valueToFind )
      numFound++;
    if( this.die4.value == valueToFind )
      numFound++;
    if( this.die5.value == valueToFind )
      numFound++;
    console.log('HowMany() found '+numFound+' '+valueToFind+'s');
    return numFound;
  }

  PlayNewGame() {
    // Player wants to go again, basically just run ngInit again
    console.log('Game initialized');
    this.ClearScores();
    this.StartRollPhase();
  }
}
