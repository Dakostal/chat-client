import { useEffect, useState } from "react";
import style from "./Styles.module.scss"

const SignUpForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [confirmPasswordDirty, setConfirmPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Емейл не может быть пустым ')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
    const [confirmPasswordError, setConfirmPasswordError] = useState('Пароль не может быть пустым')
    const [formValid, setFormValid] = useState(false)
    const [rulesChecked, setRulesChecked] = useState(false)

    useEffect(()=>{
        if(emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }  
    }, [emailError, passwordError])

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if(!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный емейл')
        } else {
            setEmailError('')
        }
      
    }

    const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
        if(e.target.value.length < 5 || e.target.value.length > 16) {
            setPasswordError('Пароль должен быть не меньше 5 и меньше 16')
            if(!e.target.value) {
                setPasswordError('Пароль не может быть пустым')
            }
        } else {
            setPasswordError('')
        }
    }

    const confirmPasswordHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value)
        if(e.target.value.length < 5 || e.target.value.length > 16) {
            setConfirmPasswordError('Пароль должен быть не меньше 5 и меньше 16')
            if(!e.target.value) {
                setConfirmPasswordError('Пароль не может быть пустым')
            }
        } else {
            setConfirmPasswordError('')
        }
    }

    const blurHandler = (e) => {
        switch(e.target.name) {
            case 'email': 
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
            case 'confirmPassword':
                setConfirmPasswordDirty(true)
                break
        }
    }

    const Checkbox = ({ isChecked, onChange, children }) => {
        return (
            <label className={style.checkboxWrapper}> 
                <input 
                    type="checkbox"
                    checked={isChecked}
                    onChange={()=> onChange((prev)=> !prev)} 
                    className={style.checkbox}/>
                <p>{children}</p> 
            </label>
        )
    } 


    return (
        <form className={style.container}>
            <p className={style.navLinks}>
                <a href="" className={style.active}>Регистрация</a>
                <a href="" className={style.login}>Вход</a>
            </p>


            <div className={style.inputContainer} >
            <label>Email</label>
                <input 
                    onChange={emailHandler} 
                    value={email} 
                    onBlur={blurHandler} 
                    name="email" 
                    type="text">
                </input>
                {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
            </div>

            <div className={style.inputContainer}>
                <label>Password</label>
                <input  
                    onChange={passwordHandler}
                    value={password} 
                    onBlur={blurHandler} 
                    name="password" 
                    type="password">
                </input>
                {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
            </div>

            <div className={style.inputContainer}>
                <label>Confirm Password</label>
                <input  
                    onChange={confirmPasswordHandler}
                    value={confirmPassword} 
                    onBlur={blurHandler} 
                    name="confirmPassword" 
                    type="password">
                </input>
                {(confirmPasswordDirty && confirmPasswordError) && <div style={{color: 'red'}}>{confirmPasswordError}</div>}
            </div> 

            <Checkbox 
                isChecked={rulesChecked} 
                onChange={setRulesChecked}>
                    Я соглашаюсь с правилами пользования чат-клиентом
            </Checkbox>

            <button disabled={!formValid} type="submit" className={style.button}>Зарегистрироваться</button>
        </form>
    )
}




export default SignUpForm;