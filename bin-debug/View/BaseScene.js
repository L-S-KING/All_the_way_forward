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
var BaseScene = (function (_super) {
    __extends(BaseScene, _super);
    function BaseScene() {
        var _this = _super.call(this) || this;
        _this.id = 0;
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.removeSelf, _this);
        return _this;
    }
    BaseScene.prototype.update = function () {
        ;
    };
    BaseScene.prototype.removeSelf = function () {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.update, this);
    };
    return BaseScene;
}(eui.Component));
__reflect(BaseScene.prototype, "BaseScene");
//# sourceMappingURL=BaseScene.js.map