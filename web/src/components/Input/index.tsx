import { InputHTMLAttributes } from 'react'

import { InputForm } from './styled'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <InputForm className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </InputForm>
  )
}

export default Input
