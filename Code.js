


function DestroySetter  (mass, power, effectiveness, timeToDetonate) {
  this.mass = mass;
  this.power = power;
  this.effectiveness = effectiveness;
  this.timeToDetonate = timeToDetonate;


  this.floatPureDestruction = function() {
    let total = this.power * this.mass * this.effectiveness;
    return total;
  };




  this.destroyTrigger = (reseter,reshot) => {
      setIntervalX(function(){console.log("Detonate")},reseter,reshot);
    
}


}

function setIntervalX(callback, delay, repetitions) {
    var i = 1;
    var intervalID = window.setInterval(function () {

       callback();
       console.log("this was"+i+"\n");

       if (i++ === repetitions) {
           window.clearInterval(intervalID);
       }
    }, delay);
}

let destroy1 = new DestroySetter(300,75,0.5,2);
console.log(destroy1.floatPureDestruction());
destroy1.destroyTrigger(3000,10);

