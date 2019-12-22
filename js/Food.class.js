class Food {

    constructor(pos, size, vegImg){
        'use strict'

        this.pos = pos;
        this.size = size;
        this.vegName = vegImg.slice(0, -4);
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
        return (this.pos.x > other.pos.x - (other.size.x / 2) 
        && this.pos.x < other.pos.x + (other.size.x / 2)
        && this.pos.y > other.pos.y - (other.size.y / 2)
        && this.pos.y < other.pos.y + (other.size.y / 2))
    }

}