const validation = (data) => {  // Recibe la 'data' osea lo que tiene que validar.

    let errors = {};

    if (!data.email.includes('@')) {
        errors.invalidEmail = 'Ingrese un email valido'
    }

    if (!data.email) {
        errors.emptyEmail = 'Ingrese un email'
    }

    if (data.email.length > 35) {
        errors.longEmail = 'El email debe ser mas corto'
    }

    if (!/\d/.test(data.password)) {  // Para verificar que contenga un número.
        errors.containsNumber = 'La password debe contener al menos un número'
    }

    if (data.password.length < 6 || data.password.length > 10) {
        errors.longPassword = 'La password debe ser una longitud de 6 a 10 caracteres'
    }

    return errors;
};

export default validation;