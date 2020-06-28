function Dogs(name,color){
    this.name=name;
    this.color=color;
    this.numLegs=4;
}
var trrier = new Dogs("corki","green");
let ownProps=[];
for (let i in trrier){
    if (trrier.hasOwnProperty(i)){
        ownProps.push(i);
    }
}
console.log(ownProps);
trrier instanceof Dogs;//RETURN true.