var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var CloudManager = (function () {
    function CloudManager() {
        /**云 */
        this.cloud = null;
        /**云队列 */
        this.cloudArray = [];
    }
    CloudManager.getCloud = function () {
        if (this._cloud == null) {
            this._cloud = new CloudManager();
        }
        return this._cloud;
    };
    /**添加云 */
    CloudManager.prototype.addCloud = function (type, cloudX, cloudY) {
        this.cloud = new Cloud();
        this.cloud.cloudInit(type);
        this.cloud.x = cloudX;
        this.cloud.y = cloudY;
        SceneManager.getInstance().currentScene.addChild(this.cloud);
        this.cloudArray.push(this.cloud);
    };
    CloudManager._cloud = null;
    return CloudManager;
}());
__reflect(CloudManager.prototype, "CloudManager");
//# sourceMappingURL=CloudManager.js.map