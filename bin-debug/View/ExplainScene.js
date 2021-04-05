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
var ExplainScene = (function (_super) {
    __extends(ExplainScene, _super);
    function ExplainScene() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    ExplainScene.prototype.init = function () {
        this.skinName = "exp";
        this.back.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.backBegin, this);
    };
    ExplainScene.prototype.backBegin = function () {
        SceneManager.getInstance().addScene(new MainMenu());
    };
    return ExplainScene;
}(BaseScene));
__reflect(ExplainScene.prototype, "ExplainScene");
//# sourceMappingURL=ExplainScene.js.map