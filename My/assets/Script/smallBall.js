cc.Class({
    extends: cc.Component,
 
    properties: {
        default:null,
        bigBall:cc.Sprite,
        smallBall:cc.Sprite,
        sight:cc.Sprite,

    },
 
    onLoad() {
        this.registerEvent();
    },
 
    registerEvent() {
        //touchstart 可以换成cc.Node.EventType.TOUCH_START
        this.bigBall.node.on('touchstart', this.onEventStart, this);
        //touchmove 可以换成cc.Node.EventType.TOUCH_MOVE
        this.bigBall.node.on('touchmove', this.onEventMove, this);
        //touchcancel 可以换成cc.Node.EventType.TOUCH_CANCEL
        this.bigBall.node.on('touchcancel', this.onEventCancel, this);
        //touchend 可以换成cc.Node.EventType.TOUCH_END
        this.bigBall.node.on('touchend', this.onEventEnd, this);
    },
 
    init(data) {
 
    },
 
    /**
     * 触摸开始
     * @param {*} event 
     */
    onEventStart(event) {
        //世界坐标
        //let worldPoint = event.getLocation();
        //console.log('start Event \n worldPoint=', worldPoint);
        // var pos = this.node.converToNodeSpace(worldPoint);
        // this.smallBall.node.setPosition(pos.x,pos.y);
 
    },
 
    /**
     * 触摸移动
     * @param {*} event 
     */
    onEventMove(event) {
        //世界坐标
        let worldPoint = event.getLocation();
        let pos = this.node.convertToNodeSpaceAR(worldPoint);
        console.log(pos);
        if(pos.x>90){
          pos.x = 90; 
        };
        if (pos.x<-90) {
            pos.x = -90;
        };
        if(pos.y>90){
          pos.y = 90; 
        };
        if (pos.y<-90) {
            pos.y = -90;
        };
        this.smallBall.node.setPosition(pos);

        this.sight.node.setPosition(4*pos.x,4*pos.y);
    },
 
    /**
     * 触摸
     * 当手指在目标节点区域外离开屏幕时
     * 比如说，触摸node的size是200x200。
     * 当超过这个区域时，就是触发这个事件
     * @param {*} event 
     */
    onEventCancel(event) {
        //世界坐标
        //let worldPoint = event.getLocation();
        //console.log('cancel Event \n worldPoint=', worldPoint);
        this.smallBall.node.setPosition(0,0);
    },
 
    /**
     * 当手指在目标节点区域内离开屏幕时
     * @param {*} event 
     */
    onEventEnd(event) {
        //世界坐标
        //let worldPoint = event.getLocation();
        //console.log('end Event \n worldPoint=', worldPoint);
        this.smallBall.node.setPosition(0,0);
    },
 
    update(dt) {
 
    },
 
    onDestroy() {
    }
});
