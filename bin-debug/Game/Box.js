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
 * 碰撞盒
 */
var Box = (function (_super) {
    __extends(Box, _super);
    function Box() {
        var _this = _super.call(this) || this;
        /**矩形 */
        _this.rect = null;
        return _this;
    }
    /**碰撞盒初始化 */
    Box.prototype.init = function (width, height) {
        this.rect = new egret.Shape();
        this.rect.graphics.beginFill(0xfffff, 0);
        this.rect.graphics.drawRect(0, 0, width, height);
        this.rect.graphics.endFill();
        this.addChild(this.rect);
        this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
    };
    /**碰撞盒与玩家的碰撞检测 */
    Box.prototype.update = function () {
        //玩家跳跃的碰撞检测
        if (KeyboardControl.getKey().jumpState == true && KeyboardControl.getKey().speedY <= 0) {
            if (this.y - PlayerManager.getPlayer().player.y < (PlayerManager.getPlayer().player.player.height + this.rect.height) * 0.5 + 10 && PlayerManager.getPlayer().player.y < this.y) {
                if (PlayerManager.getPlayer().player.x + PlayerManager.getPlayer().player.player.width * 0.5 > this.x - this.rect.width * 0.5 + 10
                    && PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.player.width * 0.5 < this.x + this.rect.width * 0.5 - 10) {
                    PlayerManager.getPlayer().player.y = this.y - this.rect.height * 0.5 - PlayerManager.getPlayer().player.player.height * 0.5;
                    KeyboardControl.getKey().speedY = 0;
                    KeyboardControl.getKey().jumpState = false;
                    KeyboardControl.getKey().jumpTimes = 2;
                }
            }
        }
        //玩家走出方块时下落
        if (PlayerManager.getPlayer().player.x + PlayerManager.getPlayer().player.player.width * 0.5 < this.x - this.rect.width * 0.5
            || PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.player.width * 0.5 > this.x + this.rect.width * 0.5) {
            KeyboardControl.getKey().jumpState = true;
        }
        var n = 2;
        //让玩家不可以从盒子左右两侧穿过
        //盒子左边界检测
        if (Math.abs(PlayerManager.getPlayer().player.x - (this.x - this.rect.width * 0.5)) < (PlayerManager.getPlayer().player.player.width + n) * 0.5
            && Math.abs(PlayerManager.getPlayer().player.y - this.y) < (PlayerManager.getPlayer().player.player.height + this.rect.height) * 0.5
            && KeyboardControl.getKey().rightFlag == 1) {
            PlayerManager.getPlayer().player.x = this.x - this.rect.width * 0.5 - PlayerManager.getPlayer().player.player.width * 0.5;
        }
        else if (Math.abs(PlayerManager.getPlayer().player.x - (this.x + this.rect.width * 0.5)) < (PlayerManager.getPlayer().player.player.width + n) * 0.5
            && Math.abs(PlayerManager.getPlayer().player.y - this.y) < (PlayerManager.getPlayer().player.player.height + this.rect.height) * 0.5
            && KeyboardControl.getKey().leftFlag == 1) {
            PlayerManager.getPlayer().player.x = this.x + this.rect.width * 0.5 + PlayerManager.getPlayer().player.player.width * 0.5;
        }
        //盒子下边界
        if (KeyboardControl.getKey().jumpState == true && KeyboardControl.getKey().speedY > 0) {
            if (PlayerManager.getPlayer().player.y - this.y < (PlayerManager.getPlayer().player.player.height + this.rect.height) * 0.5 + 10 && PlayerManager.getPlayer().player.y > this.y) {
                if (PlayerManager.getPlayer().player.x + PlayerManager.getPlayer().player.player.width * 0.5 > this.x - this.rect.width * 0.5 + 10
                    && PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.player.width * 0.5 < this.x + this.rect.width * 0.5 - 10) {
                    KeyboardControl.getKey().speedY = -2;
                }
            }
        }
    };
    return Box;
}(BaseScene));
__reflect(Box.prototype, "Box");
//# sourceMappingURL=Box.js.map