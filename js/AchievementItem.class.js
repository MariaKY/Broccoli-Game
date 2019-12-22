class AchievementItem {
    constructor(elem) {
        this.htmlElem = $(elem);
    }

    update(count) {
        this.htmlElem.text(count);
    }
};