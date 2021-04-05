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
var Level5 = (function (_super) {
    __extends(Level5, _super);
    function Level5() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    Level5.prototype.init = function () {
        BgManager.getBg().createBg(5);
        //添加土地块
        LandManager.getLand().createLand(7, 425, 575);
        LandManager.getLand().createLand(7, 775, 550);
        LandManager.getLand().createLand(8, 5020, 250);
        LandManager.getLand().createLand(9, 25, 360);
        LandManager.getLand().createLand(9, 5095, 360);
        LandManager.getLand().createLand(10, 650, 25);
        LandManager.getLand().createLand(10, 1950, 25);
        LandManager.getLand().createLand(10, 3250, 25);
        LandManager.getLand().createLand(10, 4550, 25);
        LandManager.getLand().createLand(10, 650, 695);
        LandManager.getLand().createLand(10, 1950, 695);
        LandManager.getLand().createLand(10, 3250, 695);
        LandManager.getLand().createLand(10, 4550, 695);
        LandManager.getLand().createLand(10, 1000, 175);
        LandManager.getLand().createLand(12, 150, 175);
        LandManager.getLand().createLand(12, 150, 575);
        LandManager.getLand().createLand(12, 1175, 550);
        LandManager.getLand().createLand(12, 1650, 445);
        LandManager.getLand().createLand(12, 1880, 240);
        LandManager.getLand().createLand(12, 2080, 445);
        LandManager.getLand().createLand(12, 2600, 445);
        LandManager.getLand().createLand(12, 2950, 295);
        LandManager.getLand().createLand(13, 175, 425);
        LandManager.getLand().createLand(14, 225, 300);
        LandManager.getLand().createLand(14, 375, 300);
        LandManager.getLand().createLand(14, 775, 300);
        LandManager.getLand().createLand(14, 1175, 300);
        LandManager.getLand().createLand(14, 2375, 150);
        LandManager.getLand().createLand(15, 575, 545);
        LandManager.getLand().createLand(15, 975, 545);
        LandManager.getLand().createLand(15, 1375, 545);
        LandManager.getLand().createLand(15, 2375, 545);
        LandManager.getLand().createLand(15, 3375, 545);
        LandManager.getLand().createLand(16, 3425, 520);
        LandManager.getLand().createLand(16, 3725, 520);
        LandManager.getLand().createLand(16, 4025, 520);
        LandManager.getLand().createLand(16, 4325, 520);
        LandManager.getLand().createLand(16, 4625, 520);
        LandManager.getLand().createLand(16, 4925, 520);
        LandManager.getLand().createLand(17, 4200, 450);
        //添加尖刺
        ThronManager.getThron().createThron(4, 480, 315);
        ThronManager.getThron().createThron(4, 880, 315);
        //添加冰柱
        IceManager.getIce().createIce(1, 3500, 65, 19, 78, 0);
        //添加骷髅
        BoneManager.getBone().boneInit(1, -1, 400, 110);
        BoneManager.getBone().boneInit(1, 1, 1500, 110);
        //添加攻击道具
        PropManager.getProp().createProp(1, 150, 320);
        //添加星星
        StarManager.getStar().createStar(775, 80);
        StarManager.getStar().createStar(1175, 80);
        StarManager.getStar().createStar(775, 455);
        StarManager.getStar().createStar(1175, 455);
        StarManager.getStar().createStar(4180, 300);
        StarManager.getStar().createStar(4480, 300);
        LaserEmitterManager.getLaserEmitter().addLaserEmitter(4, 1880, 620);
        LaserEmitterManager.getLaserEmitter().addLaserEmitter(4, 2950, 620);
        //添加钻石
        DiamondManager.getdiamond().createDiamond(5020, 90);
        PlayerManager.getPlayer().createPlayer(80, 120);
        SceneManager.getInstance().currentScene.addChild(KeyboardControl.getKey());
        TouchKeyManager.getTouchKey().createTouchKey();
    };
    return Level5;
}(BaseScene));
__reflect(Level5.prototype, "Level5");
//# sourceMappingURL=Level5.js.map