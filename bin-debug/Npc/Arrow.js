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
 * 箭
 */
var Arrow = (function (_super) {
    __extends(Arrow, _super);
    function Arrow() {
        var _this = _super.call(this) || this;
        /**箭 */
        _this.arrow = null;
        /**箭的速度 */
        _this.arrowSpeed = 8;
        /**箭的移动方向 */
        _this.arrowVectorX = 0;
        return _this;
    }
    /**箭的初始化 */
    Arrow.prototype.arrowInit = function (vectorX) {
        this.arrowVectorX = vectorX;
        this.arrow = new egret.Bitmap();
        this.arrow.texture = RES.getRes("arrow_png");
        this.arrow.anchorOffsetX = this.arrow.width * 0.5;
        this.arrow.anchorOffsetY = this.arrow.height * 0.5;
        this.addChild(this.arrow);
        this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
    };
    /**
     * 箭的移动
     * 箭超出屏幕范围删除
     */
    Arrow.prototype.update = function () {
        if (TouchKeyManager.getTouchKey().touchKey.stop.selected) {
            return;
        }
        //箭的移动
        this.x -= this.arrowSpeed * this.arrowVectorX;
        //箭超出屏幕范围删除
        if (Math.abs(this.x - PlayerManager.getPlayer().player.x) < (this.arrow.width + PlayerManager.getPlayer().player.player.width) * 0.5
            && Math.abs(this.y - PlayerManager.getPlayer().player.y) < (this.arrow.height + PlayerManager.getPlayer().player.player.height) * 0.5) {
            PlayerManager.getPlayer().isDeath = true;
        }
        if (this.x + this.arrow.width * 0.5 <= 0 && this.parent != null) {
            this.parent.removeChild(this);
        }
        //骷髅的箭与墙的碰撞
        for (var i = 0; i < LandManager.getLand().landArray.length; i++) {
            if (Math.abs(this.x - LandManager.getLand().landArray[i].x) < (this.arrow.width + LandManager.getLand().landArray[i].land.width) * 0.5
                && Math.abs(this.y - LandManager.getLand().landArray[i].y) < (this.arrow.height + LandManager.getLand().landArray[i].land.height) * 0.5) {
                //删除当前与墙碰撞箭
                if (this.parent != null) {
                    this.parent.removeChild(this);
                }
            }
        }
    };
    return Arrow;
}(BaseScene));
__reflect(Arrow.prototype, "Arrow");
//# sourceMappingURL=Arrow.js.map