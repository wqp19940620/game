// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        default:null,
        button:cc.Button,
        button2:cc.Button,
        video:cc.VideoPlayer,
        video2:cc.VideoPlayer,
    },

    onLoad:function(){
        this.video.node.active = false;
        this.video2.node.active = false;

    },

    start:function(){
        this.button.node.on("click",this.playVideo,this);
        this.button2.node.on("click",this.playVideo2,this);
        
    },

    playVideo:function(){
        this.video.node.active = true;
        this.video.play();
        this.scheduleOnce(function(){
            this.nextScene();
        },8.5);
    },

    playVideo2:function(){
        this.video2.node.active = true;
        this.video2.play();
        this.scheduleOnce(function(){
            this.nextScene2();
        },2.5);
    },

    nextScene:function(){
        cc.director.loadScene("finalScene");
    },

    nextScene2:function(){
        cc.director.loadScene("Scene4");
    },

    
});
