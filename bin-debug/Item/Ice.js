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
 * 冰
 */
var Ice = (function (_super) {
    __extends(Ice, _super);
    function Ice() {
        var _this = _super.call(this) || this;
        /**冰 */
        _this.ice = null;
        /**冰的种类 */
        _this.iceType = 0;
        /**冰的速度 */
        _this.speed = 6;
        /**冰是否下落 */
        _this.isDown = false;
        _this.addEventListener(egret.Event.ENTER_FRAME, _this.update, _this);
        return _this;
    }
    /**冰的初始化 */
    Ice.prototype.iceInit = function (type) {
        this.iceType = type;
        this.ice = new egret.Bitmap();
        this.ice.texture = RES.getRes("ice" + this.iceType + "_png");
        this.ice.anchorOffsetX = this.ice.width * 0.5;
        this.ice.anchorOffsetY = this.ice.height * 0.5;
        this.addChild(this.ice);
    };
    Ice.prototype.update = function () {
        if (TouchKeyManager.getTouchKey().touchKey.stop.selected) {
            return;
        }
        if (this.isDown == true) {
            this.y += this.speed;
            for (var i = 0; i < LandManager.getLand().landArray.length; i++) {
                if (Math.abs(this.x - LandManager.getLand().landArray[i].x) < (this.ice.width + LandManager.getLand().landArray[i].land.width) * 0.5
                    && Math.abs(this.y - LandManager.getLand().landArray[i].y) < (this.ice.height + LandManager.getLand().landArray[i].land.height) * 0.5) {
                    //删除当前与墙碰撞子弹
                    if (this.parent != null) {
                        this.parent.removeChild(this);
                        this.isDown = false;
                    }
                }
            }
        }
        if (this.iceType == 1) {
            if (this.y < PlayerManager.getPlayer().player.y) {
                {
                    if (Math.abs(this.x - PlayerManager.getPlayer().player.x) < (this.ice.width + PlayerManager.getPlayer().player.player.width) * 0.5) {
                        this.isDown = true;
                    }
                }
            }
            if (Math.abs(this.x - PlayerManager.getPlayer().player.x) < (this.ice.width + PlayerManager.getPlayer().player.player.width) * 0.5
                && Math.abs(this.y - PlayerManager.getPlayer().player.y) < (this.ice.height + PlayerManager.getPlayer().player.player.height) * 0.5) {
                PlayerManager.getPlayer().isDeath = true;
            }
        }
        if (this.iceType == 2) {
            //玩家跳跃的碰撞检测
            if (KeyboardControl.getKey().jumpState == true && KeyboardControl.getKey().speedY <= 0) {
                if (this.y - PlayerManager.getPlayer().player.y < (PlayerManager.getPlayer().player.player.height + this.ice.height) * 0.5 + 5
                    && PlayerManager.getPlayer().player.y < this.y) {
                    if (PlayerManager.getPlayer().player.x + PlayerManager.getPlayer().player.player.width * 0.5 > this.x - this.ice.width * 0.5 + 10
                        && PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.player.width * 0.5 < this.x + this.ice.width * 0.5 - 10) {
                        // KeyboardControl.getKey().leftFlag = 0;
                        // KeyboardControl.getKey().rightFlag = 0;
                        // PlayerManager.getPlayer().player.x += 8;
                        PlayerManager.getPlayer().player.y = this.y - this.ice.height * 0.5 - PlayerManager.getPlayer().player.player.height * 0.5;
                        KeyboardControl.getKey().speedY = 0;
                        KeyboardControl.getKey().jumpState = false;
                        KeyboardControl.getKey().jumpTimes = 2;
                    }
                }
            }
            //玩家走出ice时下落
            if (PlayerManager.getPlayer().player.x + PlayerManager.getPlayer().player.player.width * 0.5 < this.x - this.ice.width * 0.5
                || PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.player.width * 0.5 > this.x + this.ice.width * 0.5) {
                KeyboardControl.getKey().jumpState = true;
            }
            var n = 10;
            //让玩家不可以从ice左右两侧穿过
            //ice左边界检测
            if (Math.abs((PlayerManager.getPlayer().player.x + PlayerManager.getPlayer().player.player.width * 0.5) - (this.x - this.ice.width * 0.5)) < (n + n) * 0.5
                && Math.abs(PlayerManager.getPlayer().player.y - this.y) < (PlayerManager.getPlayer().player.player.height + this.ice.height - n * 2) * 0.5
                && KeyboardControl.getKey().rightFlag == 1) {
                PlayerManager.getPlayer().player.x = this.x - this.ice.width * 0.5 - PlayerManager.getPlayer().player.player.width * 0.5;
            }
            else if (Math.abs((PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.player.width * 0.5) - (this.x + this.ice.width * 0.5)) < (n + n) * 0.5
                && Math.abs(PlayerManager.getPlayer().player.y - this.y) < (PlayerManager.getPlayer().player.player.height + this.ice.height - n * 2) * 0.5
                && KeyboardControl.getKey().leftFlag == 1) {
                PlayerManager.getPlayer().player.x = this.x + this.ice.width * 0.5 + PlayerManager.getPlayer().player.player.width * 0.5;
            }
            //ice下边界
            if (KeyboardControl.getKey().jumpState == true && KeyboardControl.getKey().speedY > 0) {
                if (PlayerManager.getPlayer().player.y - this.y < (PlayerManager.getPlayer().player.player.height + this.ice.height) * 0.5 + 10 && PlayerManager.getPlayer().player.y > this.y) {
                    if (PlayerManager.getPlayer().player.x + PlayerManager.getPlayer().player.player.width * 0.5 > this.x - this.ice.width * 0.5 + 10
                        && PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.player.width * 0.5 < this.x + this.ice.width * 0.5 - 10) {
                        KeyboardControl.getKey().speedY = -2;
                    }
                }
            }
        }
    };
    return Ice;
}(BaseScene));
__reflect(Ice.prototype, "Ice");
//# sourceMappingURL=Ice.js.map