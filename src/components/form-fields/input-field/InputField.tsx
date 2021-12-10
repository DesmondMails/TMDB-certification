import { FC } from 'react'
import { TextFieldProps, TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

type IInputField = TextFieldProps & {
  control: any
  name: string
}

const InputField: FC<IInputField> = ({ control, name, ...rest }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          value={value}
          {...rest}
        />
      )}
    />
  )
}

export default InputField
