var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PassManager = (function () {
    function PassManager() {
        /**是否通关 */
        this.passNum = 0;
    }
    PassManager.getPass = function () {
        if (this._pass == null) {
            this._pass = new PassManager();
        }
        return this._pass;
    };
    PassManager._pass = null;
    return PassManager;
}());
__reflect(PassManager.prototype, "PassManager");
//# sourceMappingURL=PassManager.js.map