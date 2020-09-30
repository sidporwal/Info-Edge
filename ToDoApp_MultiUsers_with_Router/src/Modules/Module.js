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

class Details{
    constructor(id,name, uName, eMail, phone){
        this.id=id;
        this.name=name;
        this.username=uName;
        this.email=eMail;
        this.phone=phone;
    }
}

export {Bucket, ToDo, Details};