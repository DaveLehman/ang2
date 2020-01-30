import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-die',
  templateUrl: './die.component.html',
  styleUrls: ['./die.component.css'],
})
export class DieComponent  {

  public value: number;
  public imagePath: string;

  constructor(startingValue: number) {
    this.value = startingValue;
    if(this.value == 0)
    this.imagePath = '../../assets/D0.bmp';
  if(this.value == 1)
    this.imagePath = '../../assets/D1.bmp';
  if(this.value == 2)
    this.imagePath = '../../assets/D2.bmp';
  if(this.value == 3)
    this.imagePath = '../../assets/D3.bmp';
  if(this.value == 4)
    this.imagePath = '../../assets/D4.bmp';
  if(this.value == 5)
    this.imagePath = '../../assets/D5.bmp';
  if(this.value == 6)
    this.imagePath = '../../assets/D6.bmp';
      console.log('A die was constructed');
   }


  changeValue(newValue: number) {
    this.value = newValue;
    if(this.value == 0)
    this.imagePath = '../../assets/D0.bmp';
  if(this.value == 1)
    this.imagePath = '../../assets/D1.bmp';
  if(this.value == 2)
    this.imagePath = '../../assets/D2.bmp';
  if(this.value == 3)
    this.imagePath = '../../assets/D3.bmp';
  if(this.value == 4)
    this.imagePath = '../../assets/D4.bmp';
  if(this.value == 5)
    this.imagePath = '../../assets/D5.bmp';
  if(this.value == 6)
    this.imagePath = '../../assets/D6.bmp';
  console.log("A die ran ChangeValue to "+this.value);  
  }

  rollDie(): void {
    this.value =Math.floor(Math.random() * 6 + 1);
    if(this.value == 1)
      this.imagePath = '../../assets/D1.bmp';
    if(this.value == 2)
      this.imagePath = '../../assets/D2.bmp';
    if(this.value == 3)
      this.imagePath = '../../assets/D3.bmp';
    if(this.value == 4)
      this.imagePath = '../../assets/D4.bmp';
    if(this.value == 5)
      this.imagePath = '../../assets/D5.bmp';
    if(this.value == 6)
      this.imagePath = '../../assets/D6.bmp';
      console.log("die rolled");
  }


}
