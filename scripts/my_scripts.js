$(document).ready(function () {
    //contadores de las transiciones de las imagenes 
    var headclick = 0, eyeclick = 0, noseclick = 0, mouthclick = 0;

    lightning_one(10000); //tiempo de transición de de lightning1
    lightning_two(15000);//tiempo de transición de de lightning2
    lightning_three(17000); //tiempo de transición de de lightning3

    //Función para la transición de de las imagenes de head
    $("#head").click(function () {
        if (headclick < 9) {
            $("#head").animate({ left: "-=367px" }, 500); //Transición de la cabeza del monstruo
            headclick += 1;
        } else {
            $("#head").animate({ left: "0px" }, 500);//Cabeza inicial de la animación
            headclick = 0;
        }
    });

    //Función para la transición de de las imagenes de eyes
    $("#eyes").click(function () {
        if (eyeclick < 9) {
            $("#eyes").animate({ left: "-=367px" }, 500);//Transición de los ojos del monstruo
            eyeclick += 1;
        }
        else {
            $("#eyes").animate({ left: "0px" }, 500); //Ojos iniciales de la animación
            eyeclick = 0;
        }
    });

    //Función para la transición de de las imagenes de nose
    $("#nose").click(function () {
        if (noseclick < 9) {
            $("#nose").animate({ left: "-=367px" }, 500);//Transición de la nariz del monstruo
            noseclick += 1;
        }
        else {
            $("#nose").animate({ left: "0px" }, 500);//Nariz inicial de la animación
            noseclick = 0;
        }
    });

    //Función para la transición de de las imagenes de mouth
    $("#mouth").click(function () {
        if (mouthclick < 9) {
            $("#mouth").animate({ left: "-=367px" }, 500);//Transición de la boca del monstruo
            mouthclick += 1;
        }
        else {
            $("#mouth").animate({ left: "0px" }, 500);//Boca inicial de la animación
            mouthclick = 0;
        }
    });
});

//Función para los efectos del relampago lightning1
function lightning_one(t) {
    $("#container #lightning1").fadeIn(250).fadeOut(250);
    setTimeout("lightning_one()", t);
};
//Función para los efectos del relampago lightning2
function lightning_two(t) {
    $("#container #lightning2").fadeIn("fast").fadeOut("fast");
    setTimeout("lightning_two()", t);
};
//Función para los efectos del relampago lightning3
function lightning_three(t) {
    $("#container #lightning3").fadeIn("fast").fadeOut("fast");
    setTimeout("lightning_three()", t);
};

