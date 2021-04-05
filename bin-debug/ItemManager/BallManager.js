var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 滚石
 * 滚木
 * 尖刺球
 * 管理类
 */
var BallManager = (function () {
    function BallManager() {
        /**滚石、滚木。尖刺球 */
        this.ball = null;
        /**滚石、滚木。尖刺球 队列*/
        this.ballArray = [];
    }
    BallManager.getBall = function () {
        if (this._ball == null) {
            this._ball = new BallManager();
        }
        return this._ball;
    };
    /**滚石、滚木、尖刺球 初始化 */
    BallManager.prototype.createBall = function (type, ballX, ballY) {
        this.ball = new Ball();
        this.ball.init(type);
        this.ball.x = ballX;
        this.ball.y = ballY;
        SceneManager.getInstance().currentScene.addChild(this.ball);
        this.ballArray.push(this.ball);
    };
    BallManager._ball = null;
    return BallManager;
}());
__reflect(BallManager.prototype, "BallManager");
//# sourceMappingURL=BallManager.js.map