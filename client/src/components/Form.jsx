const Form = () => {
    return (
        <div>
            <form>
                <label>EMAIL</label>
                <input type='text' name='email' placeholder='Registre su email' />

                <br />

                <label>PASSWORD</label>
                <input type='password' name='password' />

                <br />
                
                <button>SUBMIT</button>
            </form>
        </div>
    )
};

export default Form;