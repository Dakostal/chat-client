import style from "./Styles.module.scss"
import Checkbox from "../../checkbox/Checkbox";
import { Controller, useForm }from 'react-hook-form'

interface FormValue {
    email: string,
    password: string,
    confirmPassword: string,
    acceptRules: boolean
}

const SignUpForm = () => {

    const { control, handleSubmit, formState: {errors} } = useForm<FormValue>({
        defaultValues:{acceptRules: false, confirmPassword: '', email: '', password: ''}
    })

    return (
        <form className={style.container} onSubmit={handleSubmit((data) => {
            console.log(data);
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
                </label> 
                }         
            />
            
            <Controller
                control={control}
                name="password"
                render={({field, fieldState, formState}) =>
                    <label htmlFor="confirmPassword"className={style.inputContainer}>
                        <label>Confirm Password</label>
                            <input
                                {...field}  
                                type="password"
                                id="confirmPassword">
                            </input>
                    </label>
                }            
            />
<Controller 
        control={control}
        name="acceptRules"
        render={({field, fieldState, formState}) => 
            <Checkbox 
            isChecked={field.value} 
            onChange={()=> {field.onChange(!field.value)}}>
                Я соглашаюсь с правилами пользования чат-клиентом
        </Checkbox>

    }
/>


            <button type="submit" className={style.button}>Зарегистрироваться</button>
        </form>
    )
}




export default SignUpForm;