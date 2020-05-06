
cc.Class({
    extends: cc.Component,

    properties: {
        default:null,
        tips:cc.Sprite,
        loseBlood:cc.Sprite,
        bloodBar:cc.ProgressBar,

    },

    onLoad:function(){
        this.loseBlood.node.active = false;
        this.bloodBar.progress = 1 ;
    },
   

    start:function() {
        this.schedule(function(){
        this.bloodBar.progress -= 0.1;
        if (this.bloodBar.progress <= 0.5) {
            this.loseBlood.node.active = true;
        };
        if (this.bloodBar.progress <= 0) {
            cc.director.loadScene("finalScene2");
        };
        },1.5);
    },


    
});
