var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LaserManager = (function () {
    function LaserManager() {
        /**激光 */
        this.laser = null;
        /**激光队列 */
        this.laserArray = [];
    }
    LaserManager.getLaser = function () {
        if (this._laser == null) {
            this._laser = new LaserManager();
        }
        return this._laser;
    };
    /**创建激光 */
    LaserManager.prototype.createLaser = function (type, laserX, laserY) {
        this.laser = new Laser();
        this.laser.laserInit(type);
        this.laser.x = laserX;
        this.laser.y = laserY;
        SceneManager.getInstance().currentScene.addChild(this.laser);
        this.laserArray.push(this.laser);
    };
    LaserManager._laser = null;
    return LaserManager;
}());
__reflect(LaserManager.prototype, "LaserManager");
//# sourceMappingURL=LaserManager.js.map