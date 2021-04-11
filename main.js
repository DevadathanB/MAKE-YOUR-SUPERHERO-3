canvas = new fabric.Canvas("myCanvas");
player_x = 10;
player_y = 10;
image_width = 30;
image_height = 30;
var player_object = "";
var image_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_Image) {
    fabric.Image.fromURL(get_Image, function(Img) {
        image_object = Img;

        image_object.scaleToWidth(image_width);
        image_object.scaleToHeight(image_height);
        image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(image_object);
    });
}

function my_keydown(e) {
    Key_Pressed = e.keyCode;
    console.log(Key_Pressed);
    if (e.shiftKey == true && Key_Pressed == '80') {
        image_width = image_width + 10;
        image_height = image_height + 10;
        document.getElementById("current_width").innerHTML = image_width;
        document.getElementById("current_height").innerHTML = image_height;
    }
    if (e.shiftKey == true && Key_Pressed == '77') {
        image_width = image_width - 10;
        image_height = image_height - 10;
        document.getElementById("current_width").innerHTML = image_width;
        document.getElementById("current_height").innerHTML = image_height;
    }
    if (Key_Pressed == '70') {
        new_image("ironman_face.png");
        console.log("f");
    }
    if (Key_Pressed == '37') {
        left();
    }
    if (Key_Pressed == '38') {
        up();
    }
    if (Key_Pressed == '39') {
        right();
    }
    if (Key_Pressed == '40') {
        down();
    }
    if (Key_Pressed == '66') {
        new_image("spiderman_body.png");
        console.log("b");
    }
    if (Key_Pressed == '76') {
        new_image("hulk_legs.png");
        console.log("l");
    }
    if (Key_Pressed == '82') {
        new_image("thor_right_hand.png");
        console.log("r");
    }
    if (Key_Pressed == '72') {
        new_image("captain_america_left_hand.png");
        console.log("h");
    }
    if (Key_Pressed == '46') {
        var active_object = canvas.getActiveObject();
        console.log(active_object);
        if (active_object != undefined) {
            canvas.remove(active_object);
            console.log("deleted");
        }
    }
}

function up() {
    if (player_y >= 0) {
        player_y = player_y - image_height;
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if (player_y <= 500) {
        player_y = player_y + image_height;
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x >= 0) {
        player_x = player_x - image_width;
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_x <= 900) {
        player_x = player_x + image_width;
        canvas.remove(player_object);
        player_update();
    }
}