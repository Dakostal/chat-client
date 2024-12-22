import style from "./Styles.module.scss"
import { Controller, useForm }from 'react-hook-form'

interface FormValue {
    email: string,
    password: string,
}

const SignInForm = () => {

    const { control, handleSubmit, formState: {errors} } = useForm<FormValue>({
        defaultValues:{}
    })

    return (
        <form className={style.container} onSubmit={handleSubmit((data) => {

        })}>
            <p className={style.navLinks}>
                <a href="" className={style.active}>Регистрация</a>
                <a href="" className={style.login}>Вход</a>
            </p>

            <Controller 
                control={control}
                name="email"
                render={({field, fieldState, formState}) => 
                    <label htmlFor="emailInput" className={style.inputContainer} >
                        <label>Email</label>
                            <input 
                                {...field} 
                                type="text"
                                id='emailInput'>
                        </input>
                            {/* {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>} */}
                    </label>
                }
            />

            <Controller
                control={control}
                name="password"
                render={({field, fieldState, formState}) =>
                    <label htmlFor="passwordInput" className={style.inputContainer}>
                    <label>Password</label>
                        <input
                            {...field}   
                            type="password"
                            id='passwordInput'>                 
                        </input>
                            {/* {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>} */}
                </label> 
                }         
            />


            <button type="submit" className={style.button}>Войти</button>
        </form>
    )
}



export default SignInForm;