
cc.Class({
    extends: cc.Component,

    properties: {
       default:null,
       again:cc.Button,
       //music:cc.AudioSource,
       //resume:cc.Button,
    },

    onLoad:function(){
        //this.again.node.on("click",this.jumptofirstScene,this);
        this.again.node.on("click",this.jumptoScene3,this);
    },

    start:function(){
        //this.music.play();
    },

    jumptoScene3:function(){
        cc.director.loadScene("Scene3");
    },

    // jumptofirstScene:function(){
    //     cc.director.loadScene("Scene1");
    // }
   
});
