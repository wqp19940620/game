
cc.Class({
    extends: cc.Component,

    properties: {
        default:null,
        monster1:cc.Sprite,
        monster2:cc.Sprite,
        monster3:cc.Sprite,
        monster4:cc.Sprite,
    },

    onLoad:function(){
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = false;
    },

    start:function(){
         this.schedule(function(){
        var num = parseInt(Math.random()*5+5,10);
        console.log(num);
        switch(num){
            case 5:
                {
                    if (this.monster1.node.active == false) {
                        this.monster1.node.active = true;
                    };
                    if (this.monster2.node.active == false) {
                        this.monster2.node.active = true;
                    };

                };
                break;
            case 6:
                {
                    if (this.monster1.node.active == false) {
                        this.monster1.node.active = true;
                    };
                    if (this.monster3.node.active == false) {
                        this.monster3.node.active = true;
                    };

                };
                break;
            case 7:
                {
                    if (this.monster3.node.active == false) {
                        this.monster3.node.active = true;
                    };
                    if (this.monster2.node.active == false) {
                        this.monster2.node.active = true;
                    };
                };
                break;
            case 8:
                {
                    if (this.monster1.node.active == false) {
                        this.monster1.node.active = true;
                    };
                    if (this.monster2.node.active == false) {
                        this.monster2.node.active = true;
                    };
                    if (this.monster3.node.active == false) {
                        this.monster3.node.active = true;
                    };

                };
                break;
            case 9:
                {
                    if (this.monster1.node.active == false) {
                        this.monster1.node.active = true;
                    };
                    if (this.monster3.node.active == false) {
                        this.monster3.node.active = true;
                    };
                    if (this.monster4.node.active == false) {
                        this.monster4.node.active = true;
                    };

                };
                break;
            default:
                break;

        }
        },3);
        

    },

    
});
