class LifeItem {
    constructor(lifeHTML){
        this.lifeElement = $('.lifeCountContainer');
        this.htmlElem = lifeHTML;
    }

    update(count){
            $('.lifeCountContainer').empty();
            for(let i = 0; i < count; i++){
                this.lifeElement.append(this.htmlElem);
            };
    }
}