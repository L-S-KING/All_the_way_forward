class BaseScene extends eui.Component
{
	public constructor() 
	{
		super();
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeSelf, this);
	}

	public update()
	{
		;
	}
	public removeSelf()
	{
		this.removeEventListener(egret.Event.ENTER_FRAME,this.update,this);
	}
	public id:number = 0;
}