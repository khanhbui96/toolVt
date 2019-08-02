import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { Clear, Add } from '@material-ui/icons'
import { Typography, IconButton, Fab, Button,} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        }
    },
}))(TableRow);

function createData(date, infor, reason, timeIn, timeOut, consider) {
    return { date, infor, reason, timeIn, timeOut, consider };
}

const rows = [
    createData('20/02/2019', "Hoàng Đưc Mạnh - CVT - AC49-04 ", 'Tiếp phẩm', '7h30', '7h45', 'chấp hành tốt quy định ra vào khu kĩ thuật', <a to='/test'>xem thêm</a>),
    createData('20/02/2019', "Hoàng Đưc Mạnh - CVT - AC49-04 ", 'Tiếp phẩm', '7h30', '7h45', 'chấp hành tốt quy định ra vào khu kĩ thuật', <a to='/test'>xem thêm</a>),
    createData('20/02/2019', "Hoàng Đưc Mạnh - CVT - AC49-04 ", 'Tiếp phẩm', '7h30', '7h45', 'chấp hành tốt quy định ra vào khu kĩ thuật', <a to='/test'>xem thêm</a>),
    createData('20/02/2019', "Hoàng Đưc Mạnh - CVT - AC49-04 ", 'Tiếp phẩm', '7h30', '7h45', 'chấp hành tốt quy định ra vào khu kĩ thuật', <a to='/test'>xem thêm</a>),
    createData('20/02/2019', "Hoàng Đưc Mạnh - CVT - AC49-04 ", 'Tiếp phẩm', '7h30', '7h45', 'chấp hành tốt quy định ra vào khu kĩ thuật', <a to='/test'>xem thêm</a>),

];

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
        marginTop: 10
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

function SignInUp() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    function handleClickOpen() {
        setOpen(true);
    }
    function handleClose() {
        setOpen(false);
    }
    const handleChange = (e)=>{
        console.log(e.target.value)
    }
    return (
        <Paper className={classes.root}>
            <Typography style={{ textAlign: 'center' }} variant='h4'>Đăng kí ra vào kho và khu kỹ thuật</Typography>
            <div>
                    <TextField
                        style={{ margin: 8 }}
                        placeholder='Tìm kiếm'
                    />
                    <IconButton ><Clear /></IconButton>
                
                <Fab
                    onClick={handleClickOpen}
                    size="medium"
                    color="primary"
                    aria-label="Add"
                    className={classes.margin}
                    style={{ float: 'right' }}>
                    <Add />
                </Fab>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Đăng kí ra vào kho và khu kĩ thuật</DialogTitle>
        <DialogContent>
        <TextField
        onChange={handleChange}
        locale="vi"
        id="date"
        label="Ngày tháng năm"
        type="date"
        defaultValue={new Date().toLocaleString().slice(0,9)}
        InputLabelProps={{
          shrink: true,
        }}
      />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Họ và tên, đơn vị, người phương tiện ra vào"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Lý do"
            fullWidth
          />
          <TextField
        onChange={handleChange}
        locale="vi"
        id="date"
        label="Thời gian vào"
        type="time"
        defaultValue={new Date().toLocaleString().slice(0,9)}
        InputLabelProps={{
          shrink: true,
        }}
      />
          <TextField
        style={{marginLeft: 100}}
        onChange={handleChange}
        locale="vi"
        id="date"
        label="Thời gian ra"
        type="time"
        defaultValue={new Date().toLocaleString().slice(0,9)}
        InputLabelProps={{
          shrink: true,
        }}
      />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nhân xét"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Hủy
          </Button>
          <Button onClick={handleClose} color="primary">
            Đăng kí
          </Button>
        </DialogActions>
      </Dialog></div>

            <Table className={classes.table}>
                <TableHead>
                    <TableRow style={{ background: "#3f51b5" }}>
                        <StyledTableCell style={{ background: "#3f51b5" }}>Ngày tháng năm</StyledTableCell>
                        <StyledTableCell style={{ background: "#3f51b5" }} align="center">
                            Họ và tên, đơn vị, người phương tiện ra vào
                        </StyledTableCell>
                        <StyledTableCell style={{ background: "#3f51b5" }} align="center">Lý do</StyledTableCell>
                        <StyledTableCell style={{ background: "#3f51b5" }} align="center">Thời gian ra</StyledTableCell>
                        <StyledTableCell style={{ background: "#3f51b5" }} align="center">Thời gian vào</StyledTableCell>
                        <StyledTableCell style={{ background: "#3f51b5" }} align="center">Nhân xét</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.date}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.infor}</StyledTableCell>
                            <StyledTableCell align="center">{row.reason}</StyledTableCell>
                            <StyledTableCell align="center">{row.timeIn}</StyledTableCell>
                            <StyledTableCell align="center">{row.timeOut}</StyledTableCell>
                            <StyledTableCell align="center">{row.consider}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}
export default SignInUp;