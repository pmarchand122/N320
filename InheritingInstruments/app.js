class Instrument {
    constructor(loudness, family, verb){
        this.loudness = loudness;
        this.family = family;
        this.verb = verb;
    }

    statement(){
        console.log(this.family + ' ' + this.verb + ' at ' + this.loudness)
    }
}

class Woodwind extends Instrument {
    constructor(family, verb){
        super("Quiet", family, verb)
    }
}

class Percussion extends Instrument {
    constructor(family, verb){
        super("Loud", family, verb)
    }
}

class StrinG extends Instrument{
    constructor(family, verb){
        super("Normal", family, verb)
    }
}



var Flute = new Woodwind("Woodwind", "blows")
var Drum = new Percussion("Percussion", "taps")
var Violin = new StrinG("String", "strums")

var Instruments = [Flute, Drum, Violin]

Instruments.forEach(instrument => {
    instrument.statement();
});