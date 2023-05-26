async function readfile() {
    let a = await arrbuffer(input.files[0])
    let u8 = new Uint8Array(a)
    let blob = console.log(new Blob(u8, { type: "text" }))
    URL.createObjectURL(blob)
}

function arrbuffer(file) {
    /*
    funcion arrbufer:
        Descripción:
            Convierte una archivo a array buffer para poder manejar el archivo como arreglo de datos
        parámetros:
            @file
        devuelve:
            objeto arrray buffer
    */

    //Ejecutamos la respuesta como promesa para esperar que el archivo se termine de cargar y convertir
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result);
        };

        reader.onerror = () => {
            reject(reader.error);
        };

        reader.readAsArrayBuffer(file);
    });
};

class Error {
    constructor(name, type, status = false) {
        this.e = { name, type, status };
    };
};

class PersonalDecoder {
    //De forma temporal establecemos una contraseña predeterminada oculta. 
    #passwd;
    constructor() {
        this.#passwd = "ALURA-ONE";
    };

    #encodeCharacter(array) {
        if (!typeof (array) == 'object') {
            return new Error(f`Error en objeto de entrada, se esperaba un objeto en lugar de ${typeof (array)}`, "Entrada inválida");
        };
        let chars_it, asc, res_it;
        chars_it = ''
        //Iterar elementos del array
        for (let item of array) {
            //Definir el número con el cual vamos a trabajar, si el item no es númerico entonces cambiaremos el calor del elemento a asquí
            asc = item;
            if (typeof (item) !== 'number') {
                asc = item.charCodeAt(0);
            };
            for (let c_pwd of this.#passwd) {
                let asc_c = c_pwd.charCodeAt(0);
                asc += asc_c;
                if (asc > 255) {
                    asc = asc % 255;
                };
            };
            chars_it += String.fromCharCode(asc);
        };

