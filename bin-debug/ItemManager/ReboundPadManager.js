var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 反弹垫管理类
 */
var ReboundPadManager = (function () {
    function ReboundPadManager() {
        /**反弹垫 */
        this.pad = null;
        /**反弹垫队列 */
        this.padArray = [];
    }
    ReboundPadManager.getPad = function () {
        if (this._pad == null) {
            this._pad = new ReboundPadManager();
        }
        return this._pad;
    };
    /**创建反弹垫 */
    ReboundPadManager.prototype.createPad = function (padX, padY) {
        this.pad = new ReboundPad();
        this.pad.padInit();
        this.pad.x = padX;
        this.pad.y = padY;
        SceneManager.getInstance().currentScene.addChild(this.pad);
        this.padArray.push(this.pad);
    };
    ReboundPadManager._pad = null;
    return ReboundPadManager;
}());
__reflect(ReboundPadManager.prototype, "ReboundPadManager");
//# sourceMappingURL=ReboundPadManager.js.map