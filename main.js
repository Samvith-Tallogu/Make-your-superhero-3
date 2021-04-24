var canvas = new fabric.Canvas('myCanvas');

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var object_of_the_player = "";
var block_image_object = "";

function player_update()
{
    fabric.Image.fromURL("Player.png", function(Img){
        object_of_the_player = Img;


        object_of_the_player.scaleToWidth(150);
        object_of_the_player.scaleToHeight(140);
        object_of_the_player.set(
            {
                top:player_y,
                left:player_x
            });
            canvas.add(object_of_the_player);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
       block_image_object = Img;


       block_image_object.scaleToWidth(block_image_width);
       block_image_object.scaleToHeight(block_image_height);
       block_image_object.set(
            {
                top:player_y,
                left:player_x
            });
            canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey ==true && keyPressed =='80')
{
	console.log("Shift and p are pressed together")
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;

}
if(e.shiftKey ==true && keyPressed =='77')
{
	console.log("Shift and m are pressed together")
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;

}

if(keyPressed == '70')
{
	new_image('iron_man.png');
	console.log("f");
}
if(keyPressed == '66')
{
	new_image('spiderman.png');
	console.log("b");
}
if(keyPressed == '76')
{
	new_image('Hulk leg.png');
	console.log("l");
}
if(keyPressed == '82')
{
	new_image('thor hand.png');
	console.log("r");
}
if(keyPressed == '72')
{
	new_image('Cap hand.png');
	console.log("h");
}
if(keyPressed == '38')
{
	up();
	console.log("up");
}
if(keyPressed == '40')
{
	down();
	console.log("down");
}
if(keyPressed == '37')
{
	left();
	console.log("left");
}
if(keyPressed == '39')
{
	right();
	console.log("right");
}
}
function up()
{
if(player_y >=0)
{
	player_y = player_y - block_image_height;
	console.log("block image height = " + block_image_height);
	console.log("When up Arrow key is, x =  " + player_x + ", y = " + player_y);
	canvas.remove(object_of_the_player);
	player_update();
}
}
function down()
{
if(player_y <=500)
{
	player_y = player_y + block_image_height;
	console.log("block image height = " + block_image_height);
	console.log("When up Arrow key is, x =  " + player_x + ", y = " + player_y);
	canvas.remove(object_of_the_player);
	player_update();
}
}
function left()
{
if(player_x >=0)
{
	player_x = player_x - block_image_width;
	console.log("block image width = " + block_image_width);
	console.log("When Left Arrow key is, x =  " + player_x + ", y = " + player_y);
	canvas.remove(object_of_the_player);
	player_update();
}
}
var canvas = new fabric.Canvas('myCanvas');

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var object_of_the_player = "";
var block_image_object = "";

function player_update()
{
    fabric.Image.fromURL("Player.png", function(Img){
        object_of_the_player = Img;


        object_of_the_player.scaleToWidth(150);
        object_of_the_player.scaleToHeight(140);
        object_of_the_player.set(
            {
                top:player_y,
                left:player_x
            });
            canvas.add(object_of_the_player);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
       block_image_object = Img;


       block_image_object.scaleToWidth(block_image_width);
       block_image_object.scaleToHeight(block_image_height);
       block_image_object.set(
            {
                top:player_y,
                left:player_x
            });
            canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey ==true && keyPressed =='80')
{
	console.log("Shift and p are pressed together")
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;

}
if(e.shiftKey ==true && keyPressed =='77')
{
	console.log("Shift and m are pressed together")
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;

}

if(keyPressed == '70')
{
	new_image('iron_man.png');
	console.log("f");
}
if(keyPressed == '66')
{
	new_image('spiderman.png');
	console.log("b");
}
if(keyPressed == '76')
{
	new_image('Hulk leg.png');
	console.log("l");
}
if(keyPressed == '82')
{
	new_image('thor hand.png');
	console.log("r");
}
if(keyPressed == '72')
{
	new_image('Cap hand.png');
	console.log("h");
}
if(keyPressed == '38')
{
	up();
	console.log("up");
}
if(keyPressed == '40')
{
	down();
	console.log("down");
}
if(keyPressed == '37')
{
	left();
	console.log("left");
}
if(keyPressed == '39')
{
	right();
	console.log("right");
}
}
function up()
{
if(player_y >=0)
{
	player_y = player_y - block_image_height;
	console.log("block image height = " + block_image_height);
	console.log("When up Arrow key is, x =  " + player_x + ", y = " + player_y);
	canvas.remove(object_of_the_player);
	player_update();
}
}
function down()
{
if(player_y <=500)
{
	player_y = player_y + block_image_height;
	console.log("block image height = " + block_image_height);
	console.log("When up Arrow key is, x =  " + player_x + ", y = " + player_y);
	canvas.remove(object_of_the_player);
	player_update();
}
}
function left()
{
if(player_x >=0)
{
	player_x = player_x - block_image_width;
	console.log("block image width = " + block_image_width);
	console.log("When up Arrow key is, x =  " + player_x + ", y = " + player_y);
	canvas.remove(object_of_the_player);
	player_update();
}
}
function right()
{
if(player_x <=850)
{
	player_x = player_x + block_image_width;
	console.log("block image width = " + block_image_width);
	console.log("When Right Arrow key is, x =  " + player_x + ", y = " + player_y);
	canvas.remove(object_of_the_player);
	player_update();
}
}
