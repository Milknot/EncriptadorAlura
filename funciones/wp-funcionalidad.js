let inputTemp = document.getElementById("temp")
let inputText = document.getElementById('text')

inputTemp.addEventListener('click',function(){
    inputText.focus()
    inputTemp.style
        .display = "none"
})

inputText.addEventListener('focusout',()=>{
    inputTemp.style.display = ""
})
inputText.addEventListener('focusin',()=>{
    inputTemp.style.display = "none"
})