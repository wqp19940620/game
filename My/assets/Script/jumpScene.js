
cc.Class({
    extends: cc.Component,

    properties: {
        finalButton:cc.Button,
        windowsButton:cc.Button,
        //music:cc.AudioSource,
    },

    onLoad:function(){
        this.finalButton.node.on('click',this.jumptoStart,this);
        this.windowsButton.node.on("click",this.jumptonext,this);
    }, 

    start:function() {
        //this.music.play();
    },

    jumptoStart:function(){
        cc.director.loadScene("Scene3");
    },

    jumptonext:function(){
        cc.director.loadScene("pkScene");
    },


    
});
