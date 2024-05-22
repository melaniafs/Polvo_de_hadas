let submitbutton = document.querySelector("#submit-button");
//ESCUCHAR UN EVENTO
submitbutton.addEventListener('click',function(){
    let firstname = document.querySelector("#firstname");
    let lastname = document.querySelector("#lastname");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let birthdate = document.querySelector("#birthdate");
    let country = document.querySelector("#country");
    //Expresiones regulares
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    console.log(firstname.value.trim().length);
    if(firstname.value.trim()=='' || firstname.value.trim().length < 3 ){
        document.querySelector("#error-firstname").innerHTML ="Debes completar el campo Nombre";
    }

    if(lastname.value.trim()==''){
        document.querySelector("#error-lastname").innerHTML ="Debes completar el campo Apellido";
       
    }

    if(!emailRegex.test(email.value)){
        document.querySelector("#error-email").innerHTML ="El email no tiene un formato valido.";
     
    }

    if(password.value.trim()==''){
        document.querySelector("#error-password").innerHTML ="Debes completar el campo Contraseña";
    
    }

    const checkboxInput = document.querySelector('#terms');
    if(!checkboxInput.checked){
        document.querySelector("#error-terms").innerHTML ="Debes aceptar los terminos y condiciones";
    }

if(birthdate.value.trim()==''){
    document.querySelector("#error-birthdate").innerHTML ="Debes completar con tu fecha de nacimiento";
   
}

if(country.value==''){
    document.querySelector("#error-country").innerHTML ="Debes completar con tu país de residencia";
   
}
    
   
    });
