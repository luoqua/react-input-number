import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
// 使用 reactHook  去实现一个 自定义组件 InputNumber  . 需要支持受控 和 非受控

const InputNumber = (props) => {
    const [innerValue, setInnerValue] = useState(0)
    const [isControl, changeIsControl] = useState(false)
    const [value, setValue] = useState(0)
    
    const {rule, message, label, onChange} = props

    useEffect(() =>{
        ( 'value' in props ) ? changeIsControl(true) : changeIsControl(false)
        isControl ? setValue(props.value) : setValue(innerValue)
    })

    return (
        <div>
            { label && <span>{label}</span>}
            <input  value = {value}
                    type="number"
                    onChange = {(e) => {
                        if (!isControl) {
                            setInnerValue(e.target.value)
                        }
                        onChange && onChange(e)

                    }}
            />
            <p>
                {!rule.test(value) && message}
            </p>
        </div>
    )
}


export default InputNumber