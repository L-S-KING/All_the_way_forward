var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 地刺管理类
 */
var ThronManager = (function () {
    function ThronManager() {
        /**地刺 */
        this.thron = null;
        /**地刺队列 */
        this.thronArray = [];
    }
    ThronManager.getThron = function () {
        if (this._thron == null) {
            this._thron = new ThronManager();
        }
        return this._thron;
    };
    /**地刺初始化 */
    ThronManager.prototype.createThron = function (type, thronX, thronY) {
        this.thron = new Thron();
        this.thron.init(type);
        this.thron.x = thronX;
        this.thron.y = thronY;
        SceneManager.getInstance().currentScene.addChild(this.thron);
        this.thronArray.push(this.thron);
    };
    ThronManager._thron = null;
    return ThronManager;
}());
__reflect(ThronManager.prototype, "ThronManager");
//# sourceMappingURL=ThronManager.js.map