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
    constructor(loudness){
        super(loudness, "Woodwind", "blows")
    }
}

class Percussion extends Instrument {
    constructor(loudness){
        super(loudness, "Percussion", "taps")
    }
}

class StrinG extends Instrument{
    constructor(loudness){
        super(loudness, "String", "strums")
    }
}



var Flute = new Woodwind("quiet")
var Flute2 = new Woodwind("loud")
var Drum = new Percussion("loud")
var Violin = new StrinG("normal")

var Instruments = [Flute, Flute2, Drum, Violin]

Instruments.forEach(instrument => {
    instrument.statement();
});