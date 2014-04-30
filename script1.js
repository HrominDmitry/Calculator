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
        if ( '+' ==  opr)
            res+= parseFloat(KeyPad.EdField.value);
        else if ('-' == opr)
            res-= parseFloat(KeyPad.EdField.value);
        else if ('*' == opr)
            res*= parseFloat(KeyPad.EdField.value);
        else if ('/' == opr)
            res/= parseFloat(KeyPad.EdField.value);
        else 
            res = parseFloat(KeyPad.EdField.value);
        KeyPad.EdField.value = res;
        opr = op;
        }
}

function Dcm() {
    if (EmptyField == true){
        KeyPad.EdField.value = "0.";
        EmptyField = false;
    }
    else{
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
    else{
    KeyPad.EdField.value = KeyPad.EdField.value.slice(0,-1);
    }
}

function Check() {
    if (KeyPad.EdField.value.length == 16)
        return true;
}

function KeyPrs(event) {

    if ((event.keyCode-48) >= 0 && (event.keyCode-48) <= 9) 
        BtnPress(event.keyCode-48);
    else if ((event.keyCode-96) >= 0 && (event.keyCode-96) <= 9) 
        BtnPress(event.keyCode-96);
    else if(event.keyCode == 109)
        Operation('-');
    else if(event.keyCode == 107)
        Operation('+');
    else if(event.keyCode == 106)
        Operation('*');
    else if(event.keyCode == 110)
        Dcm();
    else if(event.keyCode == 111)
        Operation('/');
    else if(event.keyCode == 8)
        BackSpc();
    else if(event.keyCode == 187)
        Operation('=');
}
