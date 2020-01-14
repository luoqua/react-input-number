
import React,{useState,useEffect} from 'react'
import InputNumber from './InputNumber'

function App(){
    const [value,setValue] = useState(123)
    return (
        <div>
            <InputNumber label="受控组件：" value={value} onChange={e=>{setValue(e.target.value)}} rule={/\d/} message="只允许输入数字" />
            <InputNumber label="非受控组件：" defaultValue={value} onChange={e=>{}} rule={/\d/} message="只允许输入数字" />
        </div>
    )
}

export default App