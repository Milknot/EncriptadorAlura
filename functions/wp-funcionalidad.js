let inputTemp = document.getElementById("temp");
let inputText = document.getElementById('text');

//Mostrar y eliminar el tedto del input
inputTemp.addEventListener('click', function () {
    inputText.focus();
    inputTemp.style
        .display = "none";
})

inputText.addEventListener('focusout', () => {
    if (inputText.textContent === "") {
        inputTemp.style.display = "";
    }
})

inputText.addEventListener('focusin', () => {
    inputTemp.style.display = "none";
})


//Desplegado de menú
let menu = document.getElementById("menu");
menu.addEventListener("click", function (e) {
    let toggleMenu = document.querySelector(".toggle-menu");
    if (this.checked === true) {
        toggleMenu.classList.add("togle-visible");
    } else {
        toggleMenu.classList.remove("togle-visible");
    }
})

//Selección y almacenamiento de tema
let currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === '') {
        document.querySelectorAll("#theme").forEach(item => { item.checked = true });
    }
}

function switchTheme(theme) {
    //['azul','rosa']
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    currentTheme = theme;
}

let themes = document.querySelectorAll("#theme");
themes.forEach(item => {
    item.addEventListener("click", function () {
        if (currentTheme == "light") {
            valor = "";
            themes.forEach(item => { item.checked = true });
        } else {
            valor = "light";
            themes.forEach(item => { item.checked = false });
        }
        switchTheme(valor);
    })
})

//Cambio de acción
function switchAction(bol) {
    let element = document.getElementById("accion");
    let res;
    if (bol) { res = "Desencriptar" } else { res = "Encriptar" };
    element.innerText = res;
}


let mode = document.getElementById("mode")
mode.addEventListener("click", function () {
    switchAction(mode.checked);
}, false)

//Cambio de contador de carácterres
inputText.addEventListener('keyup', function () {
    uploadQtyChars('ku')
}, false)

uploadQtyChars = (event) => {
    const limit = 1000
    let chars = document.getElementById("chars");
    let l = inputText.textContent.length
    //Validación de longitud de texto
    if (l > limit) {
        let range = document.createRange();
        let selection = window.getSelection();
        //Si la longitud es mayór al límite establecido de 1000, eliminár el último carácter
        inputText.innerText = inputText.textContent.substring(0, limit)
        range.selectNodeContents(inputText)
        range.collapse(false);
        selection.removeAllRanges()
        selection.addRange(range);
        inputText.focus();
    } else {
        chars.innerText = `${l} de 1000`;
    };
};

//read configs
let button = document.getElementById('run');
button.addEventListener('click',function(){
    let ad = new AluraDecoder();
    let element = document.getElementById("accion");
    let texto = inputText.textContent;
    let res;
    let encrypter = new Encrypter();
    let version  =document.getElementById('version');
    let result = document.getElementById("text-result");
    result.style.display="block"
    if(version.value==0){
        if(element.textContent==='Encriptar'){
            res = ad.encode(texto);
        }else{
            res = ad.decode(texto);
        };
        result.textContent=res;
    }else{
        if(element.textContent==='Encriptar'){
            encrypter.encode(texto).then(function(){result.textContent=encrypter.result.reduce((res,val)=>res+=val,"")});
        }else{
            encrypter.decode(texto).then(function(){result.textContent=encrypter.result.reduce((res,val)=>res+=val,"")});
        }
    };
    let img = document.getElementById("img_wait");
    img.style.display="none";
}
,false);