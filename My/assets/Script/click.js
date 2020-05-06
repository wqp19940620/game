
cc.Class({
    extends: cc.Component,

    properties: {
        default:null,
        myFire:cc.Sprite,
        button:cc.Button,
    },

    onLoad:function(){
        this.myFire.node.active = false;
    },

    start:function(){
        this.button.node.on("click",this.change,this);
    },

    change:function(){
        this.myFire.node.active = true;
        this.scheduleOnce(function(){
            this.myFire.node.active = false;
        },0.5);
    }
    
});
