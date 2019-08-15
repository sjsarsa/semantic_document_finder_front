import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  palette: {
    primary: {
      main: '#012ea3'
    },
    secondary: {
      main: '#f44336'
    }
  },
  overrides: {
    Textarea: {
        root: {
            height: 'auto',
            minHeight: '100px'
        }
    }
  }
})