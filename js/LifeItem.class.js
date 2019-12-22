class LifeItem {
    constructor(lifeHTML){
        this.livesCount = bro.livesCount,
        this.lifeElement = $('.livesCount');
        this.htmlElem = lifeHTML;
    }

    update(count){
        this.livesCount = count;
            $('.livesCount').empty();
            for(let i = 0; i < this.livesCount; i++){
                this.lifeElement.append(this.htmlElem);
            };
    }
}