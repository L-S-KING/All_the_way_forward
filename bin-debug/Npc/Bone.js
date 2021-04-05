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
 * 骷髅
 */
var Bone = (function (_super) {
    __extends(Bone, _super);
    function Bone() {
        var _this = _super.call(this) || this;
        /**骷髅 */
        _this.bone = null;
        /**骷髅种类 */
        _this.boneType = 0;
        /**骷髅序列帧 */
        _this.boneIndex = 1;
        /**箭 */
        _this.arrow = null;
        /**骷髅血量 */
        _this.boneBlood = 0;
        /**序列帧切换时间 */
        _this.frameTime = 0;
        /**骷髅的移动速度 */
        _this.boneSpeed = 1;
        /**骷髅的移动方向 */
        _this.boneVectorX = 0;
        return _this;
    }
    /**骷髅初始化 */
    Bone.prototype.init = function (type, vectorX) {
        this.boneType = type;
        this.bone = new egret.Bitmap();
        this.bone.texture = RES.getRes("npc" + this.boneType + +this.boneIndex + "_png");
        this.bone.anchorOffsetX = this.bone.width * 0.5;
        this.bone.anchorOffsetY = this.bone.height * 0.5;
        this.addChild(this.bone);
        this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
        this.boneBlood = 6;
        this.boneVectorX = vectorX;
    };
    /**
     * 骷髅的移动
     * 骷髅与玩家的碰撞检测
     *  */
    Bone.prototype.update = function () {
        if (TouchKeyManager.getTouchKey().touchKey.stop.selected) {
            return;
        }
        this.bone.scaleX = this.boneVectorX;
        this.x -= this.boneSpeed * this.boneVectorX;
        for (var i = 0; i < LandManager.getLand().landArray.length; i++) {
            //骷髅转头
            if (Math.abs((this.y + this.bone.height * 0.5) - (LandManager.getLand().landArray[i].y - LandManager.getLand().landArray[i].land.height * 0.5)) < (20 + 20) * 0.5
                && Math.abs(this.x - LandManager.getLand().landArray[i].x) < (this.bone.width + LandManager.getLand().landArray[i].land.width) * 0.5) {
                if (this.x < LandManager.getLand().landArray[i].x - LandManager.getLand().landArray[i].land.width * 0.5 + this.bone.width * 0.5) {
                    this.boneVectorX = -1;
                }
                if (this.x > LandManager.getLand().landArray[i].x + LandManager.getLand().landArray[i].land.width * 0.5 - this.bone.width * 0.5) {
                    this.boneVectorX = 1;
                }
            }
        }
        this.frameTime += 1;
        if (this.frameTime % 8 == 0) {
            //当玩家与骷髅相距小于320时，骷髅攻击玩家
            if (Math.abs(this.y - PlayerManager.getPlayer().player.y) < (this.bone.height + PlayerManager.getPlayer().player.player.height) * 0.5
                && Math.abs(this.x - PlayerManager.getPlayer().player.x) <= 320) {
                if (this.x - PlayerManager.getPlayer().player.x <= 320 && this.x - PlayerManager.getPlayer().player.x > 0) {
                    this.boneVectorX = 1;
                }
                if (this.x - PlayerManager.getPlayer().player.x >= -320 && this.x - PlayerManager.getPlayer().player.x < 0) {
                    this.boneVectorX = -1;
                }
                this.bone.scaleX = this.boneVectorX;
                this.boneSpeed = 0;
                this.boneIndex += 1;
                if (this.boneIndex >= 11) {
                    this.boneIndex = 4;
                }
                //第7帧创建箭
                if (this.boneIndex == 7) {
                    ArrowManager.getArrow().createArrow(this.x, this.y, this.boneVectorX);
                }
            }
            else {
                this.boneSpeed = 1;
                this.boneIndex += 1;
                if (this.boneIndex >= 3) {
                    this.boneIndex = 1;
                }
            }
        }
        this.bone.texture = RES.getRes("npc" + this.boneType + +this.boneIndex + "_png");
        //骷髅与玩家的碰撞检测
        if (Math.abs(this.x - PlayerManager.getPlayer().player.x) < (this.bone.width + PlayerManager.getPlayer().player.player.width - 10) * 0.5
            && Math.abs(this.y - PlayerManager.getPlayer().player.y) < (this.bone.height + PlayerManager.getPlayer().player.height) * 0.5) {
            //玩家死亡
            PlayerManager.getPlayer().isDeath = true;
        }
    };
    return Bone;
}(BaseScene));
__reflect(Bone.prototype, "Bone");
//# sourceMappingURL=Bone.js.map