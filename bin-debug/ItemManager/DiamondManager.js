var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 钻石管理类
 */
var DiamondManager = (function () {
    function DiamondManager() {
        /**钻石 */
        this.diamond = null;
        /**钻石队列 */
        this.diamondArray = [];
        /**钻石总数量 */
        this.diamondTotal = 0;
        /**吃掉钻石数量 */
        this.diamondNum = 0;
    }
    DiamondManager.getdiamond = function () {
        if (this._diamond == null) {
            this._diamond = new DiamondManager();
        }
        return this._diamond;
    };
    /**创建钻石 */
    DiamondManager.prototype.createDiamond = function (diamondX, diamondY) {
        this.diamond = new Diamond();
        this.diamond.diamondInit();
        this.diamond.x = diamondX;
        this.diamond.y = diamondY;
        SceneManager.getInstance().currentScene.addChild(this.diamond);
        this.diamondArray.push(this.diamond);
    };
    DiamondManager._diamond = null;
    return DiamondManager;
}());
__reflect(DiamondManager.prototype, "DiamondManager");
//# sourceMappingURL=DiamondManager.js.map