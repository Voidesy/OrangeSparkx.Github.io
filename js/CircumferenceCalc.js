var pi = 3.14

function clickCalculate(){
    var success = verifyInput()

    if(success==true) {
        doCalculation()
    }
    else{
        showError()
    }
}

function clearz(){

    document.getElementById("radius").value = null
    document.getElementById("diam").value = null
    document.getElementById("cf").value = null

    document.getElementById("answerBox").style.display = "none"
}

function verifyInput(){
    var r = document.getElementById("radius").value
    var d = document.getElementById("diam").value
    var c = document.getElementById("cf").value

    var countInputs = 0;
    
    if(r){
        countInputs++       
    }

    if(d){
        countInputs++       
    }

    if(c){
        countInputs++       
    }

    if(countInputs == 1){
        return true
    }
    
    return false
}

function doCalculation(){
    var r = document.getElementById("radius").value
    var d = document.getElementById("diam").value
    var c = document.getElementById("cf").value

    
    if(r){
            d = r * 2
            c = d * pi
            
            document.getElementById("f1").innerHTML = "d = " + r + " * 2"
            document.getElementById("f2").innerHTML = "c = d * pi"

            displayAnswers(r,d,c)

            return;
    }

    if(d){
        r = d / 2
        c = d * pi

        document.getElementById("f1").innerHTML = "r = "+d+" / 2"
            document.getElementById("f2").innerHTML = "c = "+d+" * pi"

        displayAnswers(r,d,c)

        return;
    }

    if(c){
            d = c / pi
            r = d / 2

            document.getElementById("f1").innerHTML = "d = "+c+" / pi"
            document.getElementById("f2").innerHTML = "r = d / 2"
            
            displayAnswers(r,d,c)
    }
}

function displayAnswers(r,d,c){
    document.getElementById("radius").value = r
    document.getElementById("diam").value = d
    document.getElementById("cf").value = c


    document.getElementById("answerBox").style.display = "inherit"

}

function showError(){
    alert("Make sure there is only one value entered above");
}