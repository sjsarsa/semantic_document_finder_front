/*
Modified from https://material-ui.com/demos/tables/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import PaginationActions from './PaginationActions'

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5,
  },
})

class CustomPaginationActionsTable extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      page: 0,
      rowsPerPage: 10,
    }
  }

  handleChangePage = (event, page) => {
    this.setState({page})
  }

  handleChangeRowsPerPage = event => {
    this.setState({rowsPerPage: event.target.value})
  }

  render () {
    const data = this.props.data
    const {rowsPerPage, page} = this.state

    return (
      <div>
        {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(this.props.getListItem)}
        <Table>
          <TableFooter>
            <TableRow>
              <TablePagination
                colSpan={3}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={this.handleChangePage}
                onChangeRowsPerPage={this.handleChangeRowsPerPage}
                ActionsComponent={withStyles(actionsStyles, {withTheme: true})(PaginationActions)}
                rowsPerPageOptions={[5, 10, 25, 100]}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    )
  }
}

CustomPaginationActionsTable.propTypes = {
  data: PropTypes.array.isRequired,
  getListItem: PropTypes.func.isRequired
}

export default CustomPaginationActionsTable