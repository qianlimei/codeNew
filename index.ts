/**
 * Created by qlm on 2015/8/3.
 */
interface pointer{
    x:number;
    y:number;
}

interface rect {
    width:number;
    height:number;
}


class Rect implements pointer,rect{
    x:number;
    y:number;
    width:number;
    height:number;
    space:number;

    constructor(pointer:pointer,rect:rect){
        this.x = pointer.x;
        this.y =pointer. y;
        this.width = rect.width;
        this.height = rect.height;
        this.space = this.width * this.height;
    }

    public calculateSpace():number{
        return this.width * this.height;
    }

    private getWidth():number{
        return this.width;
    }
}