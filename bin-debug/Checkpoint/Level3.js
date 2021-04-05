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
var Level3 = (function (_super) {
    __extends(Level3, _super);
    function Level3() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    Level3.prototype.init = function () {
        //添加背景
        BgManager.getBg().createBg(3);
        //添加土地块
        LandManager.getLand().createLand(1, 320, 250);
        LandManager.getLand().createLand(1, 620, 455);
        LandManager.getLand().createLand(1, 1260, 250);
        LandManager.getLand().createLand(1, 2060, 250);
        LandManager.getLand().createLand(1, 2940, 250);
        LandManager.getLand().createLand(1, 2940, 565);
        LandManager.getLand().createLand(1, 3780, 250);
        LandManager.getLand().createLand(1, 3780, 565);
        LandManager.getLand().createLand(1, 4800, 396);
        LandManager.getLand().createLand(2, 1180, 455);
        LandManager.getLand().createLand(2, 1660, 455);
        LandManager.getLand().createLand(2, 2140, 455);
        LandManager.getLand().createLand(5, 790, 360);
        LandManager.getLand().createLand(6, 640, 670);
        LandManager.getLand().createLand(6, 1920, 670);
        LandManager.getLand().createLand(6, 3200, 670);
        LandManager.getLand().createLand(6, 4480, 670);
        //添加骷髅
        BoneManager.getBone().boneInit(1, -1, 1000, 150);
        BoneManager.getBone().boneInit(1, 1, 1500, 150);
        BoneManager.getBone().boneInit(1, -1, 1800, 150);
        BoneManager.getBone().boneInit(1, 1, 2320, 150);
        BoneManager.getBone().boneInit(1, 1, 3200, 470);
        BoneManager.getBone().boneInit(1, -1, 3500, 470);
        //添加木板
        BoardManager.getBoard().createBoard(3, 40, 580);
        BoardManager.getBoard().createBoard(3, 260, 445);
        BoardManager.getBoard().createBoard(3, 1620, 240);
        BoardManager.getBoard().createBoard(3, 980, 445);
        BoardManager.getBoard().createBoard(3, 1380, 445);
        BoardManager.getBoard().createBoard(3, 1460, 445);
        BoardManager.getBoard().createBoard(3, 1940, 445);
        //添加星星
        StarManager.getStar().createStar(610, 550);
        StarManager.getStar().createStar(1180, 540);
        StarManager.getStar().createStar(1660, 540);
        StarManager.getStar().createStar(3100, 320);
        StarManager.getStar().createStar(3620, 320);
        StarManager.getStar().createStar(1180, 340);
        //添加刺
        ThronManager.getThron().createThron(5, 4350, 100);
        //添加尖刺球
        BallManager.getBall().createBall(2, 680, 240);
        //添加滚木
        BallManager.getBall().createBall(1, 2650, 180);
        BallManager.getBall().createBall(1, 4070, 180);
        BallManager.getBall().createBall(1, 5050, 320);
        //添加攻击道具
        PropManager.getProp().createProp(1, 40, 420);
        //添加反弹垫
        ReboundPadManager.getPad().createPad(4350, 600);
        //添加钻石
        DiamondManager.getdiamond().createDiamond(5050, 150);
        //添加玩家
        PlayerManager.getPlayer().createPlayer(35, 175);
        SceneManager.getInstance().currentScene.addChild(KeyboardControl.getKey());
        TouchKeyManager.getTouchKey().createTouchKey();
    };
    return Level3;
}(BaseScene));
__reflect(Level3.prototype, "Level3");
//# sourceMappingURL=Level3.js.map