        const L = chars_it.length.toString();
        let l1 = String.fromCharCode(Number(L.substring(0, 1)) + 55);
        let l2 = String.fromCharCode(Number(L.substring(1, L.length)) + 55);
        const UL = L.length;
        const AL = Math.floor(Math.random() * 10);
        res_it = `${String.fromCharCode(AL + 55)}${String.fromCharCode(UL + AL + 55)}${l1}${l2}${chars_it}`;
        return res_it;
    };

    #decodeCharacter(string) {
        let arrRes = [];
        let n = 0;
        while (n < string.length) {
            let l;
            const AL = string.substring(n, n + 1).charCodeAt(0) - 55;
            let l1 = string.substring(n + 2, n + 3).charCodeAt(0) - 55;
            let l2 = string.substring(n + 3, n + 4).charCodeAt(0) - 55;
            const UL = string.substring(n + 1, n + 2).charCodeAt(0) - 55 - AL;
            l = `${l1}${l2}`;
            if (l2 === 0) {
                l = l1;
            };
            if (!UL == l.toString().length) {
                return new Error(`El tipó de codificación no cóincide ${UL} x ${l.toString().length}`, "Unknown encryption");
            };
            let chars_it = string.substring(n + 4, n + 4 + l);
            for (let pos = 0; pos < chars_it.length; pos++) {
                let char = chars_it.substring(pos, pos + 1);
                let asc = char.charCodeAt(0);
                for (let cPwd of this.#passwd) {
                    let ascC = cPwd.charCodeAt(0);
                    asc = asc - ascC;
                    if (asc < 0) {
                        asc = 255 + asc;
                    };
                };
                arrRes.push(String.fromCharCode(asc));
            };
            n += 4 + l + 1;
        };
        return arrRes;
    };

    async encode(array, text) {
        this.status=false
        this.result = await new Promise((resolve, reject) => {
            try {
                this.status=true;
                resolve(this.#encodeCharacter(array))
            } catch (error) {
                reject(new Error('Error al intentar ejecutar el encriptado, mensaje de respuesta: ' + error, "Encode Error"));
            };
        });
    };

    async decode(text) {
        this.status=false
        this.result = await new Promise((resolve, reject) => {
            try {
                this.status=true;
                resolve(this.#decodeCharacter(text).reduce((res, val) => res += val, ""));
            } catch (error) {
                reject(new Error('Error al intentar ejecutar el des encriptado, mensaje de respuesta: ' + error, "Decode Error"));
            };
        });
    };
};

class AluraDecoder {
    constructor() {
        /*
            La letra "e" es convertida para "enter"
            La letra "i" es convertida para "imes"
            La letra "a" es convertida para "ai"
            La letra "o" es convertida para "ober"
            La letra "u" es convertida para "ufat"
        */
        this.letters = {
            "a": "ai",
            "e": "enter",
            "i": "imes",
            "o": "ober",
            "u": "ufat",
        };
    }
    async encode(text) {
        this.status=false
        this.result = await new Promise((resolve, reject) => {
            try{
                let res = '';
                //Recorremos cada caracter dentro del texto
                for (let char of text) {
                    //Si el carácter se encuentra entre las propiedades de la variable "letras", reemplazamos el valor por su correspondiente
                    if (this.letters.hasOwnProperty(char)) {
                        char = this.letters[char];
                    }
                    res += char;
                };
                this.status=true
                resolve(res);
            }catch(error){
                reject(res);
            }
        })
    };

    async decode(text) {
        this.status=false
        this.result = await new Promise((resolve,reject)=>{
            try{
                for (let word of Object.values(this.letters)) {
                    ///obtenemos los valores y las llaves del objeto
                    let keys = Object.entries(this.letters).find(([key, value]) => value === word);
        
                    //Reemplazamos las palabras ´por las llaves del objeto
                    text = text.replaceAll(keys[1], keys[0]);
                }
                this.status=true
                resolve(text);
            }catch(error){
                reject(error);
            };
        })
        //Recorrer palabras dentro del objeto
    };
};

class Modal{
    constructor(){
        this.a = name => { return document.querySelector(name) };
        this.element = this.a("#modal-canvas");
        this.container = this.element.parentElement;
        this.context = this.element.getContext("2d");
    }

};

class Loader extends Modal{
    constructor() {
        super();
        this.accion = this.a("#accion");
        this.result = this.a("#text-result");
        this.version = this.a('#version');
        this.target;
        this.context.clearRect(0, 0, this.element.width, this.element.height);
        this.aspectRatio = this.element.width / this.element.height;
        this.i = 0;
        window.addEventListener("resize", () => this.#resizeCanvas());
    };

    #setTarget() {
        if (this.version.value == 0) {
            this.target = new AluraDecoder();
        } else {
            this.target = new PersonalDecoder();
        };
    };

    #printResult() {
        this.result.textContent = this.target.result;
    };

    #startAnimation(){
        if(!this.continue){
            if (this.i > this.element.height) { 
                this.i = 0; 
                this.continue = this.target.status;
                this.end();
            }else{
                setTimeout(() => {
                    this.#resizeCanvas();
                    this.draw();
                    this.#startAnimation();
                    this.i += 40;
                }, 100);
            };
        };
    };

    async start() {
        let texto = this.a("#text").textContent;;
        if(texto==""){
            new PopUp().show({
                title:"Entrada invalida",
                message:"El contenido a decodificar no se debe encontrar vacío.",
                timeToOut:6000,
                animation:{ms:400},
                style:{
                    bg:"--alert-bg",
                    font:"--alert-font",
                },
            });
            return;
        }
        this.continue=false
        this.a(".modal").style.display = "flex";
        this.setContext({ title: "Cargando..." });
        this.result.style.display = "flex";
        this.element.style.opacity = "0.5";
        this.#startAnimation()
        this.#setTarget();
        let res;
        if (this.accion.textContent === 'Encriptar') {
            res = this.target.encode(texto);
        } else {
            res = this.target.decode(texto);
        };
        res.then(() => { this.#printResult(); });

        //result.textContent = res;

    };

    setContext({ title = "Cargando...", modal = "flex", success = "none", disabled = true }) {
        /**
         * @param {string} title Texto en la parte superior del Loader
         * @param {string} modal display del modal Loader. cuando se inicializa se debe mostrar con
         * la propiedad "flex" y al finalizar se oculta con la propiedad "none"
         * @param {string} succes display del areá success. cuando se inicializa se debe mostrar con
         * la propiedad "none" y al finalizar se oculta con la propiedad "flex"
         * @param {boolean} enableButton el cual establece la propiedad dissabled del modal para evitar
         * una salida anticipada.
         */

        this.a("#modal-title").textContent = title;
        this.a(".modal-content").style.display = modal;
        this.a(".succes").style.display = success;
        this.a(".modal-btn").disabled = disabled;

    };

    close(hide=null){
        let img = this.a("#img_wait");
        let resArea = this.a(".result-area");
        if(hide){
            if(img.classList.contains("hidden")){
                this.a("#img_wait").classList.toggle("hidden");
            }
            if(this.a(".result-area").classList.contains("hidden")){
                this.a(".result-area").classList.toggle("hidden");
            }
            return;
        }
        this.a("#img_wait").classList.toggle("hidden");
        if(!img.classList.contains("hidden")){
            this.a(".result-area").classList.toggle("hidden")
        }else{
            setTimeout(()=>{resArea.classList.toggle("hidden")},800)
        }
        document.querySelector(".modal").style.display = "none";
    };

    end() {
        this.context.clearRect(0, 0, this.element.width, this.element.height)
        this.context.fillStyle = "rgb(0,255,200)";
        this.context.fillRect(0, 0, this.element.width, this.element.height);
        this.setContext({
            title: "Todo listo   ",
            modal: "none",
            success: "flex",
            disabled: false,
        });
    };

    draw() {
        this.context.clearRect(0, 0, this.element.width, this.element.height);
        for (let i_temp = 0; i_temp < this.element.height; i_temp += 40) {
            for (let x = 0; x < this.element.width; x += 100) {
                let x_ref = this.#randNum(x, x + 100);
                let char = this.#randChar();
                if (this.i == i_temp) {
                    this.context.font = "30px Comic Sans MS";
                    this.context.shadowColor = "cyan";
                    this.context.fillStyle = "lightgreen";
                    this.context.shadowBlur = 7;
                    this.context.beginPath();
                } else {
                    this.context.font = "20px Comic Sans MS";
                    this.context.fillStyle = "red";
                    this.context.shadowBlur = 2;
                };
                this.context.fillText(char, x_ref, i_temp);
            };
        };
    };

    #resizeCanvas() {
        this.element.width = this.container.clientWidth;
        this.element.height = this.container.clientHeight;
    };

    #randChar() {
        return String.fromCharCode(this.#randNum(10, this.element.clientWidth));
    };

    #randNum(min = 0, max) {
        let num = Math.round(Math.random() * max);
        if (num < min) {
            num = min;
        };
        return num;
    };
};

