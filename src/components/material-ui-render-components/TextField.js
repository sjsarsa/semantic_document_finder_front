import { TextField } from '@material-ui/core'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import React from 'react'
import '../../App.css'

const renderTextField = (
  {
    input,
    autosize,
    meta: {touched, error},
    ...custom
  }) => (
  <div>
    {autosize ? <TextareaAutosize {...input} {...custom}/>
        : <TextField {...input} {...custom}/>
    }
    {touched && error && <p className="error" color="red">{error}</p>}
  </div>
)

export default renderTextField