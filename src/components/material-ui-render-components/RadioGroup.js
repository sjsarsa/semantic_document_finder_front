import RadioGroup from '@material-ui/core/RadioGroup'
import React from 'react'
import '../../App.css'

const renderRadioGroup = ({input, ...rest}) => (
  <RadioGroup
    {...input}
    {...rest}
    onChange={(event, value) => input.onChange(value)}
  />
)

export default renderRadioGroup