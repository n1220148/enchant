enchant(); //…①
var picNumber = 10; //…②
window.onload = function() { //…③
var game = new Game(320, 480); //…④
game.preload('http://enchantjs.com/assets/images/chara1.gif'); //…⑤
game.onload = function() { //…⑥
var bear = new Sprite(32, 32); //…⑦
bear.image = //…⑧
game.assets['http://enchantjs.com/assets/images/chara1.gif'];
bear.frame = 10; //…⑨
bear.addEventListener(Event.ENTER_FRAME, function() { //…⑩
picNumber++; //…⑪
if (picNumber > 13) { //…⑫
picNumber = 10;
}
bear.frame = picNumber; //…⑬
bear.x += 2; //…⑭
});
    game.rootScene.addChild(bear); //…⑮
};
game.start(); //…⑯
};