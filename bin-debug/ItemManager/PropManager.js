var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 道具管理类
 * */
var PropManager = (function () {
    function PropManager() {
        /**道具 */
        this.prop = null;
        /**道具数组 */
        this.propArray = [];
    }
    PropManager.getProp = function () {
        if (this._prop == null) {
            this._prop = new PropManager();
        }
        return this._prop;
    };
    /**创建道具 */
    PropManager.prototype.createProp = function (type, propX, propY) {
        this.prop = new Prop();
        this.prop.propInit(type);
        this.prop.x = propX;
        this.prop.y = propY;
        SceneManager.getInstance().currentScene.addChild(this.prop);
        this.propArray.push(this.prop);
    };
    PropManager._prop = null;
    return PropManager;
}());
__reflect(PropManager.prototype, "PropManager");
//# sourceMappingURL=PropManager.js.map