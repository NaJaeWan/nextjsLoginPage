import { useRef, useState } from "react"


export const useInput = (name, text, validator) => {
    const [value, setValue] = useState(text);
    const [error, setError] = useState(false);
    
    const onChange = (e) => {
        const changeInputValue = e.target.value;
        setValue(changeInputValue);
        if(validator.test(changeInputValue)){
            setError(false);
        } else {
            setError(true);
        }
    }

    const checkValid = () => {
        if(value === '' || error === true){
            alert(`${name}을 조건에 맞게 입력하세요`)
            return false;
        }
        return true
    }
    return { value: value, error:error, onChange:onChange, checkValid:checkValid }
}