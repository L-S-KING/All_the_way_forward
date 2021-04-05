/**
 * 骷髅管理
 */
class BoneManager 
{
	private constructor() 
	{
	}
	private static _bone:BoneManager = null;
	public static getBone():BoneManager
	{
		if(this._bone == null)
		{
			this._bone = new BoneManager();
		}
		return this._bone;
	}
	/**骷髅 */
	private bone:Bone = null;
	/**骷髅队列 */
	public boneArray:Bone[] = [];
	/**骷髅初始化 */
	public boneInit(type:number, vectorX:number, boneX:number, boneY:number)
	{
		this.bone = new Bone();
		this.bone.init(type,vectorX);
		this.bone.x = boneX;
		this.bone.y = boneY;
		SceneManager.getInstance().currentScene.addChild(this.bone);
		this.boneArray.push(this.bone);
	}
}