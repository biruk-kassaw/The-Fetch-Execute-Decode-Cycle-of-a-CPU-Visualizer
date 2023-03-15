var next = document.getElementById("next");
var step = 0;

var ac = document.getElementById("ac")
var pc = document.getElementById("pc")
var ir = document.getElementById("ir")

next.addEventListener("click", function (e) {
    if (step === 0) {
        var styles = `
            
            #fourthmemory{
                animation-name: fourthmemory;
                animation-duration: 4s;
            }

            @keyframes fourthmemory {
                from {background-color: rgb(7, 3, 56);}
                to { margin-left: 420px; margin-top: -190px;}
            }`
        console.log("first if")
        var styleSheet = document.createElement("style")
        styleSheet.type = "text/css"
        styleSheet.innerText = styles
        document.head.appendChild(styleSheet)
        ac.value = "0003";
    }
    if (step === 1) {
        var styles = `
            
            #secondmemory{
                animation-name: secondmemory;
                animation-duration: 4s;
                color: yellow;
            }

            @keyframes secondmemory {
                from {background-color: rgb(7, 3, 56);}
                to { margin-left: 420px; margin-top: 40px;}
            }`
        console.log("second if")
        var styleSheet = document.createElement("style")
        styleSheet.type = "text/css"
        styleSheet.innerText = styles
        document.head.appendChild(styleSheet)
        ir.value = "5941"
    }
    console.log("hello")
    
    if (step === 2) {
        var styles = `
            
            #fifthmemory{
                animation-name: fifthmemory;
                animation-duration: 4s;
                color: yellow;
            }

            @keyframes fifthmemory {
                from {background-color: rgb(7, 3, 56);}
                to { margin-left: 420px; margin-top: -230px;}
            }`
        console.log("second if")
        var styleSheet = document.createElement("style")
        styleSheet.type = "text/css"
        styleSheet.innerText = styles
        document.head.appendChild(styleSheet)
        pc.value = "302";
        var number1 = document.getElementById("number1").value;
        var number2 = document.getElementById("number2").value;
        
        var sum  = parseInt(number2) + parseInt(number1)

        var addition = document.getElementById("addition");
        addition.style.visibility = "visible"

        ac.value = "000"+sum;
    }

    if (step === 3) {
        var styles = `
            
            #thirdmemory{
                animation-name: thirdmemory;
                animation-duration: 4s;
            }

            @keyframes thirdmemory {
                from {background-color: rgb(7, 3, 56);}
                to { margin-left: 420px;}
            }`
        console.log("second if")
        var styleSheet = document.createElement("style")
        styleSheet.type = "text/css"
        styleSheet.innerText = styles
        document.head.appendChild(styleSheet)
        ir.value = "2941";
    }

    if (step === 4) {
        var styles = `
            
            #ac{
                animation-name: ac;
                animation-duration: 4s;
            }

            @keyframes ac {
                from {background-color: rgb(7, 3, 56);}
                to { margin-left: -420px; margin-top: 230px;}
            }`
        console.log("second if")
        var styleSheet = document.createElement("style")
        styleSheet.type = "text/css"
        styleSheet.innerText = styles
        document.head.appendChild(styleSheet)
        var number2 = document.getElementById("number2");

        number2.value = "0005";
    }

    if (step > 4) {
        var simulation = document.getElementById("simulation");
        simulation.style.visibility = "visible";
    }

    var secondmemory = document.getElementById("secondmemory");
    step += 1
})

var restart = document.getElementById("restart");
restart.addEventListener("click", function (e) {
    location.reload();

})