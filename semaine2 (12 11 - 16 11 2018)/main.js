console.log("Bonjour et merci d'avoir ouvert cette console ! Pour éxécuter la fonction de l'exercice 1, veuillez tapez sameType('input1' , input2). Dans cet exemple, input1 est entre '' car il s'agit d'un string. Pour éxécuter la fonction de l'exercice 2, veuillez taper maxEtMin(1, 2, 3) suivi par autant d'arguments que vous voulez.")

//Exercice 1
var firstInput
var secondInput
function sameType(firstInput, secondInput){
    if (typeof(firstInput) == typeof(secondInput)) {
        console.log("Le type est le même, il s'agit de :" + typeof(firstInput) );
    }
    else {
        console.log("Ils ne sont pas du même type, le 1er input est un " + typeof(firstInput) + "tandis que l'autre est un " + typeof(secondInput) );
    }
}

//Exercice 2
var max;
var min;
function maxEtMin() {
    max = arguments[0];
    min = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i]>max) {
            max = parseInt(arguments[i]);
        }
        if (arguments[i]<min) {
            min = parseInt(arguments[i]);
        }
    }
    console.log("Le maximum est " + max);
    console.log("Le minimum est " + min);
}

//Exercice 3
function unique(testedArray) {
    // for (var i = 0; i < testedArray.length; i++) {
    //     console.log("v1 : " + testedArray.indexOf(testedArray[i]));
    //     console.log("v2 : " + testedArray[i]);
    //     if (!testedArray.indexOf(testedArray[i]) === testedArray[i]) {
    //         console.log("Cette occurrence est unique : " + testedArray[i])
    //     }
    // }
}