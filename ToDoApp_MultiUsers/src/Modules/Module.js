class Bucket{
    constructor(id){
        this.id=id;
        this.task=[];
    };
}

class ToDo{
    constructor(name,time){
        this.name=name;
        this.active=true;
        this.time= +new Date();
        this.checked=false;
    }
}

export {Bucket, ToDo};