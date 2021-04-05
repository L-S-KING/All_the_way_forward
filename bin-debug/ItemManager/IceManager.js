var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 冰管理类
 */
var IceManager = (function () {
    function IceManager() {
        /**冰 */
        this.ice = null;
        /**冰队列 */
        this.iceArray = [];
    }
    IceManager.getIce = function () {
        if (this._ice == null) {
            this._ice = new IceManager();
        }
        return this._ice;
    };
    /**
     * 创建冰
     * type:冰的种类
     * iceX:创建第一块冰的X坐标
     * iceY:创建第一块冰的Y坐标
     * iceNum:创建冰的个数
     * iceIntervalX:创建冰之间横向的间隔
     * iceIntervalY:创建冰之间纵向的间隔
     */
    IceManager.prototype.createIce = function (type, iceX, iceY, iceNum, iceIntervalX, iceIntervalY) {
        for (var i = 0; i < iceNum; i++) {
            this.ice = new Ice();
            this.ice.iceInit(type);
            this.ice.x = i * iceIntervalX + iceX;
            this.ice.y = i * iceIntervalY + iceY;
            SceneManager.getInstance().currentScene.addChild(this.ice);
            this.iceArray.push(this.ice);
        }
    };
    IceManager._ice = null;
    return IceManager;
}());
__reflect(IceManager.prototype, "IceManager");
//# sourceMappingURL=IceManager.js.map