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
 * 钻石
 * */
var Diamond = (function (_super) {
    __extends(Diamond, _super);
    function Diamond() {
        var _this = _super.call(this) || this;
        /**钻石 */
        _this.diamond = null;
        return _this;
    }
    /**钻石初始化 */
    Diamond.prototype.diamondInit = function () {
        this.diamond = new egret.Bitmap();
        this.diamond.texture = RES.getRes("diamond_png");
        this.diamond.anchorOffsetX = this.diamond.width * 0.5;
        this.diamond.anchorOffsetY = this.diamond.height * 0.5;
        this.addChild(this.diamond);
        this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
    };
    /**钻石碰撞检测 */
    Diamond.prototype.update = function () {
        if (Math.abs(this.x - PlayerManager.getPlayer().player.x) < (this.diamond.width + PlayerManager.getPlayer().player.player.width) * 0.5
            && Math.abs(this.y - PlayerManager.getPlayer().player.y) < (this.diamond.height + PlayerManager.getPlayer().player.player.height) * 0.5) {
            if (this.parent != null) {
                this.parent.removeChild(this);
            }
            SceneManager.getInstance().addScene(new SuccessScene());
        }
    };
    return Diamond;
}(BaseScene));
__reflect(Diamond.prototype, "Diamond");
//# sourceMappingURL=Diamond.js.map