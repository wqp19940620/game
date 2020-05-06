cc.Class({
    extends: cc.Component,
 
    properties: {
       prop_type: 1,
    },
 
   
 
    start:function () {
       
    },
 
 
    onCollisionEnter: function (other, self) {
        console.log("other.name = ", other.node.name, other.node.group, other.node.groupIndex);
        if (other.node.groupIndex === 1) { // 表示是PLAYER类型撞到了，道具拾取成功
            this.node.active = false;//消失
        }
    },
 
    // 碰撞持续
    onCollisionStay: function (other, self) {
 
    },
    // end 
 
    // 碰撞结束
    onCollisionExit: function (other, self) {
 
    },
 
    // update (dt) {},
});
