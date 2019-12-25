class Food {

    constructor(pos, size, vegImg){
        'use strict'

        this.pos = pos;
        this.size = size;
        this.vegName = vegImg.slice(0, -4);
        this.vegScoreValue = 0;
        this.HTMLElement = '<img class="food" src="materials/' + vegImg +'">'
        this.HtmlItem = $(this.HTMLElement);
    };

    present(){
        this.redraw();
        $("body").prepend(this.HtmlItem);
    }

    redraw() {
        this.HtmlItem.css({
            left: this.pos.x,
            top: this.pos.y
        });
    };

    checkCollision(other) {
        return (this.pos.x > other.pos.x - (other.size.x - 15) //10 это число навскидку для еффекта пересечения протагониста и антагониста
        && this.pos.x < other.pos.x + (other.size.x - 15) 
        && this.pos.y > other.pos.y - (other.size.y - 15)
        && this.pos.y < other.pos.y + (other.size.y - 15))
    }

      scoreShowingAnimation(scoreValue){
        let scoreShowingElement = $('<div class="scoreShowingAnimationBlock"><span>+' + scoreValue + '</span></div>');
        scoreShowingElement.css({
            left: this.pos.x + 35,
            top: this.pos.y + 35
        });
        $('body').prepend(scoreShowingElement);
        setTimeout(() => { $('body').remove(".scoreShowingAnimationBlock")}, 200);
     }

}