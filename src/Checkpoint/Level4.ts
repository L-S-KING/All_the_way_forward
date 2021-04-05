class Level4 extends BaseScene
{
	public constructor() 
	{
		super();
		
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
	}
	public init()
	{
		BgManager.getBg().createBg(4);
		//添加土地块
		LandManager.getLand().createLand(1,800,315);

		LandManager.getLand().createLand(2,480,420);
		LandManager.getLand().createLand(2,1120,420);
		LandManager.getLand().createLand(2,2815,345);
		LandManager.getLand().createLand(2,3700,590);
		LandManager.getLand().createLand(2,3700,230);

		LandManager.getLand().createLand(3,2700,630);
		LandManager.getLand().createLand(3,2900,630);
		LandManager.getLand().createLand(3,3100,560);
		LandManager.getLand().createLand(3,3100,330);
		LandManager.getLand().createLand(3,3300,435);
		LandManager.getLand().createLand(3,3300,200);
		LandManager.getLand().createLand(3,5070,415);

		LandManager.getLand().createLand(4,1700,480);
		LandManager.getLand().createLand(4,2000,480);
		LandManager.getLand().createLand(4,2300,480);
		LandManager.getLand().createLand(4,2600,270);

		LandManager.getLand().createLand(5,1470,560);

		LandManager.getLand().createLand(6,640,660);
		LandManager.getLand().createLand(6,1920,660);

		//添加尖刺
		ThronManager.getThron().createThron(2,400,365);
		ThronManager.getThron().createThron(2,1200,365);
		ThronManager.getThron().createThron(3,3100,295);
		ThronManager.getThron().createThron(5,800,400);
		ThronManager.getThron().createThron(2,1850,600);
		ThronManager.getThron().createThron(2,2155,600);

		//
		BallManager.getBall().createBall(1,520,240);
		BallManager.getBall().createBall(1,3565,160);
		BallManager.getBall().createBall(1,3835,525);
		BallManager.getBall().createBall(2,1850,450);
		BallManager.getBall().createBall(2,2150,300);

		BoneManager.getBone().boneInit(1,1,2925,250);

		//添加云
		CloudManager.getCloud().addCloud(1,4150,250);
		CloudManager.getCloud().addCloud(1,4150,600);
		CloudManager.getCloud().addCloud(1,4350,350);
		CloudManager.getCloud().addCloud(1,4350,550);
		CloudManager.getCloud().addCloud(1,4650,350);
		CloudManager.getCloud().addCloud(1,4650,550);
		CloudManager.getCloud().addCloud(1,4850,250);
		CloudManager.getCloud().addCloud(1,4850,600);

		//添加星星
		StarManager.getStar().createStar(400,285);
		StarManager.getStar().createStar(1200,285);
		StarManager.getStar().createStar(2000,245);
		StarManager.getStar().createStar(2600,80);
		StarManager.getStar().createStar(3700,100);
		StarManager.getStar().createStar(3700,440);

		DiamondManager.getdiamond().createDiamond(5070,355);

		//添加攻击道具
		PropManager.getProp().createProp(1,800,190);
		PlayerManager.getPlayer().createPlayer(35,585);

		SceneManager.getInstance().currentScene.addChild(KeyboardControl.getKey());
		TouchKeyManager.getTouchKey().createTouchKey();
		
	}
}