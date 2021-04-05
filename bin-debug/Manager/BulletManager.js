var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 守护者子弹管理类
 */
var BulletManager = (function () {
    function BulletManager() {
        /**守护者子弹 */
        this.bullet = null;
        /**守护者子弹队列 */
        this.bulletArray = [];
    }
    BulletManager.getBullet = function () {
        if (this._bullet == null) {
            this._bullet = new BulletManager();
        }
        return this._bullet;
    };
    /**创建守护者子弹 */
    BulletManager.prototype.createBullet = function (bulletX, bulletY) {
        this.bullet = new Bullet();
        this.bullet.bulletInit();
        this.bullet.x = bulletX;
        this.bullet.y = bulletY;
        SceneManager.getInstance().currentScene.addChild(this.bullet);
        this.bulletArray.push(this.bullet);
    };
    BulletManager._bullet = null;
    return BulletManager;
}());
__reflect(BulletManager.prototype, "BulletManager");
//# sourceMappingURL=BulletManager.js.map