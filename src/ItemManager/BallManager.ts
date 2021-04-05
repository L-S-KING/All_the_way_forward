/**
 * 滚石
 * 滚木
 * 尖刺球
 * 管理类
 */
class BallManager 
{
	private constructor() 
	{
	}
	private static _ball:BallManager = null;
	public static getBall():BallManager
	{
		if(this._ball == null)
		{
			this._ball = new BallManager();
		}
		return this._ball;
	}
	/**滚石、滚木。尖刺球 */
	private ball:Ball = null;
	/**滚石、滚木。尖刺球 队列*/
	public ballArray:Ball[] = [];
	/**滚石、滚木、尖刺球 初始化 */
	public createBall(type:number, ballX:number, ballY:number)
	{
		this.ball = new Ball();
		this.ball.init(type);
		this.ball.x = ballX;
		this.ball.y = ballY;
		SceneManager.getInstance().currentScene.addChild(this.ball);
		this.ballArray.push(this.ball);
	}
	
}