var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 界面管理
 */
var SceneManager = (function () {
    function SceneManager() {
        /**当前显示对象 */
        this.currentScene = null;
    }
    /**界面管理单例 */
    SceneManager.getInstance = function () {
        if (this.instance == null) {
            this.instance = new SceneManager();
        }
        return this.instance;
    };
    /**设置当前可用现实对象 */
    SceneManager.prototype.setRootScene = function (root) {
        this.rootScene = root;
    };
    /**添加显示对象 */
    SceneManager.prototype.addScene = function (scene) {
        if (this.currentScene != null) {
            //删除原来的显示对象
            this.rootScene.removeChild(this.currentScene);
            //将原来的显示对象置空
            this.currentScene = null;
        }
        //添加到舞台
        if (this.rootScene != null) {
            this.currentScene = scene;
            this.rootScene.addChild(scene);
        }
    };
    SceneManager.prototype.update = function () {
        if (this.currentScene != null) {
            this.currentScene.update();
        }
    };
    //单例
    SceneManager.instance = null;
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");
//# sourceMappingURL=SceneManager.js.map