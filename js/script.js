function validar_submit() {
    if (document.Formulario.Nombre.value.trim().length === 0) {
        alert("Ingrese su Nombre");
        document.Formulario.Nombre.focus();
        return false; 
    }
    else if (document.Formulario.PrimerA.value.trim().length === 0) {
        alert("Ingrese su Primer Apellido");
        document.Formulario.PrimerA.focus();
        return false;
    }
    else if (document.Formulario.Correo.value.trim().length === 0) {
        alert("Ingrese su Correo Electrónico");
        document.Formulario.Correo.focus();
        return false;
    }
    else if (document.Formulario.Asunto.value.trim().length === 0) {
        alert("Ingrese el Asunto");
        document.Formulario.Asunto.focus();
        return false;
    }
    else {
        document.Formulario.submit(); 
        return true;
    }
}
