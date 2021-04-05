/**
 * 守护者管理类
 */
class GuardianManager 
{
	private constructor() 
	{
	}
	private static _guardian:GuardianManager = null;
	public static getGuardian():GuardianManager
	{
		if(this._guardian == null)
		{
			this._guardian = new GuardianManager();
		}
		return this._guardian;
	}
	/**守护者 */
	public guardian:Guardian = null;
	/**添加守护者 */
	public addGuardian()
	{
		this.guardian = new Guardian();
		this.guardian.guardianInit();
		SceneManager.getInstance().currentScene.addChild(this.guardian);
	}
}