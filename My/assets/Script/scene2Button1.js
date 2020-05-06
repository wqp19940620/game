

cc.Class({
    extends: cc.Component,

    properties: {
       default:null,
       button1:cc.Button,
       button2:cc.Button,
       button3:cc.Button,
       button4:cc.Button,
       video2:cc.VideoPlayer,
    },

    onLoad:function(){
        this.video2.node.active = false;
    },

    start:function(){
        this.button1.node.on("click",this.playVideo2,this);
        
    },

    playVideo2:function(){
        this.video2.node.active = true;
        this.video2.play();
        this.scheduleOnce(function(){
            this.nextScene();
        },4.5)
    },

    nextScene:function()
    {
        cc.director.loadScene('Scene3');
    }

    
});
