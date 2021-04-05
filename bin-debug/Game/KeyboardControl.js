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
/**键盘 */
var KeyboardControl = (function (_super) {
    __extends(KeyboardControl, _super);
    function KeyboardControl() {
        var _this = _super.call(this) || this;
        /**左键标志位 */
        _this.leftFlag = 0;
        /**右键标志位 */
        _this.rightFlag = 0;
        /**上键标志位 */
        _this.upFlag = 0;
        /**X键 */
        _this.xFlag = 0;
        /**玩家行走速度 */
        _this.speedX = 0;
        /**玩家跳跃速度 */
        _this.speedY = 0;
        /**玩家跳跃次数 */
        _this.jumpTimes = 2;
        /**x键是否按下 */
        _this.isX = false;
        /**键盘是否存在 */
        _this.isKey = false;
        /**玩家跳跃状态 */
        _this.jumpState = false;
        return _this;
    }
    KeyboardControl.getKey = function () {
        if (this._key == null) {
            this._key = new KeyboardControl();
        }
        return this._key;
    };
    //键盘控制
    KeyboardControl.prototype.control = function () {
        var a = this;
        document.addEventListener("keydown", function (evt) {
            if (!a.isKey) {
                return;
            }
            //左键
            if (evt.keyCode == 37) {
                a.leftFlag = 1;
            }
            //右键
            if (evt.keyCode == 39) {
                a.rightFlag = 1;
            }
            //上键
            if (evt.keyCode == 38) {
                if (a.upFlag == 0 && a.jumpTimes > 0) {
                    a.upFlag = 1;
                    a.speedY = 14;
                    SoundManager.instance.playEffect("jump_mp3");
                }
                a.jumpTimes -= 1;
            }
            //x键
            if (evt.keyCode == 88) {
                a.xFlag = 1;
                a.isX = true;
            }
        });
        document.addEventListener("keyup", function (evt) {
            if (!a.isKey) {
                return;
            }
            //左键
            if (evt.keyCode == 37) {
                a.leftFlag = 0;
                a.speedX = 0;
            }
            //右键
            if (evt.keyCode == 39) {
                a.rightFlag = 0;
                a.speedX = 0;
            }
            //上键
            if (evt.keyCode == 38) {
                a.upFlag = 0;
            }
            //x键
            if (evt.keyCode == 88) {
                a.xFlag = 0;
                a.isX = false;
            }
        });
    };
    //检测玩家是否开启跳跃状态
    KeyboardControl.prototype.jumpStateDetection = function () {
        if (this.upFlag == 1 && this.jumpState == false && this.jumpTimes > 0) {
            this.jumpState = true;
        }
    };
    KeyboardControl._key = null;
    return KeyboardControl;
}(BaseScene));
__reflect(KeyboardControl.prototype, "KeyboardControl");
//# sourceMappingURL=KeyboardControl.js.map