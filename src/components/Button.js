
export function Button({children, 
    primary,
    secondary, 
    danger,
    warning,
    success,
    outline,
    rounded,
    ...rest
}){
    let appliedType = '';
    const checkTypeValidity = (props) => {
        let typeObj = {...props};
        let sum = 0;
        let appliedValue = '';
        for (const key in typeObj) {
            let value = Number(!!(typeObj[key]));
            if(value){
                appliedValue = key;
            }
            sum  = sum + value; 
        }
        if(sum ===1){
            appliedType = appliedValue
            return appliedValue;
        }else if(sum > 1){
            appliedValue = '';
            appliedType = appliedValue
        }else{
            appliedValue = ''
            appliedType = appliedValue
            return '';
        }
        
    };
    checkTypeValidity({primary,secondary,danger,warning,success});
    return (
        <button {...rest} className={`${appliedType} ${!!rounded ? 'rounded' : '' } ${!!outline ? 'outline' : '' }`} >{children}</button>
    );
}

export default Button;