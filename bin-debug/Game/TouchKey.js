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
var TouchKey = (function (_super) {
    __extends(TouchKey, _super);
    function TouchKey() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ENTER_FRAME, _this.update, _this);
        return _this;
    }
    TouchKey.prototype.init = function () {
        if (KeyboardControl.getKey().isKey == true) {
            this.skinName = "key";
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.add, this);
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
        }
    };
    //检测音量变换
    TouchKey.prototype.update = function () {
        if (SoundManager.instance.isBgMusic == false) {
            this.set.selected = true;
        }
        if (SoundManager.instance.isBgMusic == true) {
            this.set.selected = false;
        }
    };
    TouchKey.prototype.add = function () {
        this.goLeft.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.goLeftBegin, this);
        this.goRight.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.goRightBegin, this);
        this.goUp.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.goUpBegin, this);
        this.fire.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.fireBegin, this);
        this.stop.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.stopBegin, this);
        this.set.addEventListener(egret.TouchEvent.TOUCH_TAP, this.setBegin, this);
        this.back.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.backBegin, this);
        this.leftGo.addEventListener(egret.TouchEvent.TOUCH_END, this.goLeftEnd, this);
        this.rightGo.addEventListener(egret.TouchEvent.TOUCH_END, this.goRightEnd, this);
        this.upGo.addEventListener(egret.TouchEvent.TOUCH_END, this.goUpEnd, this);
        this.fireGo.addEventListener(egret.TouchEvent.TOUCH_END, this.fireEnd, this);
    };
    TouchKey.prototype.remove = function () {
        this.goLeft.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.goLeftBegin, this);
        this.goRight.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.goRightBegin, this);
        this.goUp.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.goUpBegin, this);
        this.fire.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.fireBegin, this);
        this.leftGo.removeEventListener(egret.TouchEvent.TOUCH_END, this.goLeftEnd, this);
        this.rightGo.removeEventListener(egret.TouchEvent.TOUCH_END, this.goRightEnd, this);
        this.upGo.removeEventListener(egret.TouchEvent.TOUCH_END, this.goUpEnd, this);
        this.fireGo.removeEventListener(egret.TouchEvent.TOUCH_END, this.fireEnd, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
    };
    TouchKey.prototype.stopBegin = function () {
        //selected是ToggleButton的属性，默认状态为false,点击下变为true，再次点击变回false
        if (this.stop.selected == false) {
            KeyboardControl.getKey().isKey = false;
            KeyboardControl.getKey().leftFlag = 0;
            KeyboardControl.getKey().rightFlag = 0;
            KeyboardControl.getKey().upFlag = 0;
            KeyboardControl.getKey().jumpState = false;
            KeyboardControl.getKey().jumpTimes = 0;
        }
        if (this.stop.selected == true) {
            KeyboardControl.getKey().isKey = true;
        }
    };
    //静音
    TouchKey.prototype.setBegin = function () {
        if (this.set.selected == false) {
            SoundManager.instance.startBgMusic("bg_mp3");
            SoundManager.instance.isBgMusic = true;
        }
        if (this.set.selected == true) {
            SoundManager.instance.stopBgMusic();
            SoundManager.instance.isBgMusic = false;
        }
    };
    TouchKey.prototype.backBegin = function () {
        PlayerManager.getPlayer().isDeath = false;
        BgManager.getBg().bgArray = [];
        BoardManager.getBoard().boardArray = [];
        CloudManager.getCloud().cloudArray = [];
        DiamondManager.getdiamond().diamondArray = [];
        StarManager.getStar().starArray = [];
        BallManager.getBall().ballArray = [];
        IceManager.getIce().iceArray = [];
        LaserManager.getLaser().laserArray = [];
        LandManager.getLand().landArray = [];
        ThronManager.getThron().thronArray = [];
        BulletManager.getBullet().bulletArray = [];
        ReboundPadManager.getPad().padArray = [];
        PropManager.getProp().propArray = [];
        LaserManager.getLaser().laserArray = [];
        KeyboardControl.getKey().isKey = false;
        KeyboardControl.getKey().leftFlag = 0;
        KeyboardControl.getKey().rightFlag = 0;
        KeyboardControl.getKey().upFlag = 0;
        KeyboardControl.getKey().jumpState = false;
        KeyboardControl.getKey().jumpTimes = 0;
        PlayerManager.getPlayer().player = null;
        this.stop.selected == true;
        SceneManager.getInstance().addScene(new StageSelectScene());
    };
    TouchKey.prototype.goLeftBegin = function () {
        KeyboardControl.getKey().leftFlag = 1;
    };
    TouchKey.prototype.goRightBegin = function () {
        KeyboardControl.getKey().rightFlag = 1;
    };
    TouchKey.prototype.goUpBegin = function () {
        if (KeyboardControl.getKey().upFlag == 0 && KeyboardControl.getKey().jumpTimes > 0) {
            KeyboardControl.getKey().upFlag = 1;
            KeyboardControl.getKey().speedY = 14;
            SoundManager.instance.playEffect("jump_mp3");
        }
        KeyboardControl.getKey().jumpTimes -= 1;
    };
    TouchKey.prototype.fireBegin = function () {
        KeyboardControl.getKey().xFlag = 1;
        KeyboardControl.getKey().isX = true;
    };
    TouchKey.prototype.goLeftEnd = function () {
        KeyboardControl.getKey().leftFlag = 0;
        KeyboardControl.getKey().speedX = 0;
    };
    TouchKey.prototype.goRightEnd = function () {
        KeyboardControl.getKey().rightFlag = 0;
        KeyboardControl.getKey().speedX = 0;
    };
    TouchKey.prototype.goUpEnd = function () {
        KeyboardControl.getKey().upFlag = 0;
    };
    TouchKey.prototype.fireEnd = function () {
        KeyboardControl.getKey().xFlag = 0;
        KeyboardControl.getKey().isX = false;
    };
    return TouchKey;
}(BaseScene));
__reflect(TouchKey.prototype, "TouchKey");
//# sourceMappingURL=TouchKey.js.map