class PopUp {
    constructor() {
        this.interval;
        this.e = (name) => { return document.querySelector(name) };
        this.element = this.e(".popup");
        this.s = (varName) => {
            return getComputedStyle(document.documentElement).getPropertyValue(varName);
        };
    };

    async show({
        message,
        title,
        animation = { ms: 1000, fps: 60 },
        style = { bg: null, font: null },
        timeToOut = 5000
    }) {
        this.timeToOut = timeToOut
        this.#setAnimationParams(animation)
        this.#setStyle(style)
        this.visible = true;
        this.element.style.display = "block";
        this.e(".popup-content").innerText = message;
        this.e("#popup-title").innerText = title;
        await this.#displace().then(this.#autohide());
    };

    async hide() {
        this.visible = false;
        await this.#displace(-1).then(() => {
            this.element.style.display = "none";
        });
        return true;
    };

    #setAnimationParams({ ms = 1000, fps = 60 }) {
        this.ms = ms;
        this.fps = fps;
    };

    #setStyle({ bg, font }) {
        let tempBg = this.s(bg);
        let tempFont = this.s(font);
        if (!bg || tempBg == '') {
            tempBg = this.s("--bg-3th");
        };
        if (!font || tempFont == '') {
            tempFont = this.s("--font-1th");
        }
        this.head = this.e('.popup-head')
        this.head.style.backgroundColor = tempBg;
        this.head.style.color = tempFont;
    };

    #autohide() {
        setTimeout(() => {
            if (this.visible) {
                this.hide();
            };
        }, this.timeToOut);
    };

    #displace(n = 1) {
        return new Promise((resolve, reject) => {

            try {
                let x = Number.parseFloat(0).toFixed(3);
                if (n == -1) { x = Number.parseFloat(1).toFixed(3) };
                let f = this.ms / 1000 * this.fps;
                let i = this.ms / f;
                clearInterval(this.interval)
                this.interval = setInterval(
                    () => {
                        x = parseFloat(x) + i / this.ms * n;
                        this.element.style.opacity = Number.parseFloat(x).toFixed(5);
                        if (n == -1 && x <= 0 || n == 1 && x >= 1) {
                            clearInterval(this.interval);
                            resolve(true);
                        };
                    }, i
                );
            } catch (error) {
                reject(error);
            };
        });
    };
};

class Table {
    constructor(table) {
        try {
            this.table = document.querySelector(table);
        } catch (error) {
            return { messaje: "Error:" + error }
        }
        this.tds = [];
        this.tdTemp = false;
    };
    createTr(callback = null) {
        let tr = document.createElement("tr");
        for (let content of this.tds) {
            tr.appendChild(content);
        };
        if (callback) {
            tr.addEventListener('click', callback);
        }
        this.table.appendChild(tr);
        this.tds = [];
        this.tdTemp = false;
    };

    addCell(content, type = "td") {
        let cell;
        switch (type) {
            case "h":
                cell = document.createElement('th');
                break
            default:
                cell = document.createElement('td');
                break
        }
        if (typeof (content) == "string") {
            cell.textContent = content;
        } else {
            cell.appendChild(content);
        };
        this.tds.push(cell);
        this.tdTemp = false;
    };
    addToCell(content) {
        if (!this.tdTemp) {
            let cell = document.createElement('td');
            this.tds.push(cell);
            this.tdTemp = true;
        };
        if (typeof (content) == "string") {
            this.tds[this.tds.length - 1].textContent += content;
        } else {
            this.tds[this.tds.length - 1].appendChild(content);
        };
    };
};

