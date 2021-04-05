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
 * 玩家
 * 玩家的移动
*/
var Player = (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super.call(this) || this;
        /**玩家人物 */
        _this.player = null;
        /**玩家序列帧 */
        _this.playerIndex = 1;
        /**玩家序列帧切换时间 */
        _this.frameTime = 0;
        /**玩家行走速度 */
        _this.playerSpeed = 4;
        /**玩家水平移动方向 */
        _this.vectorX = 1;
        _this.addEventListener(egret.Event.ENTER_FRAME, _this.update, _this);
        return _this;
    }
    /**玩家初始化 */
    Player.prototype.playerInit = function () {
        //创建玩家
        this.player = new egret.Bitmap();
        this.player.texture = RES.getRes("player" + this.playerIndex + "_png");
        this.player.anchorOffsetX = this.player.width * 0.5;
        this.player.anchorOffsetY = this.player.height * 0.5;
        this.addChild(this.player);
    };
    /**玩家的移动 */
    Player.prototype.update = function () {
        if (TouchKeyManager.getTouchKey().touchKey.stop.selected == true) {
            return;
        }
        //玩家死亡删除
        if (PlayerManager.getPlayer().isDeath == true) {
            if (this.parent != null) {
                this.parent.removeChild(this);
                SceneManager.getInstance().addScene(new FailScene());
            }
        }
        if (this.y >= 800) {
            PlayerManager.getPlayer().isDeath = true;
        }
        if (this.x <= this.player.width * 0.5) {
            this.x = this.player.width * 0.5;
        }
        if (this.x >= 1280 - this.player.width * 0.5) {
            this.x = 1280 - this.player.width * 0.5;
        }
        KeyboardControl.getKey().jumpStateDetection();
        //玩家跳跃
        if (KeyboardControl.getKey().jumpState == true) {
            this.y -= KeyboardControl.getKey().speedY;
            KeyboardControl.getKey().speedY -= 1;
        }
        //玩家行走
        //改变玩家朝向
        this.player.scaleX = this.vectorX;
        //当左键与右键同时按下玩家停止移动
        if (KeyboardControl.getKey().leftFlag == 1 && KeyboardControl.getKey().rightFlag == 1) {
            KeyboardControl.getKey().speedX = 0;
            this.playerIndex = 1;
            this.player.texture = RES.getRes("player" + this.playerIndex + "_png");
            this.frameTime = 0;
            KeyboardControl.getKey().speedX = 0;
        }
        //左右两键同时按下松开右键玩家向左移动
        if (KeyboardControl.getKey().leftFlag == 1 && KeyboardControl.getKey().rightFlag == 0) {
            this.vectorX = -1;
            KeyboardControl.getKey().speedX = this.playerSpeed;
            this.x += this.vectorX * KeyboardControl.getKey().speedX;
            //当玩家在向左向右走的时候切换序列帧
            this.frameTime += 1;
            if (this.frameTime % 8 == 0) {
                this.playerIndex += 1;
                if (this.playerIndex > 2) {
                    this.playerIndex = 1;
                }
                this.player.texture = RES.getRes("player" + this.playerIndex + "_png");
            }
        }
        //左右两键同时按下松开左键玩家向右移动
        if (KeyboardControl.getKey().leftFlag == 0 && KeyboardControl.getKey().rightFlag == 1) {
            this.vectorX = 1;
            KeyboardControl.getKey().speedX = this.playerSpeed;
            this.x += this.vectorX * KeyboardControl.getKey().speedX;
            //当玩家在向左向右走的时候切换序列帧
            this.frameTime += 1;
            if (this.frameTime % 8 == 0) {
                this.playerIndex += 1;
                if (this.playerIndex > 2) {
                    this.playerIndex = 1;
                }
                this.player.texture = RES.getRes("player" + this.playerIndex + "_png");
            }
        }
        //当玩家处于默认状态的时候确保玩家序列帧在第一帧
        if (KeyboardControl.getKey().leftFlag == 0 && KeyboardControl.getKey().rightFlag == 0) {
            this.playerIndex = 1;
            this.player.texture = RES.getRes("player" + this.playerIndex + "_png");
            this.frameTime = 0;
        }
    };
    return Player;
}(BaseScene));
__reflect(Player.prototype, "Player");
//# sourceMappingURL=Player.js.map