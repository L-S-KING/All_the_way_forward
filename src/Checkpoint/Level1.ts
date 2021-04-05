class Level1 extends BaseScene
{
	public constructor() 
	{
		super();
		this.id = 1;
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
	}
	//初始化
	public init()
	{
		KeyboardControl.getKey().isKey = true;
		//添加背景
		BgManager.getBg().createBg(1);
		//添加土地块
		LandManager.getLand().createLand(1,4360,300);

		LandManager.getLand().createLand(3,815,250);
		LandManager.getLand().createLand(3,1160,440);
		LandManager.getLand().createLand(3,1405,390);
		LandManager.getLand().createLand(3,1650,335);

		LandManager.getLand().createLand(4,1860,380);
		LandManager.getLand().createLand(4,2460,380);
		LandManager.getLand().createLand(4,5065,380);

		LandManager.getLand().createLand(5,640,460);
		LandManager.getLand().createLand(5,988,460);

		LandManager.getLand().createLand(6,640,560);
		LandManager.getLand().createLand(6,1920,560);
		LandManager.getLand().createLand(6,3200,560);
		LandManager.getLand().createLand(6,4480,560);
		//添加星星
		StarManager.getStar().createStar(210,80);
		StarManager.getStar().createStar(815,100);
		StarManager.getStar().createStar(987,400);
		StarManager.getStar().createStar(815,500);
		StarManager.getStar().createStar(2160,360);
		StarManager.getStar().createStar(2000,390);
		StarManager.getStar().createStar(2310,390);
		//添加地刺
		ThronManager.getThron().createThron(2,210,505);
		ThronManager.getThron().createThron(3,560,500);
		ThronManager.getThron().createThron(1,988,405);
		ThronManager.getThron().createThron(1,815,225);
		ThronManager.getThron().createThron(5,1290,280);
		ThronManager.getThron().createThron(5,1530,250);
		ThronManager.getThron().createThron(2,2010,505);
		ThronManager.getThron().createThron(2,2300,505);
		ThronManager.getThron().createThron(5,4624,15);
		ThronManager.getThron().createThron(3,5080,250);
		//添加滚木/滚石/尖刺球
		BallManager.getBall().createBall(2,815,460);
		BallManager.getBall().createBall(3,2550,460);
		BallManager.getBall().createBall(3,4960,460);
		//添加云
		CloudManager.getCloud().addCloud(1,480,200);
		CloudManager.getCloud().addCloud(1,300,200);
		//添加钻石
		DiamondManager.getdiamond().createDiamond(4600,100);

		//添加玩家
		PlayerManager.getPlayer().createPlayer(35,485);

		//添加木板
		BoardManager.getBoard().createBoard(1,2170,440);
		BoardManager.getBoard().createBoard(1,4850,440);

		SceneManager.getInstance().currentScene.addChild(KeyboardControl.getKey());
		TouchKeyManager.getTouchKey().createTouchKey();
		// this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
	}
}