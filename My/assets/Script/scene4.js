// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


var temp = 1;

cc.Class({
    extends: cc.Component,

    properties: {
       default:null,
       button:cc.Button,
       bg2:cc.Sprite,
       bg3:cc.Sprite,
       bg4:cc.Sprite,
       bg5:cc.Sprite,
    },

    onLoad:function(){
        this.bg2.node.active = false;
        this.bg3.node.active = false;
        this.bg4.node.active = false;
        this.bg5.node.active = false;

    },

    start:function(){
        this.button.node.on("click",this.change,this);
    },

    change:function(){
      ++temp;
        switch(temp){
            case 2:
               this.bg2.node.active = true;
               break;
            case 3:
               this.bg3.node.active = true;
               break;
            case 4:
               this.bg4.node.active = true;
               break;
            case 5:
               this.bg2.node.active = true;
               cc.director.loadScene("Scene5");
               break;
            default:
                break;
        }
    }

});
