var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 激光发射器管理
 */
var LaserEmitterManager = (function () {
    function LaserEmitterManager() {
        /**激光发射器 */
        this.laserEmitter = null;
        /**激光发射器队列 */
        this.laserEmitterArray = [];
    }
    LaserEmitterManager.getLaserEmitter = function () {
        if (this._laserEmitter == null) {
            this._laserEmitter = new LaserEmitterManager();
        }
        return this._laserEmitter;
    };
    /**
     * 添加激光发射器
     * type:种类
     * laserEmitterX:X坐标
     * laserEmitterY:Y坐标
     *  */
    LaserEmitterManager.prototype.addLaserEmitter = function (type, laserEmitterX, laserEmitterY) {
        LaserManager.getLaser().createLaser(type, laserEmitterX, laserEmitterY);
        this.laserEmitter = new LaserEmitter();
        this.laserEmitter.laserEmitterInit(type);
        this.laserEmitter.x = laserEmitterX;
        this.laserEmitter.y = laserEmitterY;
        SceneManager.getInstance().currentScene.addChild(this.laserEmitter);
        this.laserEmitterArray.push(this.laserEmitter);
    };
    LaserEmitterManager._laserEmitter = null;
    return LaserEmitterManager;
}());
__reflect(LaserEmitterManager.prototype, "LaserEmitterManager");
//# sourceMappingURL=LaserEmitterManager.js.map