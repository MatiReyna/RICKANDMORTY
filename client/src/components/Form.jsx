import validation from '../validation';
import { useState } from 'react';

const Form = ({ login }) => {

    const [ userData, setUserData ] = useState({
        email: '',
        password: ''
    });

    const [ errors, setErrors ] = useState({});  // Estado para encontrar errores en el formulario.

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [ event.target.name ]: event.target.value
        })  // Agarra el input que le estan escribiendo y le pone el valor que se escribe.

        setErrors(
            validation({  // Ejecuta las validaciones con lo que el usuario va escribiendo.
                ...userData,
                [ event.target.name ]: event.target.value
            })
        )
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>EMAIL</label>
                <input type='text' name='email' value={userData.email} onChange={handleChange} placeholder='Registre su email' />
                { errors.invalidEmail ? <p>{errors.invalidEmail}</p> 
                 : errors.emptyEmail ? <p>{errors.emptyEmail}</p>
                 : <p>{errors.longEmail}</p> 
                }

                <br />

                <label htmlFor='password'>PASSWORD</label>
                <input type='password' name='password' value={userData.password} onChange={handleChange} />
                { errors.containsNumber ? <p>{errors.containsNumber}</p> : <p>{errors.longPassword}</p> }

                <br />

                <button type='submit'>SUBMIT</button>
            </form>
        </div>
    )
};

export default Form;