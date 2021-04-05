var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * 碰撞盒管理类
 */
var CollisionBoxManager = (function (_super) {
    __extends(CollisionBoxManager, _super);
    function CollisionBoxManager() {
        var _this = _super.call(this) || this;
        /**碰撞盒数组 */
        _this.boxArray = [];
        return _this;
    }
    /**碰撞盒管理单例 */
    CollisionBoxManager.getCollisionBox = function () {
        if (this._CollisionBox == null) {
            this._CollisionBox = new CollisionBoxManager;
        }
        return this._CollisionBox;
    };
    /**创建碰撞盒
     * posX碰撞盒x坐标
     * posY碰撞盒y坐标
     * width:碰撞盒的宽
     * height：碰撞盒的高
    */
    CollisionBoxManager.prototype.createCollisionBox = function (posX, posY, width, height) {
        var box = new Box();
        box.init(width, height);
        box.anchorOffsetX = width * 0.5;
        box.anchorOffsetY = height * 0.5;
        box.x = posX;
        box.y = posY;
        SceneManager.getInstance().currentScene.addChild(box);
        this.boxArray.push(box);
    };
    //单例
    CollisionBoxManager._CollisionBox = null;
    return CollisionBoxManager;
}(BaseScene));
__reflect(CollisionBoxManager.prototype, "CollisionBoxManager");
//# sourceMappingURL=CollisionBoxManager.js.map