import { SelectHTMLAttributes } from 'react'

import { SelectForm } from './styled'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  label: string
  options: Array<{
    value: string
    label: string
  }>
}

const Select: React.FC<SelectProps> = ({ name, label, options, ...rest }) => {
  return (
    <SelectForm className="select-block">
      <label htmlFor={name}>{label}</label>
      <select value="" id={name} {...rest}>
        <option value="" disabled hidden>Selecione uma opção</option>
        {options.map((option, i) => {
          return (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </select>
    </SelectForm>
  )
}

export default Select
