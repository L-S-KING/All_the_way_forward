var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 箭的管理类
 */
var ArrowManager = (function () {
    function ArrowManager() {
        /**箭 */
        this.arrow = null;
        /**箭的队列 */
        this.arrowArray = [];
    }
    ArrowManager.getArrow = function () {
        if (this._arrow == null) {
            this._arrow = new ArrowManager();
        }
        return this._arrow;
    };
    /**创建箭 */
    ArrowManager.prototype.createArrow = function (arrowX, arrowY, vectorX) {
        this.arrow = new Arrow();
        this.arrow.arrowInit(vectorX);
        this.arrow.x = arrowX;
        this.arrow.y = arrowY;
        SceneManager.getInstance().currentScene.addChild(this.arrow);
        this.arrowArray.push(this.arrow);
    };
    ArrowManager._arrow = null;
    return ArrowManager;
}());
__reflect(ArrowManager.prototype, "ArrowManager");
//# sourceMappingURL=ArrowManager.js.map