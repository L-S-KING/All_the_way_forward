var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 骷髅管理
 */
var BoneManager = (function () {
    function BoneManager() {
        /**骷髅 */
        this.bone = null;
        /**骷髅队列 */
        this.boneArray = [];
    }
    BoneManager.getBone = function () {
        if (this._bone == null) {
            this._bone = new BoneManager();
        }
        return this._bone;
    };
    /**骷髅初始化 */
    BoneManager.prototype.boneInit = function (type, vectorX, boneX, boneY) {
        this.bone = new Bone();
        this.bone.init(type, vectorX);
        this.bone.x = boneX;
        this.bone.y = boneY;
        SceneManager.getInstance().currentScene.addChild(this.bone);
        this.boneArray.push(this.bone);
    };
    BoneManager._bone = null;
    return BoneManager;
}());
__reflect(BoneManager.prototype, "BoneManager");
//# sourceMappingURL=BoneManager.js.map