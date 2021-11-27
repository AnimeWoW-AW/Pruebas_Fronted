// ******************************************************************** 
// ********** funcion para mostrar u ocultar la contraseña ************ 

function showPassword() {
    var cambio = document.getElementById("idPassword");
    if (cambio.type == "password") {
        cambio.type = "text";
        $('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
    } else {
        cambio.type = "password";
        $('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
    }
}

$(document).ready(function () {
    //CheckBox mostrar contraseña
    $('#ShowPassword').click(function () {
        $('#Password').attr('type', $(this).is(':checked') ? 'text' : 'password');
    });
});

// ******************************************************************** 
// **************** funcion para ingresar a la cuenta****************** 

function ingresarCuenta() {
    const email = document.getElementById('idEmail');
    const password = document.getElementById('idPassword');
    const patronEmail= /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/; //Expresion Regular

    // console.log("Email: " + email.value);//Devuelve el valor del objeto
    // console.log("Password: " + password.value); 

    if (email.value.length == 0) {
        alert("Tiene que proporcionar un Email")
        email.focus();//El focus coloca el cursos en el objeto, para guiar al usuario
        return 0;//Evitar que no se envie la funcion, 0 = False
    }

    if(patronEmail.test(email.value) == false){
        alert("El email proporcionado no es valido")
        email.focus();
        return 0;
    }

    if (password.value.length == 0) {
        alert("Tiene que proporcionar una Contraseña")
        password.focus();
        return 0;
    }

    else{
        alert("¡BIENVENIDO! " + email.value + 
                "\n\n       Redireccionando ....")
    }

}

