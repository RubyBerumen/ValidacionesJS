function validarFormulario(){
    const nombre = document.getElementById("caja_nombre").value;
    const codigoPostal = document.getElementById("caja_cp").value;
    const numeroControl = document.getElementById("caja_nc").value;
    const numeroControlLetra = document.getElementById("caja_ncl").value;
    const numeroTelefono = document.getElementById("caja_numtel").value;
    const correo = document.getElementById("caja_correo").value;
    const contrasena = document.getElementById("caja_contra").value;

    console.log("Validacion de formularios");

    console.log((13).toString(16));

    if(nombre == null || nombre.length === 0 || !/[a-zA-Z]{2,}(\s[a-zA-Z]{2,})*/g.test(nombre)){
        alert("El nombre no es valido");
        return false;
    }else if(codigoPostal == null || codigoPostal.length === 0 || !/^\d{5}$/g.test(codigoPostal)){
        alert("El codigo postal no es valido");
        return false;
    }else if(numeroControl == null || numeroControl.length === 0 || !/^\d{8}$/g.test(numeroControl)){
        alert("El numero de control no es valido");
        return false;
    }else if(numeroControlLetra == null || numeroControlLetra.length === 0 || !/^[SMACIsmaci]\d{8}$/g.test(numeroControlLetra)){
        alert("La letra del numero de control no es valida");
        return false;
    }else if(numeroTelefono == null || numeroTelefono.length === 0 || !/^\d{3}(-)*\d{3}(-)*\d{4}$/g.test(numeroTelefono)){
        alert("El numero de telefono no es valido");
        return false;
    }else if(correo == null || correo.length === 0 || !/^[a-zA-Z0-9]+\.[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[.]+\.[a-zA-Z0-9]+$/g.test(correo)){
        alert("El correo no es valido");
        return false;
    }else if(contrasena == null || contrasena.length === 0 || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g.test(contrasena)){
        alert("La contraseña no es valida");
        return false;
    }else {
        alert("Registro exitoso");
        return true;
    }

}