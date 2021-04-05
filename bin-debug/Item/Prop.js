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
 * 道具
 */
var Prop = (function (_super) {
    __extends(Prop, _super);
    function Prop() {
        var _this = _super.call(this) || this;
        /**道具 */
        _this.prop = null;
        /**道具种类 */
        _this.propType = 0;
        _this.addEventListener(egret.Event.ENTER_FRAME, _this.update, _this);
        return _this;
    }
    /**道具初始化 */
    Prop.prototype.propInit = function (type) {
        this.propType = type;
        this.prop = new egret.Bitmap();
        this.prop.texture = RES.getRes("item" + this.propType + "_png");
        this.prop.anchorOffsetX = this.prop.width * 0.5;
        this.prop.anchorOffsetY = this.prop.height * 0.5;
        this.addChild(this.prop);
    };
    /**道具碰撞检测 */
    Prop.prototype.update = function () {
        if (Math.abs(this.x - PlayerManager.getPlayer().player.x) < (this.prop.width + PlayerManager.getPlayer().player.player.width) * 0.5
            && Math.abs(this.y - PlayerManager.getPlayer().player.y) < (this.prop.height + PlayerManager.getPlayer().player.player.height) * 0.5) {
            if (this.parent != null) {
                //删除碰撞道具
                this.parent.removeChild(this);
                //添加守护者
                GuardianManager.getGuardian().addGuardian();
            }
        }
    };
    return Prop;
}(BaseScene));
__reflect(Prop.prototype, "Prop");
//# sourceMappingURL=Prop.js.map