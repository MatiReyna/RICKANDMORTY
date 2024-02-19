import validation from '../validation';
import { useState } from 'react';

import styles from './styles/Form.module.css'

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
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
                <label htmlFor='email' className={styles.formLabel}>EMAIL</label>
                <input type='text' name='email' value={userData.email} onChange={handleChange} className={styles.formInput} placeholder='Registre su email' />
                { errors.invalidEmail ? <p className={styles.errorMessage}>{errors.invalidEmail}</p> 
                 : errors.emptyEmail ? <p className={styles.errorMessage}>{errors.emptyEmail}</p>
                 : <p className={styles.errorMessage}>{errors.longEmail}</p> 
                }

                <br />

                <label htmlFor='password' className={styles.formLabel}>PASSWORD</label>
                <input type='password' name='password' value={userData.password} onChange={handleChange} className={styles.formInput} />
                { errors.containsNumber ? <p className={styles.errorMessage}>{errors.containsNumber}</p> : <p className={styles.errorMessage}>{errors.longPassword}</p> }

                <br />

                <button type='submit' className={styles.formButton}>SUBMIT</button>
            </form>
        </div>
    )
};

export default Form;