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
            case 'corn':
            case 'watermalon':
                food.vegScoreValue = +1;
                this.scoreCount += food.vegScoreValue;
                break;
            case 'potato':
            case 'papper':
            case 'cabbage':
                food.vegScoreValue = +5;
                this.scoreCount += food.vegScoreValue;
                break;
            case 'tomato':
            case 'melon':
            case 'squash':
                food.vegScoreValue = +10;
                this.scoreCount += food.vegScoreValue;
                break;
            case 'onion':
            case 'spicyPepper':
                this.livesCount--;
                break;
            default:
                break;
        }

    score.update(this.scoreCount);
    lives.update(this.livesCount);
    }

}