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
 * 星星
 * */
var Star = (function (_super) {
    __extends(Star, _super);
    function Star() {
        var _this = _super.call(this) || this;
        /**星星 */
        _this.star = null;
        return _this;
    }
    /**星星初始化 */
    Star.prototype.starInit = function () {
        this.star = new egret.Bitmap();
        this.star.texture = RES.getRes("star_png");
        this.star.anchorOffsetX = this.star.width * 0.5;
        this.star.anchorOffsetY = this.star.height * 0.5;
        this.addChild(this.star);
        this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
    };
    /**星星碰撞检测 */
    Star.prototype.update = function () {
        if (Math.abs(this.x - PlayerManager.getPlayer().player.x) < (this.star.width + PlayerManager.getPlayer().player.player.width) * 0.5
            && Math.abs(this.y - PlayerManager.getPlayer().player.y) < (this.star.height + PlayerManager.getPlayer().player.player.height) * 0.5) {
            if (this.parent != null) {
                this.parent.removeChild(this);
                StarManager.getStar().starNum += 1;
            }
        }
    };
    return Star;
}(BaseScene));
__reflect(Star.prototype, "Star");
//# sourceMappingURL=Star.js.map