var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 守护者管理类
 */
var GuardianManager = (function () {
    function GuardianManager() {
        /**守护者 */
        this.guardian = null;
    }
    GuardianManager.getGuardian = function () {
        if (this._guardian == null) {
            this._guardian = new GuardianManager();
        }
        return this._guardian;
    };
    /**添加守护者 */
    GuardianManager.prototype.addGuardian = function () {
        this.guardian = new Guardian();
        this.guardian.guardianInit();
        SceneManager.getInstance().currentScene.addChild(this.guardian);
    };
    GuardianManager._guardian = null;
    return GuardianManager;
}());
__reflect(GuardianManager.prototype, "GuardianManager");
//# sourceMappingURL=GuardianManager.js.map