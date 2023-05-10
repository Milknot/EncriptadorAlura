export let animationsConfig = {
    chars: {
        "autoPlay": true,
        "background": {
            "color": {
                "value": "#0d47a1"
            },
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover",
            "opacity": 1
        },
        "backgroundMask": {
            "composite": "destination-out",
            "cover": {
                "color": {
                    "value": "#fff"
                },
                "opacity": 1
            },
            "enable": false
        },
        "defaultThemes": {},
        "delay": 3,
        "fullScreen": {
            "enable": true,
            "zIndex": 1
        },
        "detectRetina": true,
        "duration": 0,
        "fpsLimit": 60,
        "interactivity": {
            "detectsOn": "window",
            "events": {
                "onClick": {
                    "enable": true,
                    "mode": "push"
                },
                "onDiv": {
                    "selectors": {},
                    "enable": false,
                    "mode": {},
                    "type": "circle"
                },
                "onHover": {
                    "enable": true,
                    "mode": "repulse",
                    "parallax": {
                        "enable": false,
                        "force": 60,
                        "smooth": 10
                    }
                },
                "resize": {
                    "delay": 0.5,
                    "enable": true
                }
            },
            "modes": {
                "attract": {
                    "distance": 200,
                    "duration": 0.4,
                    "easing": "ease-out-quad",
                    "factor": 1,
                    "maxSpeed": 50,
                    "speed": 1
                },
                "bounce": {
                    "distance": 200
                },
                "bubble": {
                    "distance": 400,
                    "duration": 2,
                    "mix": false,
                    "opacity": 0.8,
                    "size": 40,
                    "divs": {
                        "distance": 200,
                        "duration": 0.4,
                        "mix": false,
                        "selectors": {}
                    }
                },
                "connect": {
                    "distance": 80,
                    "links": {
                        "opacity": 0.5
                    },
                    "radius": 60
                },
                "grab": {
                    "distance": 400,
                    "links": {
                        "blink": false,
                        "consent": false,
                        "opacity": 1
                    }
                },
                "push": {
                    "default": true,
                    "groups": {},
                    "quantity": 4
                },
                "remove": {
                    "quantity": 2
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4,
                    "factor": 100,
                    "speed": 1,
                    "maxSpeed": 50,
                    "easing": "ease-out-quad",
                    "divs": {
                        "distance": 200,
                        "duration": 0.4,
                        "factor": 100,
                        "speed": 1,
                        "maxSpeed": 50,
                        "easing": "ease-out-quad",
                        "selectors": {}
                    }
                },
                "slow": {
                    "factor": 3,
                    "radius": 200
                },
                "trail": {
                    "delay": 1,
                    "pauseOnStop": false,
                    "quantity": 1
                },
                "light": {
                    "area": {
                        "gradient": {
                            "start": {
                                "value": "#ffffff"
                            },
                            "stop": {
                                "value": "#000000"
                            }
                        },
                        "radius": 1000
                    },
                    "shadow": {
                        "color": {
                            "value": "#000000"
                        },
                        "length": 2000
                    }
                }
            }
        },
        "manualParticles": {},
        "particles": {
            "bounce": {
                "horizontal": {
                    "random": {
                        "enable": false,
                        "minimumValue": 0.1
                    },
                    "value": 1
                },
                "vertical": {
                    "random": {
                        "enable": false,
                        "minimumValue": 0.1
                    },
                    "value": 1
                }
            },
            "collisions": {
                "absorb": {
                    "speed": 2
                },
                "bounce": {
                    "horizontal": {
                        "random": {
                            "enable": false,
                            "minimumValue": 0.1
                        },
                        "value": 1
                    },
                    "vertical": {
                        "random": {
                            "enable": false,
                            "minimumValue": 0.1
                        },
                        "value": 1
                    }
                },
                "enable": false,
                "mode": "bounce",
                "overlap": {
                    "enable": true,
                    "retries": 0
                }
            },
            "color": {
                "value": "#ffffff",
                "animation": {
                    "h": {
                        "count": 5,
                        "enable": false,
                        "offset": 0,
                        "speed": 1,
                        "decay": 0,
                        "sync": true
                    },
                    "s": {
                        "count": 5,
                        "enable": false,
                        "offset": 0,
                        "speed": 1,
                        "decay": 0,
                        "sync": true
                    },
                    "l": {
                        "count": 5,
                        "enable": false,
                        "offset": 0,
                        "speed": 1,
                        "decay": 0,
                        "sync": true
                    }
                }
            },
            "groups": {},
            "move": {
                "angle": {
                    "offset": 0,
                    "value": 90
                },
                "attract": {
                    "distance": 200,
                    "enable": false,
                    "rotate": {
                        "x": 600,
                        "y": 1200
                    }
                },
                "center": {
                    "x": 50,
                    "y": 50,
                    "mode": "percent",
                    "radius": 0
                },
                "decay": 0,
                "distance": {},
                "direction": "none",
                "drift": 0,
                "enable": true,
                "gravity": {
                    "acceleration": 9.81,
                    "enable": false,
                    "inverse": false,
                    "maxSpeed": 50
                },
                "path": {
                    "clamp": true,
                    "delay": {
                        "random": {
                            "enable": false,
                            "minimumValue": 0
                        },
                        "value": 0
                    },
                    "enable": false,
                    "options": {}
                },
                "outModes": {
                    "default": "out",
                    "bottom": "out",
                    "left": "out",
                    "right": "out",
                    "top": "out"
                },
                "random": false,
                "size": false,
                "speed": 2,
                "spin": {
                    "acceleration": 0,
                    "enable": false
                },
                "straight": false,
                "trail": {
                    "enable": false,
                    "length": 10,
                    "fill": {}
                },
                "vibrate": false,
                "warp": false
            },
            "number": {
                "density": {
                    "enable": true,
                    "width": 1920,
                    "height": 1080
                },
                "limit": 0,
                "value": 80
            },
            "opacity": {
                "random": {
                    "enable": false,
                    "minimumValue": 0.1
                },
                "value": {
                    "min": 0.1,
                    "max": 0.5
                },
                "animation": {
                    "count": 0,
                    "enable": true,
                    "speed": 1,
                    "decay": 0,
                    "sync": false,
                    "destroy": "none",
                    "startValue": "random",
                    "minimumValue": 0.1
                }
            },
            "reduceDuplicates": false,
            "shadow": {
                "blur": 0,
                "color": {
                    "value": "#000"
                },
                "enable": false,
                "offset": {
                    "x": 0,
                    "y": 0
                }
            },
            "shape": {
                "options": {
                    "character": {
                        "value": {
                            "0": "t",
                            "1": "s",
                            "2": "P",
                            "3": "a",
                            "4": "r",
                            "5": "t",
                            "6": "i",
                            "7": "c",
                            "8": "l",
                            "9": "e",
                            "10": "s"
                        },
                        "font": "Verdana",
                        "style": "",
                        "weight": "400",
                        "fill": true
                    },
                    "char": {
                        "value": {
                            "0": "t",
                            "1": "s",
                            "2": "P",
                            "3": "a",
                            "4": "r",
                            "5": "t",
                            "6": "i",
                            "7": "c",
                            "8": "l",
                            "9": "e",
                            "10": "s"
                        },
                        "font": "Verdana",
                        "style": "",
                        "weight": "400",
                        "fill": true
                    }
                },
                "type": "char"
            },
            "size": {
                "random": {
                    "enable": false,
                    "minimumValue": 1
                },
                "value": 16,
                "animation": {
                    "count": 0,
                    "enable": false,
                    "speed": 10,
                    "decay": 0,
                    "sync": false,
                    "destroy": "none",
                    "startValue": "random",
                    "minimumValue": 10
                }
            },
            "stroke": {
                "width": 1,
                "color": {
                    "value": "#ffffff",
                    "animation": {
                        "h": {
                            "count": 0,
                            "enable": false,
                            "offset": 0,
                            "speed": 1,
                            "decay": 0,
                            "sync": true
                        },
                        "s": {
                            "count": 0,
                            "enable": false,
                            "offset": 0,
                            "speed": 1,
                            "decay": 0,
                            "sync": true
                        },
                        "l": {
                            "count": 0,
                            "enable": false,
                            "offset": 0,
                            "speed": 1,
                            "decay": 0,
                            "sync": true
                        }
                    }
                }
            },
            "zIndex": {
                "random": {
                    "enable": false,
                    "minimumValue": 0
                },
                "value": 0,
                "opacityRate": 1,
                "sizeRate": 1,
                "velocityRate": 1
            },
            "life": {
                "count": 0,
                "delay": {
                    "random": {
                        "enable": false,
                        "minimumValue": 0
                    },
                    "value": 0,
                    "sync": false
                },
                "duration": {
                    "random": {
                        "enable": false,
                        "minimumValue": 0.0001
                    },
                    "value": 0,
                    "sync": false
                }
            },
            "rotate": {
                "random": {
                    "enable": false,
                    "minimumValue": 0
                },
                "value": 0,
                "animation": {
                    "enable": false,
                    "speed": 0,
                    "decay": 0,
                    "sync": false
                },
                "direction": "clockwise",
                "path": false
            },
            "destroy": {
                "bounds": {},
                "mode": "none",
                "split": {
                    "count": 1,
                    "factor": {
                        "random": {
                            "enable": false,
                            "minimumValue": 0
                        },
                        "value": 3
                    },
                    "rate": {
                        "random": {
                            "enable": false,
                            "minimumValue": 0
                        },
                        "value": {
                            "min": 4,
                            "max": 9
                        }
                    },
                    "sizeOffset": true
                }
            },
            "roll": {
                "darken": {
                    "enable": false,
                    "value": 0
                },
                "enable": false,
                "enlighten": {
                    "enable": false,
                    "value": 0
                },
                "mode": "vertical",
                "speed": 25
            },
            "tilt": {
                "random": {
                    "enable": false,
                    "minimumValue": 0
                },
                "value": 0,
                "animation": {
                    "enable": false,
                    "speed": 0,
                    "decay": 0,
                    "sync": false
                },
                "direction": "clockwise",
                "enable": false
            },
            "twinkle": {
                "lines": {
                    "enable": false,
                    "frequency": 0.05,
                    "opacity": 1
                },
                "particles": {
                    "enable": false,
                    "frequency": 0.05,
                    "opacity": 1
                }
            },
            "wobble": {
                "distance": 5,
                "enable": false,
                "speed": {
                    "angle": 50,
                    "move": 10
                }
            },
            "orbit": {
                "animation": {
                    "count": 0,
                    "enable": false,
                    "speed": 1,
                    "decay": 0,
                    "sync": false
                },
                "enable": false,
                "opacity": 1,
                "rotation": {
                    "random": {
                        "enable": false,
                        "minimumValue": 0
                    },
                    "value": 45
                },
                "width": 1
            },
            "links": {
                "blink": false,
                "color": {
                    "value": "#ffffff"
                },
                "consent": false,
                "distance": 150,
                "enable": true,
                "frequency": 1,
                "opacity": 0.4,
                "shadow": {
                    "blur": 5,
                    "color": {
                        "value": "#000"
                    },
                    "enable": false
                },
                "triangles": {
                    "enable": false,
                    "frequency": 1
                },
                "width": 1,
                "warp": false
            },
            "repulse": {
                "random": {
                    "enable": false,
                    "minimumValue": 0
                },
                "value": 0,
                "enabled": false,
                "distance": 1,
                "duration": 1,
                "factor": 1,
                "speed": 1
            }
        },
        "pauseOnBlur": true,
        "pauseOnOutsideViewport": true,
        "responsive": {},
        "smooth": false,
        "style": {},
        "themes": {},
        "zLayers": 100
    },
    circles:{
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#00cfff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 100
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 10,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 10,
                    "size_min": 0.8,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 300,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 800,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 800,
                    "size": 80,
                    "duration": 2,
                    "opacity": 0.8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 400,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    },
}

 