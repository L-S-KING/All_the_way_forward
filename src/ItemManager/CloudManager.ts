class CloudManager {
	private constructor() 
	{
	}
	private static _cloud:CloudManager = null;
	public static getCloud():CloudManager
	{
		if(this._cloud == null)
		{
			this._cloud = new CloudManager();
		}
		return this._cloud;
	}
	/**云 */
	public cloud:Cloud = null;
	/**云队列 */
	public cloudArray:Cloud[] = [];
	/**添加云 */
	public addCloud(type:number, cloudX:number, cloudY:number)
	{
		this.cloud = new Cloud();
		this.cloud.cloudInit(type);
		this.cloud.x = cloudX;
		this.cloud.y = cloudY;
		SceneManager.getInstance().currentScene.addChild(this.cloud);
		this.cloudArray.push(this.cloud);
	}
}