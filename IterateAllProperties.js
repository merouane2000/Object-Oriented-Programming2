function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];

  for(let i in beagle){
      if (beagle.hasOwnProperty(i)){
          ownProps.push(i);
      }
      else{
          prototypeProps.push(i);
      }
  }
console.log(ownProps); // return [ 'name' ].
console.log(prototypeProps); // return [ 'numLegs' ].