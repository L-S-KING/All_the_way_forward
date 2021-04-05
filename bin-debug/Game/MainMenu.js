var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var MainMenu = (function (_super) {
    __extends(MainMenu, _super);
    function MainMenu() {
        var _this = _super.call(this) || this;
        /**玩家人物 */
        _this.player = null;
        /**玩家序列帧 */
        _this.playerIndex = 1;
        /**守护者 */
        _this.man = null;
        /**守护者序列帧 */
        _this.manIndex = 1;
        /**序列帧切换时间 */
        _this.frameTime = 0;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    MainMenu.prototype.init = function () {
        this.skinName = "Menu";
        //给按钮添加触摸监听
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.startBegin, this);
        this.expBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.expBegin, this);
        //玩家图片初始化
        this.player = new egret.Bitmap();
        this.player.texture = RES.getRes("player" + this.playerIndex + "_png");
        this.player.anchorOffsetX = this.player.width * 0.5;
        this.player.anchorOffsetY = this.player.height * 0.5;
        this.player.x = 640;
        this.player.y = 300;
        SceneManager.getInstance().currentScene.addChild(this.player);
        //守护者图片初始化
        this.man = new egret.Bitmap();
        this.man.texture = RES.getRes("man" + this.manIndex + "_png");
        this.man.anchorOffsetX = this.man.width * 0.5;
        this.man.anchorOffsetY = this.man.height * 0.5;
        this.man.x = 1000;
        this.man.y = 490;
        SceneManager.getInstance().currentScene.addChild(this.man);
        this.set.addEventListener(egret.TouchEvent.TOUCH_TAP, this.setBegin, this);
    };
    MainMenu.prototype.setBegin = function () {
        if (this.set.selected == false) {
            SoundManager.instance.startBgMusic("bg_mp3");
            SoundManager.instance.isBgMusic = true;
        }
        if (this.set.selected == true) {
            SoundManager.instance.stopBgMusic();
            SoundManager.instance.isBgMusic = false;
        }
    };
    MainMenu.prototype.update = function () {
        this.frameTime += 1;
        if (this.frameTime % 10 == 0) {
            //玩家图片序列帧切换
            this.playerIndex += 1;
            if (this.playerIndex > 2) {
                this.playerIndex = 1;
            }
            this.player.texture = RES.getRes("player" + this.playerIndex + "_png");
            //守护者图片序列帧切换
            this.manIndex += 1;
            if (this.manIndex >= 6) {
                this.manIndex = 1;
            }
            this.man.texture = RES.getRes("man" + this.manIndex + "_png");
        }
        //检测音量变换
        if (SoundManager.instance.isBgMusic == false) {
            this.set.selected = true;
        }
        if (SoundManager.instance.isBgMusic == true) {
            this.set.selected = false;
        }
    };
    MainMenu.prototype.startBegin = function () {
        SceneManager.getInstance().addScene(new StageSelectScene());
    };
    MainMenu.prototype.expBegin = function () {
        SceneManager.getInstance().addScene(new ExplainScene());
    };
    return MainMenu;
}(BaseScene));
__reflect(MainMenu.prototype, "MainMenu");
//# sourceMappingURL=MainMenu.js.map