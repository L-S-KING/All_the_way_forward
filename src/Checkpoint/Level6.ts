class Level6 extends BaseScene
{
	public constructor() 
	{
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
	}
	public init()
	{
		BgManager.getBg().createBg(6);
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
		LandManager.getLand().createLand(7,175,545);
		LandManager.getLand().createLand(7,4000,525);
		LandManager.getLand().createLand(7,4200,525);
		LandManager.getLand().createLand(7,4400,525);
		LandManager.getLand().createLand(7,4600,525);
		LandManager.getLand().createLand(7,4800,525);
		LandManager.getLand().createLand(7,5000,370);

		LandManager.getLand().createLand(8,600,100);

		LandManager.getLand().createLand(11,2025,325);
		LandManager.getLand().createLand(11,2175,175);
		LandManager.getLand().createLand(11,4675,220);

		LandManager.getLand().createLand(12,300,175);
		LandManager.getLand().createLand(12,350,495);
		LandManager.getLand().createLand(12,550,325);
		LandManager.getLand().createLand(12,750,325);
		LandManager.getLand().createLand(12,1000,325);
		LandManager.getLand().createLand(12,1250,325);
		LandManager.getLand().createLand(12,1350,495);
		LandManager.getLand().createLand(12,1550,175);
		LandManager.getLand().createLand(12,2900,520);
		LandManager.getLand().createLand(12,3250,445);
		LandManager.getLand().createLand(12,3500,245);
		LandManager.getLand().createLand(12,3750,445);
		LandManager.getLand().createLand(12,4050,220);
		LandManager.getLand().createLand(12,4250,220);
		LandManager.getLand().createLand(12,4450,220);

		LandManager.getLand().createLand(13,575,595);
		LandManager.getLand().createLand(13,1775,545);
		LandManager.getLand().createLand(13,1775,175);
		LandManager.getLand().createLand(13,2225,325);
		LandManager.getLand().createLand(13,2425,175);
		LandManager.getLand().createLand(13,2425,525);
		LandManager.getLand().createLand(13,2675,375);
		LandManager.getLand().createLand(13,2875,225);

		LandManager.getLand().createLand(14,425,250);
		LandManager.getLand().createLand(14,475,570);
		LandManager.getLand().createLand(14,875,250);
		LandManager.getLand().createLand(14,875,450);
		LandManager.getLand().createLand(14,1225,570);
		LandManager.getLand().createLand(14,1675,250);
		LandManager.getLand().createLand(14,1875,570);
		LandManager.getLand().createLand(14,2325,250);
		LandManager.getLand().createLand(14,2325,450);
		LandManager.getLand().createLand(14,2775,300);
		LandManager.getLand().createLand(14,2775,445);
		LandManager.getLand().createLand(14,2975,150);

		LandManager.getLand().createLand(15,3125,545);
		LandManager.getLand().createLand(15,3375,345);
		LandManager.getLand().createLand(15,3625,345);

		LandManager.getLand().createLand(16,225,470);
		LandManager.getLand().createLand(16,1125,200);
		LandManager.getLand().createLand(16,1875,200);
		LandManager.getLand().createLand(16,3925,195);

		//添加星星
		StarManager.getStar().createStar(425,545);
		StarManager.getStar().createStar(1070,230);
		StarManager.getStar().createStar(1800,80);
		StarManager.getStar().createStar(2265,220);
		StarManager.getStar().createStar(2915,80);
		StarManager.getStar().createStar(4900,80);

		//添加钻石
		DiamondManager.getdiamond().createDiamond(4000,90);

		//添加冰锥
		IceManager.getIce().createIce(1,1973,365,11,30,0);
		IceManager.getIce().createIce(1,4032,260,9,100,0);
		IceManager.getIce().createIce(1,3150,65,10,80,0);

		PlayerManager.getPlayer().createPlayer(75,375);

		LaserEmitterManager.getLaserEmitter().addLaserEmitter(1,290,390);
		LaserEmitterManager.getLaserEmitter().addLaserEmitter(1,690,100);
		LaserEmitterManager.getLaserEmitter().addLaserEmitter(1,1190,175);
		LaserEmitterManager.getLaserEmitter().addLaserEmitter(1,1940,570);
		LaserEmitterManager.getLaserEmitter().addLaserEmitter(1,1940,225)
		LaserEmitterManager.getLaserEmitter().addLaserEmitter(2,120,85);
		
		LaserEmitterManager.getLaserEmitter().addLaserEmitter(2,1025,385);
		LaserEmitterManager.getLaserEmitter().addLaserEmitter(2,1575,235);
		LaserEmitterManager.getLaserEmitter().addLaserEmitter(3,4100,80);
		LaserEmitterManager.getLaserEmitter().addLaserEmitter(3,4300,80);
		LaserEmitterManager.getLaserEmitter().addLaserEmitter(3,4500,80);
		LaserEmitterManager.getLaserEmitter().addLaserEmitter(4,1550,620);
		LaserEmitterManager.getLaserEmitter().addLaserEmitter(4,4170,620);
		LaserEmitterManager.getLaserEmitter().addLaserEmitter(4,4770,620);

		SceneManager.getInstance().currentScene.addChild(KeyboardControl.getKey());
		TouchKeyManager.getTouchKey().createTouchKey();
	}
}