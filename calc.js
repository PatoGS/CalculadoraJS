let mensaje="";

let mensaje_aux="";

let parentesis=0;

let memory=0;


 

function tocaron(tecla){

    console.log(tecla);

    if( ( (typeof mensaje === 'string') && mensaje.search(/n/i)>=0) || (mensaje==Number.NEGATIVE_INFINITY)|| (mensaje==Number.POSITIVE_INFINITY) || (Number.isNaN(mensaje)) ){
        mensaje="";
        mensaje_aux="";
      
    }

    switch (tecla){

        case "+":
        case "-":
        case "*":
        case "/":
           
            if( mensaje[mensaje.length-1]=="+" || mensaje[mensaje.length-1]=="-" || mensaje[mensaje.length-1]=="*" || mensaje[mensaje.length-1]=="/"){
                mensaje_aux = mensaje_aux.substring(mensaje_aux.length-1,0);
                mensaje = mensaje.substring(mensaje.length-1,0);
            }

            if(parentesis==0){
            mensaje_aux=Function("return " + mensaje_aux) ();
            mensaje=mensaje_aux.toString();
            }

        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        
            mensaje_aux += tecla;
            mensaje += tecla;
            break;

        case "=":
            while(parentesis>0){
                mensaje_aux+=")";
                parentesis--;
            }
            mensaje_aux=Function("return " + mensaje_aux) ();
            mensaje=mensaje_aux.toString();
            break;

        case "(":
            if(isNaN(mensaje[mensaje.length-1])){
                parentesis++;
                mensaje_aux += tecla;
                mensaje += tecla;
            }
            break;

        case ")":
            if((!isNaN(mensaje[mensaje.length-1])) && parentesis>0){
                parentesis--;
                mensaje_aux += tecla;
                mensaje += tecla;
            }
            break;

        case "X2":
            mensaje_aux=Math.pow(Function("return " + mensaje_aux) (),2);
            mensaje=mensaje_aux.toString();
            break;

        case "X3":
            mensaje_aux=Math.pow(Function("return " + mensaje_aux) (),3);
            mensaje=mensaje_aux.toString();
            break;

        case "sqrt":
                mensaje_aux=Math.sqrt(Function("return " + mensaje_aux)());
                mensaje=mensaje_aux.toString();
                break;

        case "cbrt":
                mensaje_aux=Math.cbrt(parseFloat(Function("return " + mensaje_aux)()));
                mensaje=mensaje_aux.toString();
                break;

        case "nroot":
            mensaje=Function("return " + mensaje_aux) () + "^(1/";
            mensaje_aux="Math.pow(" + Function("return " + mensaje_aux) () + ",1/";
            parentesis++;
            break;

        case "Xn":
            mensaje=Function("return " + mensaje_aux) () + "^";
            mensaje_aux="Math.pow(" + Function("return " + mensaje_aux) () + ",";
            parentesis++;
            break;

        case "AC":
            mensaje_aux="";
            mensaje="";
            break;

        case "%":
            mensaje_aux += "/100";
            mensaje += tecla;
            break;

        case "X!":
            if (Number.isInteger(Function("return " + mensaje_aux) ())==false){
                mensaje_aux = "";
                mensaje = "No es Entero";
                               
            }
            else {
                mensaje_aux = factorial(Function("return " + mensaje_aux) ());
                mensaje = mensaje_aux.toString();
            }
            break;
        
        case "sin":
            mensaje_aux=Function("return " + "Math.sin(" + Function("return " + mensaje_aux) () + ")") ();
            // parentesis++;
            mensaje = mensaje_aux.toString();
            break;

        case "cos":
            mensaje_aux=Function("return " + "Math.cos(" + Function("return " + mensaje_aux) () + ")") ();
            mensaje = mensaje_aux.toString();
            break;

        case "tan":
            mensaje_aux=Function("return " + "Math.tan(" + Function("return " + mensaje_aux) () + ")") ();
            mensaje = mensaje_aux.toString();
            break;

        case "Memory":
            if(document.getElementById("Memory").innerHTML=="MR")
            {
                document.getElementById("Memory").innerHTML="MS";
                
                if(isNaN(mensaje[mensaje.length-1])){
                
                    mensaje += memory;
                    mensaje_aux += memory;
                    
                } else 
                {
                    mensaje = memory;
                    mensaje_aux=memory;
                }


            } else {
                mensaje_aux = Function("return " + mensaje_aux) ();
                mensaje = mensaje_aux.toString();
                mensaje_aux=mensaje;
                memory=mensaje;
                document.getElementById("Memory").innerHTML="MR";
            }
            break;
    }

    //        document.getElementById("pantalla").style.fontSize = (parseInt(document.getElementById("pantalla").style.fontSize.match(/(\d+)/))-2 )+ "px";
    if(mensaje.length<18){
        document.getElementById("pantalla").style.fontSize="46px";
        document.getElementById("pantalla").style.overflowX="";
    }
    else if(mensaje.length< 26) {
        document.getElementById("pantalla").style.fontSize="70%";
    }
    else if(mensaje.length< 38) {
        document.getElementById("pantalla").style.fontSize="50%";
    }
    else if(mensaje.length< 52) {
        document.getElementById("pantalla").style.fontSize="30%";
    }
    else
    {
        document.getElementById("pantalla").style.overflowX="scroll";
    }


    document.getElementById("pantalla").innerText=mensaje;
   

    console.log(mensaje);

}


const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  };