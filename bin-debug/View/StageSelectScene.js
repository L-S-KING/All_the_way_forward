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
/**
 * 关卡选择
 */
var StageSelectScene = (function (_super) {
    __extends(StageSelectScene, _super);
    function StageSelectScene() {
        var _this = _super.call(this) || this;
        /**第一关 */
        _this.level1 = null;
        /**第二关 */
        _this.level2 = null;
        /**第三关 */
        _this.level3 = null;
        /**第四关 */
        _this.level4 = null;
        /**第五关 */
        _this.level5 = null;
        /**第六关 */
        _this.level6 = null;
        /**第七关 */
        _this.level7 = null;
        _this.init();
        _this.addEventListener(egret.Event.ENTER_FRAME, _this.update, _this);
        return _this;
    }
    StageSelectScene.prototype.init = function () {
        this.skinName = "StageSelect";
        this.level1 = new egret.Bitmap();
        this.level1.texture = RES.getRes("level1_png");
        this.level1.anchorOffsetX = this.level1.width * 0.5;
        this.level1.anchorOffsetY = this.level1.height * 0.5;
        this.level1.x = 150;
        this.level1.y = 410;
        this.level1.alpha = 1;
        this.addChild(this.level1);
        this.level1.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.level1Begin, this);
        this.level2 = new egret.Bitmap();
        this.level2.texture = RES.getRes("level2_png");
        this.level2.anchorOffsetX = this.level2.width * 0.5;
        this.level2.anchorOffsetY = this.level2.height * 0.5;
        this.level2.x = 340;
        this.level2.y = 305;
        this.level2.alpha = 0.5;
        this.addChild(this.level2);
        this.level2.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.level2Begin, this);
        this.level3 = new egret.Bitmap();
        this.level3.texture = RES.getRes("level3_png");
        this.level3.anchorOffsetX = this.level3.width * 0.5;
        this.level3.anchorOffsetY = this.level3.height * 0.5;
        this.level3.x = 530;
        this.level3.y = 325;
        this.level3.alpha = 0.5;
        this.addChild(this.level3);
        this.level3.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.level3Begin, this);
        this.level4 = new egret.Bitmap();
        this.level4.texture = RES.getRes("level4_png");
        this.level4.anchorOffsetX = this.level4.width * 0.5;
        this.level4.anchorOffsetY = this.level4.height * 0.5;
        this.level4.x = 715;
        this.level4.y = 355;
        this.level4.alpha = 0.5;
        this.addChild(this.level4);
        this.level4.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.level4Begin, this);
        this.level5 = new egret.Bitmap();
        this.level5.texture = RES.getRes("level5_png");
        this.level5.anchorOffsetX = this.level5.width * 0.5;
        this.level5.anchorOffsetY = this.level5.height * 0.5;
        this.level5.x = 815;
        this.level5.y = 515;
        this.level5.alpha = 0.5;
        this.addChild(this.level5);
        this.level5.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.level5Begin, this);
        this.level6 = new egret.Bitmap();
        this.level6.texture = RES.getRes("level6_png");
        this.level6.anchorOffsetX = this.level6.width * 0.5;
        this.level6.anchorOffsetY = this.level6.height * 0.5;
        this.level6.x = 1090;
        this.level6.y = 425;
        this.level6.alpha = 0.5;
        this.addChild(this.level6);
        this.level6.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.level6Begin, this);
        this.level7 = new egret.Bitmap();
        this.level7.texture = RES.getRes("level7_png");
        this.level7.anchorOffsetX = this.level7.width * 0.5;
        this.level7.anchorOffsetY = this.level7.height * 0.5;
        this.level7.x = 1075;
        this.level7.y = 215;
        this.level7.alpha = 0.5;
        this.addChild(this.level7);
        this.level7.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.level7Begin, this);
        if (egret.localStorage.getItem("level1")) {
            this.level2.alpha = 1;
        }
        if (egret.localStorage.getItem("level2")) {
            this.level3.alpha = 1;
        }
        if (egret.localStorage.getItem("level3")) {
            this.level4.alpha = 1;
        }
        if (egret.localStorage.getItem("level4")) {
            this.level5.alpha = 1;
        }
        if (egret.localStorage.getItem("level5")) {
            this.level6.alpha = 1;
        }
        if (egret.localStorage.getItem("level6")) {
            this.level7.alpha = 1;
        }
        this.back.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.backBegin, this);
        this.set.addEventListener(egret.TouchEvent.TOUCH_TAP, this.setBegin, this);
    };
    StageSelectScene.prototype.backBegin = function () {
        SceneManager.getInstance().addScene(new MainMenu());
        this.back.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.backBegin, this);
    };
    StageSelectScene.prototype.setBegin = function () {
        if (this.set.selected == false) {
            SoundManager.instance.startBgMusic("bg_mp3");
            SoundManager.instance.isBgMusic = true;
        }
        if (this.set.selected == true) {
            SoundManager.instance.stopBgMusic();
            SoundManager.instance.isBgMusic = false;
        }
    };
    StageSelectScene.prototype.level1Begin = function () {
        SceneManager.getInstance().addScene(new Level1());
    };
    StageSelectScene.prototype.level2Begin = function () {
        SceneManager.getInstance().addScene(new Level2());
    };
    StageSelectScene.prototype.level3Begin = function () {
        SceneManager.getInstance().addScene(new Level3());
    };
    StageSelectScene.prototype.level4Begin = function () {
        SceneManager.getInstance().addScene(new Level4());
    };
    StageSelectScene.prototype.level5Begin = function () {
        SceneManager.getInstance().addScene(new Level5());
    };
    StageSelectScene.prototype.level6Begin = function () {
        SceneManager.getInstance().addScene(new Level6());
    };
    StageSelectScene.prototype.level7Begin = function () {
        SceneManager.getInstance().addScene(new Level7());
    };
    StageSelectScene.prototype.update = function () {
        if (this.level1.alpha == 1) {
            this.level1.touchEnabled = true;
        }
        if (this.level2.alpha == 1) {
            this.level2.touchEnabled = true;
        }
        if (this.level3.alpha == 1) {
            this.level3.touchEnabled = true;
        }
        if (this.level4.alpha == 1) {
            this.level4.touchEnabled = true;
        }
        if (this.level5.alpha == 1) {
            this.level5.touchEnabled = true;
        }
        if (this.level6.alpha == 1) {
            this.level6.touchEnabled = true;
        }
        if (this.level7.alpha == 1) {
            this.level7.touchEnabled = true;
        }
        //检测音量变换
        if (SoundManager.instance.isBgMusic == false) {
            this.set.selected = true;
        }
        if (SoundManager.instance.isBgMusic == true) {
            this.set.selected = false;
        }
    };
    return StageSelectScene;
}(BaseScene));
__reflect(StageSelectScene.prototype, "StageSelectScene");
//# sourceMappingURL=StageSelectScene.js.map