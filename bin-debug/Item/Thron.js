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
 * 地刺
 */
var Thron = (function (_super) {
    __extends(Thron, _super);
    function Thron() {
        var _this = _super.call(this) || this;
        /**地刺 */
        _this.thron = null;
        /**地刺种类 */
        _this.thronType = 0;
        /**地刺序列帧 */
        _this.thronIndex = 4;
        /**序列帧切换时间 */
        _this.frameTime = 0;
        /**停留时间 */
        _this.waitTime = 100;
        /**地刺的装态 */
        _this.state = 0;
        /**缓动时间 */
        _this.time = 0;
        /**地刺是否下落 */
        _this.isDown = true;
        /**地刺左右移动 */
        _this.goTime = 0;
        /**地刺是否左右移动 */
        _this.isGo = true;
        return _this;
    }
    /**地刺初始化 */
    Thron.prototype.init = function (type) {
        this.thronType = type;
        this.thron = new egret.Bitmap();
        this.thron.texture = RES.getRes("thron" + this.thronType + this.thronIndex + "_png");
        this.addChild(this.thron);
        this.thron.anchorOffsetX = this.thron.width * 0.5;
        this.thron.anchorOffsetY = this.thron.height * 0.5;
        this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
    };
    /**
     * 地刺的升降
     * 地刺与玩家的碰撞检测
     *  */
    Thron.prototype.update = function () {
        if (TouchKeyManager.getTouchKey().touchKey.stop.selected) {
            return;
        }
        if (this.thronType == 4) {
            this.thronIndex = 4;
            if (this.isGo == true) {
                this.x += 2;
                this.goTime += 1;
                if (this.goTime >= 100) {
                    this.isGo = false;
                }
            }
            if (this.isGo == false) {
                this.x -= 2;
                this.goTime -= 1;
                if (this.goTime <= 0) {
                    this.isGo = true;
                }
            }
        }
        if (this.thronType == 5) {
            this.thronIndex = 4;
            if (this.isDown == true) {
                this.y += 2;
                this.time += 1;
                if (this.time >= 100) {
                    this.isDown = false;
                }
            }
            if (this.isDown == false) {
                this.y -= 2;
                this.time -= 1;
                {
                    if (this.time <= 0) {
                        this.isDown = true;
                    }
                }
            }
        }
        if (this.thronType == 1 || this.thronType == 2 || this.thronType == 3) {
            this.frameTime += 1;
            //地刺下降
            if (this.frameTime % 10 == 0 && this.state == 1) {
                this.thronIndex -= 1;
                if (this.thronIndex <= 1) {
                    this.thronIndex = 1;
                }
            }
            //地刺上升
            if (this.frameTime % 10 == 0 && this.state == 0) {
                this.thronIndex += 1;
                if (this.thronIndex >= 4) {
                    this.thronIndex = 4;
                }
            }
            //地刺在地面下停留
            if (this.state == 1 && this.thronIndex == 1) {
                this.waitTime += 1;
                if (this.waitTime >= 100) {
                    this.state = 0;
                    this.waitTime = 100;
                }
            }
            //地刺在地面上停留
            if (this.state == 0 && this.thronIndex == 4) {
                this.waitTime -= 1;
                if (this.waitTime <= 0) {
                    this.state = 1;
                    this.waitTime = 0;
                }
            }
            this.thron.texture = RES.getRes("thron" + this.thronType + this.thronIndex + "_png");
        }
        //地刺与玩家的碰撞检测
        if (this.thronType == 5 || this.thronType == 4) {
            if (Math.abs(this.x - PlayerManager.getPlayer().player.x) < (this.thron.width + PlayerManager.getPlayer().player.player.width - 20) * 0.5
                && Math.abs(this.y - PlayerManager.getPlayer().player.y) < (this.thron.height + PlayerManager.getPlayer().player.player.height) * 0.5) {
                PlayerManager.getPlayer().isDeath = true;
            }
        }
        else if (this.thronIndex != 1) {
            if (Math.abs(this.x - PlayerManager.getPlayer().player.x) < (this.thron.width + PlayerManager.getPlayer().player.player.width - 20) * 0.5
                && Math.abs(this.y - PlayerManager.getPlayer().player.y) < (this.thron.height + PlayerManager.getPlayer().player.player.height) * 0.5) {
                PlayerManager.getPlayer().isDeath = true;
            }
        }
    };
    return Thron;
}(BaseScene));
__reflect(Thron.prototype, "Thron");
//# sourceMappingURL=Thron.js.map