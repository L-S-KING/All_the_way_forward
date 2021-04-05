var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 玩家管理
 */
var PlayerManager = (function () {
    function PlayerManager() {
        /**玩家 */
        this.player = null;
        /**玩家是否死亡 */
        this.isDeath = false;
    }
    PlayerManager.getPlayer = function () {
        if (this._player == null) {
            this._player = new PlayerManager();
        }
        return this._player;
    };
    /**创建玩家 */
    PlayerManager.prototype.createPlayer = function (playerX, playerY) {
        this.player = new Player();
        this.player.playerInit();
        this.player.x = playerX;
        this.player.y = playerY;
        SceneManager.getInstance().currentScene.addChild(this.player);
    };
    PlayerManager._player = null;
    return PlayerManager;
}());
__reflect(PlayerManager.prototype, "PlayerManager");
//# sourceMappingURL=PlayerManager.js.map