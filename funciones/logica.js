/*
input.addEventListener("drop", drop, false);
function drop(e){
    console.log(e)
}
*/

async function readfile() {
    let a = await arrbuffer(input.files[0])
    let u8 = new Uint8Array(a)
    let blob = console.log(new Blob(u8, { type: "text" }))
    URL.createObjectURL(blob)
}

function arrbuffer(file) {
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
    constructor(name, type, state = false) {
        this.e = { name, type, state };
    };
};

class Encrypter {
    #passwd;
    constructor() {
        this.#passwd = "ALURA-ONE";
    };

    async encode(array, text) {
        this.result = await new Promise.all([characterChanges(array), setProperties(text)])

        function setProperties(text) {
            if (!typeof (text) == 'text') {
                return new Error(f`Error en objeto de entrada, se esperaba un texto en lugar de ${typeof (array)}`, "Entrada inválida");
            };
        };
    };

    #encodeCharacter(array) {
        if (!typeof (array) == 'object') {
            return new Error(f`Error en objeto de entrada, se esperaba un objeto en lugar de ${typeof (array)}`, "Entrada inválida");
        };
        let chars_it, asc, res_it;
        chars_it=''
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
        let l1 = String.fromCharCode(Number(L.substring(0, 1))+55);
        let l2 = String.fromCharCode(Number(L.substring(1, L.length))+55);
        const UL = L.length;
        const AL = Math.floor(Math.random() * 10);
        res_it = `${String.fromCharCode(AL+55)}${String.fromCharCode(UL + AL+55)}${l1}${l2}${chars_it}`;
        return res_it;
    };

    #decodeCharacter(string){
        console.log(`Decódificando ${string}`);
        let arrRes = [];
        let n = 0;
        while(n<string.length){
            let l;
            const AL = string.substring(n,n+1).charCodeAt(0)-55;
            let l1 = string.substring(n+2,n+3).charCodeAt(0)-55;
            let l2 = string.substring(n+3,n+4).charCodeAt(0)-55;
            const UL = string.substring(n+1,n+2).charCodeAt(0)-55-AL;
            l = `${l1}${l2}`;
            if(l2===0){
                l = l1;
            };
            if(!UL==l.toString().length){
                return new Error(`El tipó de codificación no cóincide ${UL} x ${l.toString().length}`,"Unknown encryption");
            };
            let chars_it = string.substring(n+4,n+4+l);
            for(let pos=0;pos<chars_it.length;pos++){
                let char = chars_it.substring(pos,pos+1);
                let asc = char.charCodeAt(0);
                for(let cPwd of this.#passwd){
                    let ascC = cPwd.charCodeAt(0);
                    asc = asc-ascC;
                    if(asc<0){
                        asc = 255+asc;
                    };
                };
                arrRes.push(String.fromCharCode(asc));
            };
            n +=4+l+1;
        };
        return arrRes;
    };

    async encode(array, text) {
        this.result = await new Promise ((resolve,reject)=>{
            try{
                resolve(this.#encodeCharacter(array))
            }catch(error){
                reject(new Error('Error al intentar ejecutar el encriptado, mensaje de respuesta: '+error,"Encode Error"));
            };
        });
    };
    async decode(text){
        this.result = await new Promise ((resolve,reject)=>{
            try{
                resolve(this.#decodeCharacter(text));
            }catch(error){
                reject(new Error('Error al intentar ejecutar el des encriptado, mensaje de respuesta: '+error,"Decode Error"));
            };
        });
    };
};

let encrypter = new Encrypter();
//encrypter.encode("Hola").then(res=>encrypter.decode(encrypter.result).then(res=>console.log(encrypter.result.reduce((res,val)=>res+=val,""))));
