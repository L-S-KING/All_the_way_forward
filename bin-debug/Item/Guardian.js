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
 * 玩家守护者
 * 负责攻击保护玩家
 */
var Guardian = (function (_super) {
    __extends(Guardian, _super);
    function Guardian() {
        var _this = _super.call(this) || this;
        /**守护者道具 */
        _this.guardian = null;
        /**序列帧 */
        _this.guardianIndex = 1;
        /**守护者子弹 */
        _this.bullet = null;
        /**守护者序列帧切换时间 */
        _this.frameTime = 0;
        /**守护者子弹创建时间 */
        _this.createBulletTime = 0;
        _this.addEventListener(egret.Event.ENTER_FRAME, _this.update, _this);
        return _this;
    }
    /**守护者初始化 */
    Guardian.prototype.guardianInit = function () {
        this.guardian = new egret.Bitmap();
        this.guardian.texture = RES.getRes("man" + this.guardianIndex + "_png");
        this.guardian.anchorOffsetX = this.guardian.width * 0.5;
        this.guardian.anchorOffsetY = this.guardian.height * 0.5;
        this.addChild(this.guardian);
    };
    /**
     * 守护者的序列帧切换
     * 守护者的移动
     */
    Guardian.prototype.update = function () {
        if (TouchKeyManager.getTouchKey().touchKey.stop.selected) {
            return;
        }
        this.frameTime += 1;
        if (this.frameTime % 10 == 0) {
            this.guardianIndex += 1;
            if (this.guardianIndex >= 6) {
                this.guardianIndex = 1;
            }
            this.guardian.texture = RES.getRes("man" + this.guardianIndex + "_png");
        }
        //守护者跟随玩家
        GuardianManager.getGuardian().guardian.scaleX = PlayerManager.getPlayer().player.vectorX;
        GuardianManager.getGuardian().guardian.x = PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.vectorX * (PlayerManager.getPlayer().player.player.width + GuardianManager.getGuardian().guardian.guardian.width) * 0.4;
        GuardianManager.getGuardian().guardian.y = PlayerManager.getPlayer().player.y - (PlayerManager.getPlayer().player.player.height + GuardianManager.getGuardian().guardian.guardian.height) * 0.5;
        if (KeyboardControl.getKey().isX == true) {
            this.createBulletTime += 1;
            var bulletX = GuardianManager.getGuardian().guardian.x - 60 * PlayerManager.getPlayer().player.vectorX;
            var bulletY = GuardianManager.getGuardian().guardian.y;
            if (this.createBulletTime % 8 == 0 || this.createBulletTime == 0) {
                BulletManager.getBullet().createBullet(bulletX, bulletY);
            }
        }
    };
    return Guardian;
}(BaseScene));
__reflect(Guardian.prototype, "Guardian");
//# sourceMappingURL=Guardian.js.map