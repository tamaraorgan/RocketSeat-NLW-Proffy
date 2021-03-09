import { TextareaHTMLAttributes } from 'react'

import { TextareaForm } from './styled'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  label: string
}

const Textarea: React.FC<TextareaProps> = ({ name, label, ...rest }) => {
  return (
    <TextareaForm className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea  id={name} {...rest} />
    </TextareaForm>
  )
}

export default Textarea
