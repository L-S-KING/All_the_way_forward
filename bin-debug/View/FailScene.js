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
var FailScene = (function (_super) {
    __extends(FailScene, _super);
    function FailScene() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    FailScene.prototype.init = function () {
        this.skinName = "fail";
        SoundManager.instance.stopBgMusic();
        SoundManager.instance.startBgMusic("end_mp3");
        this.remove();
        //给按钮添加触摸监听
        this.again.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.againBegin, this);
        this.menu.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.menuBegin, this);
    };
    FailScene.prototype.againBegin = function () {
        if (SoundManager.instance.isBgMusic == true) {
            SoundManager.instance.stopBgMusic();
            SoundManager.instance.startBgMusic("bg_mp3");
        }
        if (SoundManager.instance.isBgMusic == false) {
            SoundManager.instance.stopBgMusic();
        }
        this.remove();
        if (BgManager.getBg().levelNum == 1) {
            SceneManager.getInstance().addScene(new Level1());
        }
        else if (BgManager.getBg().levelNum == 2) {
            SceneManager.getInstance().addScene(new Level2());
        }
        else if (BgManager.getBg().levelNum == 3) {
            SceneManager.getInstance().addScene(new Level3());
        }
        else if (BgManager.getBg().levelNum == 4) {
            SceneManager.getInstance().addScene(new Level4());
        }
        else if (BgManager.getBg().levelNum == 5) {
            SceneManager.getInstance().addScene(new Level5());
        }
        else if (BgManager.getBg().levelNum == 6) {
            SceneManager.getInstance().addScene(new Level6());
        }
        else if (BgManager.getBg().levelNum == 7) {
            SceneManager.getInstance().addScene(new Level7());
        }
        StarManager.getStar().starNum = 0;
        this.again.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.againBegin, this);
        if (this.parent != null) {
            this.parent.removeChild(this);
        }
    };
    FailScene.prototype.menuBegin = function () {
        if (SoundManager.instance.isBgMusic == true) {
            SoundManager.instance.stopBgMusic();
            SoundManager.instance.startBgMusic("bg_mp3");
        }
        if (SoundManager.instance.isBgMusic == false) {
            SoundManager.instance.stopBgMusic();
        }
        this.remove();
        StarManager.getStar().starNum = 0;
        SceneManager.getInstance().addScene(new StageSelectScene());
        if (this.parent != null) {
            this.parent.removeChild(this);
        }
    };
    FailScene.prototype.remove = function () {
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
        KeyboardControl.getKey().speedY = 0;
    };
    return FailScene;
}(BaseScene));
__reflect(FailScene.prototype, "FailScene");
//# sourceMappingURL=FailScene.js.map