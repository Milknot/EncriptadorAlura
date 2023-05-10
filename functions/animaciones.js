class Animation {
    constructor(data) {
        this.type = data.type
        this.duration = data.duration | null
    }
}

class Parameter {
    density
    velocity
    animation = new Animation
    aspect
    ratio
}


class Particles {
    constructor(params) {

    }

    createParticles(params) {

    }


}

import { animationsConfig } from './configs.js';

function loadModule() {
    console.log("ejecutando")
    console.log(animationsConfig.chars)
    particlesJS("particles-js", animationsConfig.chars);
}
  
loadModule();



