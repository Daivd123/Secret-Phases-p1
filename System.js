class System{

    constructor(){}

    authenthicate(actualCode,enteredCode){
        textSize(50);
        Fill("white");
        text(code,300,300)
        if(actualCode == enteredCode.toUpperCase())
        return true
        else
        return false
    }
    
}