/**键盘 */
class KeyboardControl extends BaseScene{
	public constructor() 
	{
		super();
	}
	public static _key:KeyboardControl = null;
	public static getKey():KeyboardControl
	{
		if(this._key == null)
		{
			this._key = new KeyboardControl();
		}
		return this._key;
	}
	
	/**左键标志位 */
	public leftFlag:number = 0;
	/**右键标志位 */
	public rightFlag:number = 0;
	/**上键标志位 */
	public upFlag:number = 0;
	/**X键 */
	public xFlag:number = 0;
	/**玩家行走速度 */
	public speedX:number = 0;
	/**玩家跳跃速度 */
	public speedY:number = 0;
	
	/**玩家跳跃次数 */
	public jumpTimes:number = 2;
	/**x键是否按下 */
	public isX:boolean = false;
	/**键盘是否存在 */
	public isKey:boolean = false;
	//键盘控制
	public control()
	{
		var a = this;
		document.addEventListener("keydown",function(evt:any)
		{
			if(!a.isKey)
			{
				return;
			}
			//左键
			if(evt.keyCode == 37)
			{
				a.leftFlag = 1;
			}
			//右键
			if(evt.keyCode == 39)
			{
				a.rightFlag = 1;
			}
			//上键
			if(evt.keyCode == 38)
			{
				if(a.upFlag == 0 && a.jumpTimes > 0)
				{
					a.upFlag = 1;
					a.speedY = 14;
					SoundManager.instance.playEffect("jump_mp3");
				}
				a.jumpTimes -= 1;
			}
			//x键
			if(evt.keyCode == 88)
			{
				a.xFlag = 1;
				a.isX = true;
			}
		})
		document.addEventListener("keyup",function(evt:any)
		{
			if(!a.isKey)
			{
				return;
			}
			//左键
			if(evt.keyCode == 37 )
			{
				a.leftFlag = 0;
				a.speedX = 0;
			}
			//右键
			if(evt.keyCode == 39)
			{
				a.rightFlag = 0;
				a.speedX = 0;
			}
			//上键
			if(evt.keyCode == 38)
			{
				a.upFlag = 0;
			}
			//x键
			if(evt.keyCode == 88)
			{
				a.xFlag = 0;
				a.isX = false;
			}
		})
	}
	/**玩家跳跃状态 */
	public jumpState:boolean = false;
	//检测玩家是否开启跳跃状态
	public jumpStateDetection()
	{
		if(this.upFlag == 1 && this.jumpState == false && this.jumpTimes > 0)
		{
			this.jumpState = true;
		}
	}
	
}