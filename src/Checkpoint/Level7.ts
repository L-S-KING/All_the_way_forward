class Level7 extends BaseScene
{
	public constructor() 
	{
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
	}
	public init()
	{
		BgManager.getBg().createBg(7);
		//添加土地块
		LandManager.getLand().createLand(9,25,360);
		LandManager.getLand().createLand(9,5095,360);

		LandManager.getLand().createLand(10,650,25);
		LandManager.getLand().createLand(10,1950,25);
		LandManager.getLand().createLand(10,3250,25);
		LandManager.getLand().createLand(10,4550,25);
		LandManager.getLand().createLand(10,650,695);
		LandManager.getLand().createLand(10,1950,695);
		LandManager.getLand().createLand(10,3250,695);
		LandManager.getLand().createLand(10,4550,695);

		LandManager.getLand().createLand(7,75,425);
		LandManager.getLand().createLand(7,2575,350);
		LandManager.getLand().createLand(7,2575,500);
		LandManager.getLand().createLand(7,2775,350);
		LandManager.getLand().createLand(7,2775,500);
		LandManager.getLand().createLand(7,2875,300);
		LandManager.getLand().createLand(7,3425,75);
		LandManager.getLand().createLand(7,3375,125);
		LandManager.getLand().createLand(7,3325,175);
		LandManager.getLand().createLand(7,3525,175);
		LandManager.getLand().createLand(7,3625,75);
		LandManager.getLand().createLand(7,3675,125);
		LandManager.getLand().createLand(7,3725,175);
		LandManager.getLand().createLand(7,4500,250);
		LandManager.getLand().createLand(7,4750,350);
		LandManager.getLand().createLand(7,4500,550);
		LandManager.getLand().createLand(7,4125,545);
		LandManager.getLand().createLand(7,4175,595);
		LandManager.getLand().createLand(7,4225,645);
		LandManager.getLand().createLand(7,5045,250);
		LandManager.getLand().createLand(7,3075,500);

		LandManager.getLand().createLand(11,375,325);
		LandManager.getLand().createLand(11,875,200);
		LandManager.getLand().createLand(11,1125,200);
		LandManager.getLand().createLand(11,1125,550);
		LandManager.getLand().createLand(11,1575,200);
		LandManager.getLand().createLand(11,1575,550);
		LandManager.getLand().createLand(11,1825,200);
		LandManager.getLand().createLand(11,2125,500);
		LandManager.getLand().createLand(11,2375,500);

		LandManager.getLand().createLand(13,125,175);
		LandManager.getLand().createLand(13,475,525);
		LandManager.getLand().createLand(13,925,350);
		LandManager.getLand().createLand(13,1075,350);
		LandManager.getLand().createLand(13,1675,350);
		LandManager.getLand().createLand(13,1775,350);
		LandManager.getLand().createLand(13,4150,200);

		LandManager.getLand().createLand(14,225,250);
		LandManager.getLand().createLand(14,525,250);
		LandManager.getLand().createLand(14,375,450);
		LandManager.getLand().createLand(14,225,570);
		LandManager.getLand().createLand(14,725,275);
		LandManager.getLand().createLand(14,975,475);
		LandManager.getLand().createLand(14,1725,475);
		LandManager.getLand().createLand(14,1975,275);

		LandManager.getLand().createLand(15,2525,400);

		LandManager.getLand().createLand(16,725,520);
		LandManager.getLand().createLand(16,1975,525);
		LandManager.getLand().createLand(16,2225,200);
		LandManager.getLand().createLand(16,2825,375);
		LandManager.getLand().createLand(16,3125,520);

		//添加木板
		BoardManager.getBoard().createBoard(3,660,350);
		BoardManager.getBoard().createBoard(3,1340,365);
		BoardManager.getBoard().createBoard(5,3650,345);

		//添加尖刺
		ThronManager.getThron().createThron(5,2425,180);
		ThronManager.getThron().createThron(5,2675,250);
		ThronManager.getThron().createThron(5,3000,240);

		//添加冰锥
		IceManager.getIce().createIce(1,3175,385,12,80,0);

		//添加星星
		StarManager.getStar().createStar(125,575);
		StarManager.getStar().createStar(900,260);
		StarManager.getStar().createStar(1800,260);
		StarManager.getStar().createStar(2900,600);
		StarManager.getStar().createStar(3525,125);
		StarManager.getStar().createStar(5000,75);

		//添加钻石
		DiamondManager.getdiamond().createDiamond(3175,500);

		//添加激光
		LaserEmitterManager.getLaserEmitter().addLaserEmitter(1,3690,72);
		LaserEmitterManager.getLaserEmitter().addLaserEmitter(1,2040,550);
		LaserEmitterManager.getLaserEmitter().addLaserEmitter(1,2040,650);
		LaserEmitterManager.getLaserEmitter().addLaserEmitter(2,125,235);
		LaserEmitterManager.getLaserEmitter().addLaserEmitter(2,1200,260);
		LaserEmitterManager.getLaserEmitter().addLaserEmitter(2,1500,260);
		LaserEmitterManager.getLaserEmitter().addLaserEmitter(3,2125,80);
		LaserEmitterManager.getLaserEmitter().addLaserEmitter(3,4875,80);
		LaserEmitterManager.getLaserEmitter().addLaserEmitter(4,4770,620);


		PlayerManager.getPlayer().createPlayer(80,120);

		SceneManager.getInstance().currentScene.addChild(KeyboardControl.getKey());
		TouchKeyManager.getTouchKey().createTouchKey();
	}
}