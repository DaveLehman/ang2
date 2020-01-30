export class Die {
    public value: number;
    public imagePath: string;
    public keep: boolean;

    constructor(){
        console.log('a Die was constructed')
        this.value = 0;
        this.keep = false;
        this.setVisual();
    }

    changeValue(newValue: number){
        console.log('A die value was changed');
        this.value = newValue;
        this.setVisual();
    }

    rollDie() {
        console.log('A die was rolled');
        this.value =Math.floor(Math.random() * 6 + 1);
        this.setVisual();
    }

    setVisual() {
        console.log('A die visual was set')
        let pathString = '../../assets/';
        if(this.value == 0)
            pathString += 'D0.bmp';
        if(this.value == 1)
            pathString += 'D1.bmp';           
        if(this.value == 2)
            pathString += 'D2.bmp';   
        if(this.value == 3)
            pathString += 'D3.bmp';       
        if(this.value == 4)
            pathString += 'D4.bmp';               
        if(this.value == 5)
            pathString += 'D5.bmp';   
        if(this.value == 6)
            pathString += 'D6.bmp'; 
        this.imagePath=pathString;  

    }

}

