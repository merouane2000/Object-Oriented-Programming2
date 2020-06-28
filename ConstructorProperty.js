function Dog (name){
    this.name=name ;
}

joinDogFraernityt=(candidate)=>{
    if (candidate.constructor === Dog ){
        return true;
    }
    else {
        return false;
    }
}
Dog.prototype={
    numLegs:4,
    eat : function(){
        console.log("um um um");
    },
    describe : function(){
        console.log ("my mane is " + this.name );
    }
}