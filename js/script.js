        const vegPhotos = ['carrot.png', 'corn.png', 'papper.png', 'spicyPepper.jpg', 'tomato.png', 'cabbage.jpg', 'melon.jpg', 'onion.jpg', 'potato.jpg', 'squash.jpg', 'watermalon.jpg'];
        
        const keyActions = {
            32: "stop",
            37: "left",
            38: "up",
            39: "right",
            40: "down"
        };

        const winWidth = $(window).width();
        const winHeight = $(window).height();

        let isPaused = false;

        const foodSize = new Vector2d(80, 80);
        const broSize = new Vector2d(100, 100);

        let bro = new ProBro(new Vector2d(70, 180), broSize, "broccoli.png");
        bro.present();

        const scoreHtml = $('.scoreCount');
        const levelHtml = $('.levelCount');
        const lifeHtml = '<img class="lifeElement" src="materials/broccoli.png">';


        let level = new AchievementItem(levelHtml);
        let score = new AchievementItem(scoreHtml);
        let lives = new LifeItem(lifeHtml);
        lives.update(bro.livesCount);

        let foodArray = [];

        const NewFoodInterval = 5000;

        function addNewFood(){
            if (isPaused)
                return ;

            const pos = new Vector2d(Math.floor(Math.random()*(winWidth-80)), 
                                    Math.floor(Math.random()*(winHeight-80)));

            const vegImg = vegPhotos[Math.floor(Math.random() * vegPhotos.length)];
            const food = new Food(pos, foodSize, vegImg);
            food.present();
            foodArray.push(food);
        }


        function gameOver(){
            clearInterval(broMoving);
            clearInterval(foodAdding);
            $('.gameOverBlock').css("display", "flex");
        }


        let foodAdding = setInterval(function(){
            addNewFood()
        }, NewFoodInterval);

        let broMoving = setInterval(function(){
            if (isPaused)
                return ;
            bro.move();
            bro.redraw();
            for(let j = 0; j < foodArray.length; j++){
                if(bro.checkCollision(foodArray[j])) {
                    bro.eat(foodArray[j]);

                    // foodArray[j].HtmlItem.fadeOut(150);
                    foodArray[j].HtmlItem.remove();
                    foodArray[j] = null;
                    foodArray.splice(j, 1);
                    if(bro.livesCount==0)
                        gameOver();
                };
            };

        }, 15);
        

        $("body").keydown(function inputController(event){
            const keyLabel = keyActions[event.keyCode];

            switch (keyLabel) {
                case "stop" :
                    isPaused ? isPaused = false : isPaused = true;
                    break ;
                default:
                    bro.setDirection(keyLabel);
                    break ;  
            }

        });
        
        
        $("#controlsContextMenu" ).click(function() {
            $('.controlsContextMenu').removeClass("hide");
            isPaused = true;
        });

        $("#close").click(function() {
            $('.controlsContextMenu').addClass("hide");
            isPaused = false;
        });