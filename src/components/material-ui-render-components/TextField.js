import TextField from '@material-ui/core/TextField'
import React from 'react'
import '../../App.css'

const renderTextField = (
  {
    input,
    label,
    fullWidth,
    meta: {touched, error},
    ...custom
  }) => (
  <div>
    <TextField
      label={label}
      fullWidth={fullWidth}
      {...input}
      {...custom}
    />
    {touched && error && <p className="error" color="red">{error}</p>}
  </div>
)

export default renderTextField