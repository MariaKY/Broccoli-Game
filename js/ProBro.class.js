class ProBro extends Food {

    constructor(pos, size, vegImg){
        super(pos, size, vegImg)

        this.levelCount = 1;
        this.scoreCount = 0;
        this.livesCount = 5;

        this.broSpeed = 4;
        this.curDirection = new Vector2d(this.broSpeed, 0);
    };

    move() {
        this.pos.add(this.curDirection);

        if (this.pos.x < -99 ) {
            this.pos.x = winWidth + 99;
        } else if (this.pos.x > winWidth + 99){
            this.pos.x = -99;
        };

        if (this.pos.y < -99 ) {
            this.pos.y = winHeight + 49;
        } else if (this.pos.y > winHeight + 49){
            this.pos.y = -99;
        };
    };

    setDirection(direction) {
        switch (direction) {
            case "up" :
                this.curDirection.x = 0;    
                this.curDirection.y = -this.broSpeed;
                break ; 
            case "down" :
                this.curDirection.x = 0;    
                this.curDirection.y = this.broSpeed;
                break ;
            case "left" :
                this.curDirection.x = -this.broSpeed;    
                this.curDirection.y = 0;
                break ;
            case "right" :
                this.curDirection.x = this.broSpeed;    
                this.curDirection.y = 0;
                break ;
            default :
                console.log('Клавишу нормальную нажми придурок');
                break ;       
        }
    };

    eat(food){
        switch(food.vegName) {
            case 'carrot':
                this.scoreCount += 1;
                break;
            case 'corn':
                this.scoreCount += 2;
                break;
            case 'papper':
                this.scoreCount += 3;
                break;
            case 'spicyPepper':
                this.livesCount--;
                break;
            case 'tomato':
                this.scoreCount += 5;
                break;
            case 'cabbage':
                this.scoreCount += 6;
                break;
            case 'melon':
                this.scoreCount += 7;
                break;
            case 'onion':
                this.livesCount--;
                break;
            case 'potato':
                this.scoreCount += 9;
                break;
            case 'squash':
                this.scoreCount += 10;
                break;
            case 'watermalon':
                this.scoreCount += 11;
                break;
            default:
                break;
        }

    score.update(this.scoreCount);
    lives.update(this.livesCount);
    }

}