type headerButtonProps = {
    text: string
    className? : string
}

const Button = ({text, className}: headerButtonProps) => {
    const classNameProps: string = `inline-flex items-center justify-center text-md h-9 rounded-md px-3 ${className || ""}`
    return(
        <button className={classNameProps}>{text}</button>
    )
}

export default Button;