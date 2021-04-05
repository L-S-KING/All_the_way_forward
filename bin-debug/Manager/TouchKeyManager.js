var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var TouchKeyManager = (function () {
    function TouchKeyManager() {
        /**触摸按键 */
        this.touchKey = null;
    }
    TouchKeyManager.getTouchKey = function () {
        if (this._touchKey == null) {
            this._touchKey = new TouchKeyManager;
        }
        return this._touchKey;
    };
    TouchKeyManager.prototype.createTouchKey = function () {
        this.touchKey = new TouchKey();
        this.touchKey.init();
        SceneManager.getInstance().currentScene.addChild(this.touchKey);
    };
    TouchKeyManager._touchKey = null;
    return TouchKeyManager;
}());
__reflect(TouchKeyManager.prototype, "TouchKeyManager");
//# sourceMappingURL=TouchKeyManager.js.map