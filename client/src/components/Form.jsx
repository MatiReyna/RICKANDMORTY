import validation from '../validation';
import { useState, useEffect } from 'react';

import styles from './styles/Form.module.css';

const Form = ({ login }) => {

    const [ userData, setUserData ] = useState({
        email: '',
        password: ''
    });

    const [ errors, setErrors ] = useState({});  // Estado para encontrar errores en el formulario.

    useEffect(() => {
        setErrors(validation(userData))  // Validacion cada vez que userData cambie.
    }, [userData])

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [ event.target.name ]: event.target.value
        })  // Agarra el input que le estan escribiendo y le pone el valor que se escribe.
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        const formErrors = validation(userData)

        if (Object.keys(formErrors).length === 0) {
            login(userData)
        } else {
            setErrors(formErrors)
        }
    };

    return (
        <section>
            <div className={styles.formBox}>
                <div className={styles.formValue}>
                    <form onSubmit={handleSubmit}>
                        <h2 className={styles.login}>Login</h2>
                        <div className={styles.inputbox}>
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type='text' name='email' value={userData.email} onChange={handleChange} className={styles.formInput} />
                            <label htmlFor='email'>EMAIL</label>
                        </div>

                        <br />

                        <div className={styles.inputbox}>
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input type='password' name='password' value={userData.password} onChange={handleChange} className={styles.formInput} />
                            <label htmlFor='password'>PASSWORD</label>
                        </div>

                        <br />

                        <ul>
                            { Object.values(errors).map((error, index) => (<li key={index} className={styles.errorMessage}>{error}</li>)) }
                        </ul>

                        <button type='submit' className={styles.formButton}>SUBMIT</button>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default Form;