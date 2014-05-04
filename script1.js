var KeyPad = document.Calcul;
var res = 0;
var EmptyField = true;
var opr;

function BtnPress(Num) {
    if (EmptyField){
        KeyPad.EdField.value = Num;
        EmptyField = false;
    }
    else{
        if (KeyPad.EdField.value == "0")
            KeyPad.EdField.value = Num;
        else if(Check());
        else
            KeyPad.EdField.value+=Num;
    }
}

function Operation(op) {
    if (EmptyField && opr != '=');
    else{
        EmptyField = true;
        if ( '+' ==  opr || '-' == opr || "*" == opr || '/' == opr ) {
        var str = res.toString() + opr.toString() + KeyPad.EdField.value.toString();
        res = eval(str);
        } else 
        res = parseFloat(KeyPad.EdField.value);
        KeyPad.EdField.value = res;
         if (isNaN(res) || res == Infinity) {
            KeyPad.EdField.value = "Error";
            res = 0;
        }
        opr = op;
        }
}

function Dcm() {
    if (EmptyField == true) {
        KeyPad.EdField.value = "0.";
        EmptyField = false;
    } else {
        if (KeyPad.EdField.value.indexOf(".") == -1)
            KeyPad.EdField.value+=".";
    }
}

function Clear() {
    KeyPad.EdField.value = "0";
    EmptyField = true;
    res = 0;
}

function chngSym() {
    if (EmptyField);
    else
    KeyPad.EdField.value*=-1; 
}

function BackSpc() {
    if (EmptyField);
    else {
    KeyPad.EdField.value = KeyPad.EdField.value.slice(0,-1);
    }
}

function Check() {
    if (KeyPad.EdField.value.length == 16)
        return true;
}

function KeyPrs(event) {
    event.preventDefault();
    document.getElementById(event.keyCode.toString()).click();
}
