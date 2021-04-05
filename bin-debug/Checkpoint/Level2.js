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
var Level2 = (function (_super) {
    __extends(Level2, _super);
    function Level2() {
        var _this = _super.call(this) || this;
        _this.id = 2;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    Level2.prototype.init = function () {
        KeyboardControl.getKey().isKey = true;
        //添加背景
        BgManager.getBg().createBg(2);
        //添加土地块
        LandManager.getLand().createLand(1, 320, 665);
        LandManager.getLand().createLand(1, 530, 265);
        LandManager.getLand().createLand(1, 1615, 265);
        LandManager.getLand().createLand(1, 1800, 665);
        LandManager.getLand().createLand(1, 3220, 665);
        LandManager.getLand().createLand(1, 4700, 665);
        LandManager.getLand().createLand(3, 1115, 420);
        LandManager.getLand().createLand(3, 2930, 295);
        LandManager.getLand().createLand(3, 3245, 295);
        LandManager.getLand().createLand(3, 3562, 295);
        LandManager.getLand().createLand(4, 2525, 595);
        LandManager.getLand().createLand(4, 5060, 595);
        LandManager.getLand().createLand(5, 900, 565);
        // LandManager.getLand().createLand(5,5070,565);		
        //添加刺
        ThronManager.getThron().createThron(5, 2370, 250);
        ThronManager.getThron().createThron(5, 3095, 150);
        ThronManager.getThron().createThron(5, 3415, 150);
        // ThronManager.getThron().createThron(2,4950,605);
        //添加木板
        BoardManager.getBoard().createBoard(1, 2370, 680);
        BoardManager.getBoard().createBoard(3, 1006, 250);
        BoardManager.getBoard().createBoard(3, 4900, 380);
        BoardManager.getBoard().createBoard(3, 4700, 380);
        BoardManager.getBoard().createBoard(3, 4500, 380);
        BoardManager.getBoard().createBoard(3, 4300, 380);
        //添加云
        CloudManager.getCloud().addCloud(1, 2150, 200);
        CloudManager.getCloud().addCloud(1, 2400, 200);
        CloudManager.getCloud().addCloud(1, 2650, 200);
        CloudManager.getCloud().addCloud(2, 2750, 360);
        CloudManager.getCloud().addCloud(1, 3800, 645);
        CloudManager.getCloud().addCloud(1, 4080, 645);
        CloudManager.getCloud().addCloud(1, 3800, 300);
        CloudManager.getCloud().addCloud(1, 4080, 300);
        //添加骷髅
        BoneManager.getBone().boneInit(1, -1, 260, 170);
        BoneManager.getBone().boneInit(1, 1, 800, 170);
        BoneManager.getBone().boneInit(1, -1, 1350, 170);
        BoneManager.getBone().boneInit(1, 1, 1900, 170);
        //添加道具
        PropManager.getProp().createProp(1, 4600, 250);
        //添加星星
        StarManager.getStar().createStar(1500, 100);
        StarManager.getStar().createStar(1800, 100);
        StarManager.getStar().createStar(1800, 415);
        StarManager.getStar().createStar(2525, 280);
        StarManager.getStar().createStar(3250, 100);
        StarManager.getStar().createStar(3950, 140);
        DiamondManager.getdiamond().createDiamond(530, 100);
        //添加玩家
        PlayerManager.getPlayer().createPlayer(35, 590);
        SceneManager.getInstance().currentScene.addChild(KeyboardControl.getKey());
        TouchKeyManager.getTouchKey().createTouchKey();
    };
    return Level2;
}(BaseScene));
__reflect(Level2.prototype, "Level2");
//# sourceMappingURL=Level2.js.map