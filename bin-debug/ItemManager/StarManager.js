var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 星星管理类
 */
var StarManager = (function () {
    function StarManager() {
        /**星星 */
        this.star = null;
        /**星星队列 */
        this.starArray = [];
        /**星星总数量 */
        this.starTotal = 0;
        /**吃掉星星数量 */
        this.starNum = 0;
    }
    StarManager.getStar = function () {
        if (this._star == null) {
            this._star = new StarManager();
        }
        return this._star;
    };
    /**创建星星 */
    StarManager.prototype.createStar = function (starX, starY) {
        this.star = new Star();
        this.star.starInit();
        this.star.x = starX;
        this.star.y = starY;
        SceneManager.getInstance().currentScene.addChild(this.star);
        this.starArray.push(this.star);
    };
    StarManager._star = null;
    return StarManager;
}());
__reflect(StarManager.prototype, "StarManager");
//# sourceMappingURL=StarManager.js.map