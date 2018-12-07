import React from 'react'
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core'

const renderSelectField = ({
                             input,
                             label,
                             style,
                             meta: {touched, error},
                             children,
                             ...custom
                           }) => (
  <FormControl style={style}>
    <InputLabel shrink>
      {label}
    </InputLabel>
    <NativeSelect
      {...input}
      onChange={(event) => input.onChange(event.target.value)}
      children={children}
      {...custom}
    />
  </FormControl>
)

export default renderSelectField