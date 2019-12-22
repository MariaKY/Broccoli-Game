class LifeItem {
    constructor(lifeHTML){
        this.lifeElement = $('.livesCount');
        this.htmlElem = lifeHTML;
    }

    update(count){
        this.livesCount = count;
            $('.livesCount').empty();
            for(let i = 0; i < count; i++){
                this.lifeElement.append(this.htmlElem);
            };
    }
}