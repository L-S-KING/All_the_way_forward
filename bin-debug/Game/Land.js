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
var Land = (function (_super) {
    __extends(Land, _super);
    function Land() {
        var _this = _super.call(this) || this;
        /**土地块 */
        _this.land = null;
        /**土地块种类 */
        _this.landType = 0;
        _this.addEventListener(egret.Event.ENTER_FRAME, _this.update, _this);
        return _this;
    }
    /**土地块初始化 */
    Land.prototype.landInit = function (type) {
        this.landType = type;
        this.land = new egret.Bitmap();
        this.land.texture = RES.getRes("land" + this.landType + "_png");
        this.land.anchorOffsetX = this.land.width * 0.5;
        this.land.anchorOffsetY = this.land.height * 0.5;
        this.addChild(this.land);
    };
    /**土地块与玩家的碰撞检测 */
    Land.prototype.update = function () {
        //玩家跳跃的碰撞检测
        if (KeyboardControl.getKey().jumpState == true && KeyboardControl.getKey().speedY <= 0) {
            if (this.y - PlayerManager.getPlayer().player.y < (PlayerManager.getPlayer().player.player.height + this.land.height) * 0.5 + 5
                && PlayerManager.getPlayer().player.y < this.y) {
                if (PlayerManager.getPlayer().player.x + PlayerManager.getPlayer().player.player.width * 0.5 > this.x - this.land.width * 0.5 + 10
                    && PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.player.width * 0.5 < this.x + this.land.width * 0.5 - 10) {
                    if (this.landType <= 6) {
                        PlayerManager.getPlayer().player.y = this.y - this.land.height * 0.5 - PlayerManager.getPlayer().player.player.height * 0.5 + 10;
                    }
                    else {
                        PlayerManager.getPlayer().player.y = this.y - this.land.height * 0.5 - PlayerManager.getPlayer().player.player.height * 0.5;
                    }
                    KeyboardControl.getKey().speedY = 0;
                    KeyboardControl.getKey().jumpState = false;
                    KeyboardControl.getKey().jumpTimes = 2;
                }
            }
        }
        //玩家走出方块时下落
        if (PlayerManager.getPlayer().player.x + PlayerManager.getPlayer().player.player.width * 0.5 < this.x - this.land.width * 0.5
            || PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.player.width * 0.5 > this.x + this.land.width * 0.5) {
            KeyboardControl.getKey().jumpState = true;
        }
        var n = 10;
        //让玩家不可以从盒子左右两侧穿过
        //盒子左边界检测
        if (Math.abs((PlayerManager.getPlayer().player.x + PlayerManager.getPlayer().player.player.width * 0.5) - (this.x - this.land.width * 0.5)) < (n + n) * 0.5
            && Math.abs(PlayerManager.getPlayer().player.y - this.y) < (PlayerManager.getPlayer().player.player.height + this.land.height - n * 2) * 0.5
            && KeyboardControl.getKey().rightFlag == 1) {
            PlayerManager.getPlayer().player.x = this.x - this.land.width * 0.5 - PlayerManager.getPlayer().player.player.width * 0.5;
        }
        else if (Math.abs((PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.player.width * 0.5) - (this.x + this.land.width * 0.5)) < (n + n) * 0.5
            && Math.abs(PlayerManager.getPlayer().player.y - this.y) < (PlayerManager.getPlayer().player.player.height + this.land.height - n * 2) * 0.5
            && KeyboardControl.getKey().leftFlag == 1) {
            PlayerManager.getPlayer().player.x = this.x + this.land.width * 0.5 + PlayerManager.getPlayer().player.player.width * 0.5;
        }
        //盒子下边界
        if (KeyboardControl.getKey().jumpState == true && KeyboardControl.getKey().speedY > 0) {
            if (PlayerManager.getPlayer().player.y - this.y < (PlayerManager.getPlayer().player.player.height + this.land.height) * 0.5 + 10 && PlayerManager.getPlayer().player.y > this.y) {
                if (PlayerManager.getPlayer().player.x + PlayerManager.getPlayer().player.player.width * 0.5 > this.x - this.land.width * 0.5 + 10
                    && PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.player.width * 0.5 < this.x + this.land.width * 0.5 - 10) {
                    KeyboardControl.getKey().speedY = -2;
                }
            }
        }
    };
    return Land;
}(BaseScene));
__reflect(Land.prototype, "Land");
//# sourceMappingURL=Land.js.map