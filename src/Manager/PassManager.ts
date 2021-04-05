class PassManager 
{
	private constructor() 
	{
	}
	private static _pass:PassManager = null;
	public static getPass():PassManager
	{
		if(this._pass == null)
		{
			this._pass = new PassManager();
		}
		return  this._pass;
	}
	/**是否通关 */
	public passNum:number = 0;
}