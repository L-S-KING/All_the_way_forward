var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LandManager = (function () {
    function LandManager() {
        /**土地块 */
        this.land = null;
        /**土地块队列 */
        this.landArray = [];
    }
    LandManager.getLand = function () {
        if (this._land == null) {
            this._land = new LandManager();
        }
        return this._land;
    };
    /**创建土地块 */
    LandManager.prototype.createLand = function (type, landX, landY) {
        this.land = new Land();
        this.land.landInit(type);
        this.land.x = landX;
        this.land.y = landY;
        SceneManager.getInstance().currentScene.addChild(this.land);
        this.landArray.push(this.land);
    };
    LandManager._land = null;
    return LandManager;
}());
__reflect(LandManager.prototype, "LandManager");
//# sourceMappingURL=LandManager.js.map