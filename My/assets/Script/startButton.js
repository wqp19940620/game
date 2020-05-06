



cc.Class({
    extends: cc.Component,

    properties: {
      default:null,
      type:cc.Node,
      startButton:cc.Button,
      video:cc.VideoPlayer,

    },

    
    onLoad:function(){
        this.video.node.active = false;
    },

    start:function() {
        this.startButton.node.on("click",this.playVideo,this);

    },

    playVideo:function(){
        this.video.node.active = true;
        this.video.play();
        this.scheduleOnce(function(){
            this.nextScene();
        },3.5);
      
    },

    nextScene:function(){
            cc.director.loadScene("Scene2");
    },

});
