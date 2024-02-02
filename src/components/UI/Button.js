import styles from './Button.module.css'
const Button = ({onClick, title, children, disable = false}) =>{
    return(
            <button className={styles.Button} onClick={onClick} title={title} disabled={disable}>{children}</button>
    )
}

export default Button