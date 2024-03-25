type HeaderButtonProps = {
    text: string
    className? : string
}

const HeaderButton = ({ text, className}: HeaderButtonProps) => {
    const classNameProps = `inline-flex items-center justify-center text-md h-9 rounded-md px-3 ${className || ""}`
    return(
        <button className={classNameProps}>{text}</button>
    )
}

export default HeaderButton;