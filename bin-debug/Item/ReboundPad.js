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
 * 反弹垫
 */
var ReboundPad = (function (_super) {
    __extends(ReboundPad, _super);
    function ReboundPad() {
        var _this = _super.call(this) || this;
        /**反弹垫 */
        _this.pad = null;
        return _this;
    }
    /**反弹垫初始化 */
    ReboundPad.prototype.padInit = function () {
        this.pad = new egret.Bitmap();
        this.pad.texture = RES.getRes("pad_png");
        this.pad.anchorOffsetX = this.pad.width * 0.5;
        this.pad.anchorOffsetY = this.pad.height * 0.5;
        this.addChild(this.pad);
        this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
    };
    /**玩家与反弹垫的碰撞 */
    ReboundPad.prototype.update = function () {
        if (TouchKeyManager.getTouchKey().touchKey.stop.selected) {
            return;
        }
        if (Math.abs(PlayerManager.getPlayer().player.y - (this.y - this.pad.height * 0.5)) < (this.pad.height * 0.5 + PlayerManager.getPlayer().player.player.height) * 0.5
            && PlayerManager.getPlayer().player.x > this.x - this.pad.width * 0.5 - PlayerManager.getPlayer().player.player.width * 0.5
            && PlayerManager.getPlayer().player.x < this.x + this.pad.width * 0.5 + PlayerManager.getPlayer().player.player.width * 0.5
            && KeyboardControl.getKey().jumpState == true && KeyboardControl.getKey().speedY < 0) {
            KeyboardControl.getKey().speedY = -KeyboardControl.getKey().speedY;
        }
    };
    return ReboundPad;
}(BaseScene));
__reflect(ReboundPad.prototype, "ReboundPad");
//# sourceMappingURL=ReboundPad.js.map