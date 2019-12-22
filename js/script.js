        const vegPhotos = ['carrot.png', 'corn.png', 'papper.png', 'spicyPepper.jpg', 'tomato.png', 'cabbage.jpg', 'melon.jpg', 'onion.jpg', 'potato.jpg', 'squash.jpg', 'watermalon.jpg'];
        
        const keyActions = {
            32: "stop",
            37: "left",
            38: "up",
            39: "right",
            40: "down"
        };

        let winWidth = $(window).width();
        let winHeight = $(window).height();


        let isPaused = false;

        const foodSize = new Vector2d(80, 80);
        const broSize = new Vector2d(100, 100);

        const Level = function(){
            this.levelCount = bro.levelCount,
            this.levelElement = $('.levelCount');
            this.levelElement.text(this.levelCount);
        };

        Level.prototype.updateLevel = function(newLevel){
            this.levelCount = newScore;
            this.levelElement.text(this.levelCount);
        };

        const Score = function(){
            this.scoreCount = bro.scoreCount,
            this.scoreElement = $('.scoreCount');
            this.scoreElement.text(this.scoreCount);
        };

        Score.prototype.updateScore = function(newScore){
            this.scoreCount = newScore;
            this.scoreElement.text(this.scoreCount);
        };

        const Lives = function(){
            this.livesCount = bro.livesCount,
            this.lifeElementHTML = '<img class="lifeElement" src="materials/broccoli.png">';
            this.lifeElement = $(this.lifeElementHTML);
            for(let i = 0; i < this.livesCount; i++){
                $('.livesCount').append('<img class="lifeElement" src="materials/broccoli.png">');
            };
            
        };

        Lives.prototype.updateLives = function(newlivesCount){
            this.livesCount = newlivesCount;
         /*   if( $('.livesCount').children.length != this.livesCount )
            { */
                $('.livesCount').empty();
                for(let i = 0; i < this.livesCount; i++){
                    $('.livesCount').append('<img class="lifeElement" src="materials/broccoli.png">');
                };
          /*  }; */
        };


        let bro = new ProBro(new Vector2d(70, 180), broSize, "broccoli.png");
        bro.present();

        let level = new Level();
        let score = new Score();
        let lives = new Lives();


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







        setInterval(function(){
            addNewFood()
        }, NewFoodInterval);

        setInterval(function(){
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