const validation = (data) => {  // Recibe la 'data' osea lo que tiene que validar.

    let errors = {};

    if (!data.email.includes('@')) {
        errors.invalidEmail = 'INGRESE UN EMAIL VALIDO'
    }

    if (!data.email) {
        errors.emptyEmail = 'INGRESE UN EMAIL'
    }

    if (data.email.length > 35) {
        errors.longEmail = 'EL EMAIL DEBE SER MAS CORTO'
    }

    if (!/\d/.test(data.password)) {  // Para verificar que contenga un número.
        errors.containsNumber = 'LA PASSWORD DEBE CONTENER AL MENOS UN NÚMERO'
    }

    if (data.password.length < 6 || data.password.length > 10) {
        errors.longPassword = 'LA PASSWORD DEBE SER DE UNA LONGITUD DE 6 A 10 CARACTERES'
    }

    return errors;
};

export default validation;