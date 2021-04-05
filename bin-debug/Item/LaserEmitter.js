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
 * 激光发射器
 */
var LaserEmitter = (function (_super) {
    __extends(LaserEmitter, _super);
    function LaserEmitter() {
        var _this = _super.call(this) || this;
        /**激光发射器 */
        _this.laserEmitter = null;
        /**激光发射器的种类 */
        _this.laserEmitterType = 0;
        _this.addEventListener(egret.Event.ENTER_FRAME, _this.update, _this);
        return _this;
    }
    /**激光发射器的初始化 */
    LaserEmitter.prototype.laserEmitterInit = function (type) {
        this.laserEmitterType = type;
        this.laserEmitter = new egret.Bitmap();
        this.laserEmitter.texture = RES.getRes("gun" + this.laserEmitterType + "_png");
        this.laserEmitter.anchorOffsetX = this.laserEmitter.width * 0.5;
        this.laserEmitter.anchorOffsetY = this.laserEmitter.height * 0.5;
        this.addChild(this.laserEmitter);
    };
    return LaserEmitter;
}(BaseScene));
__reflect(LaserEmitter.prototype, "LaserEmitter");
//# sourceMappingURL=LaserEmitter.js.map