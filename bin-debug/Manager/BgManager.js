var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 游戏背景管理类
 */
var BgManager = (function () {
    function BgManager() {
        /**背景 */
        this.bg = null;
        /**背景队列 */
        this.bgArray = [];
        /**关卡数 */
        this.levelNum = 0;
    }
    BgManager.getBg = function () {
        if (this._bg == null) {
            this._bg = new BgManager();
        }
        return this._bg;
    };
    /**关卡背景初始化 */
    BgManager.prototype.createBg = function (type) {
        KeyboardControl.getKey().isKey = true;
        this.levelNum = type;
        for (var i = 0; i < 4; i++) {
            this.bg = new Bg();
            this.bg.bgInit(type);
            this.bg.x = 1280 * i;
            this.bg.y = 0;
            SceneManager.getInstance().currentScene.addChild(this.bg);
            this.bgArray.push(this.bg);
        }
    };
    BgManager._bg = null;
    return BgManager;
}());
__reflect(BgManager.prototype, "BgManager");
//# sourceMappingURL=BgManager.js.map