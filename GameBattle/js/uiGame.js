var UiGame = function (numPlayers,size,numShips)
{
    var _game = new Game(numPlayers,size,numShips);
    this.start = function () {
        _game.startGame();
        drawFields();
        $("#field").fadeIn();

    };

    var drawFields= function()
    {
        for(var k = 0; k < _game.getPlayers().length; k++ ) {
            var _matrixPlayer = _game.getPlayers()[k].getBoard().getField();
            var cellSize = 38;
            var containerSize = cellSize * CONSTANTS.get("BOARD_SIZE");
            $("#player"+k).css('width',containerSize);
            $("#player"+k).append(_game.getPlayers()[k].name);
            var container = $('<div class="container '+k+'" style="width:' + containerSize
                + 'px;height:' + containerSize + 'px"></div>');
            for (var i = 0; i < CONSTANTS.get("BOARD_SIZE"); i++) {
                for (var j = 0; j < CONSTANTS.get("BOARD_SIZE"); j++) {
                    var cell = $('<div class="cell ' + j + '' + i + '"></div>');
                    cell.on('mouseover',mouseoverBg);
                    cell.on('mouseout',mouseoutBg);
                    cell.on('mouseover',mouseoverBorder);
                    cell.on('mouseout',mouseoutBorder);
                    cell.on('click',addClickEventHandler);
                    container.append(cell);
                }
            }

            $("#field").append(container);
        }
    };


    var prevBg;
    var mouseoverBg= function(e){
        prevBg=$(e.target).css('background');
        $(e.target).css('background','yellow');
    }
    var mouseoutBg= function(e){
        $(e.target).css('background',prevBg);
    }
    var prevBorder;
    var mouseoverBorder= function(e){
        prevBorder=$(e.target).css('border-color');
        $(e.target).css('border-color','white');
    }
    var mouseoutBorder= function(e){
        $(e.target).css('border-color',prevBorder);
    };
    var addClickEventHandler= function(e){
        var idPlayer = $(e.target).parent().attr('class').split(" ")[1];
        $(e.target).off('mouseout',mouseoutBg);
        $(e.target).off('mouseover',mouseoverBg);
        var cellPositionX = $(e.target).attr('class').split(" ")[1].split('')[0];
        var cellPositionY = $(e.target).attr('class').split(" ")[1].split('')[1];
        var res = _game.getPlayers()[parseInt(idPlayer)].setShoot(parseInt(cellPositionX),parseInt(cellPositionY));
        if (res == CONSTANTS.get("SHOOT_FAILED")){
            $(e.target).css('background','red');
        }
        else{
            $(e.target).css('background','green');
        }
        $(e.target).text(res);

        if(_game.getPlayers().length > 1){
            $(".container."+idPlayer).fadeOut();
            $("#player"+idPlayer).fadeOut();

            if(idPlayer == "0"){
                $(".container."+"1").fadeIn();
                $("#player1").fadeIn();
            }else{
                $(".container."+"0").fadeIn();
                $("#player0").fadeIn();
            }
        }
        _game.updatePoints(parseInt(idPlayer));
        $("#player0").fadeOut();
        $("#player1").fadeOut();

    };
};