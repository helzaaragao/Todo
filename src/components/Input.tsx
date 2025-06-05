import style from './Input.module.css'

export function Input(
    {...rest}: 
    React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>, 
    HTMLInputElement>){

    return(
        <input 
        type="text" 
        className={style.input}
        placeholder="Adicione uma nova tarefa"
        {...rest}
         />

    )
}





