import style from './Styles.module.scss'

interface IProps {
    isChecked: boolean; 
    onChange: (val: boolean) => void;
    children: React.ReactNode;
}

const Checkbox = ({ isChecked, onChange, children }: IProps) => {
    return (
        <label className={style.checkboxWrapper}> 
            <input 
                type="checkbox"
                checked={isChecked}
                onChange={()=> onChange(!isChecked)} 
                className={style.checkbox}/>
            <p>{children}</p> 
        </label>
    )
} 

export default Checkbox