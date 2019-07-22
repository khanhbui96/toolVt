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
import { Link } from 'react-router-dom';
import { Typography, IconButton, Fab, Select, InputLabel, FormControl, Button, Container } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { vi } from "date-fns/locale";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
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

function createData(name, rank, position, unit, infor) {
    return { name, rank, position, unit, infor };
}

const rows = [
    createData('bui trong khanh', '1/', 'bt', 'bVT', <a to='/test'>xem thêm</a>),

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
    return (
        <Paper className={classes.root}>
            <Typography style={{ textAlign: 'center' }} variant='h4'>Đăng kí ra vào kho và khu kỹ thuật</Typography>
            <div>
                <form >
                    <TextField
                        style={{ margin: 8 }}
                        placeholder='Tìm kiếm'
                    />
                    <IconButton ><Clear /></IconButton>
                </form>
                <form className={classes.container} >
      <TextField
        locale={vi}
        id="date"
        label="Birthday"
        type="date"
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
      />
    </form>
    <form className={classes.container} >
      <TextField
        id="date"
        label="Birthday"
        type="time"
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
      />
    </form>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">Chức vụ</InputLabel>
                    <Select native >
                        <option value="" />
                        <option value={10}>Tiểu đoàn trưởng</option>
                        <option value={20}>Chính trị viên tiểu đoàn</option>
                        <option value={30}>Đại đội trưởng</option>
                        <option value={20}>Chính trị viên Đại đội</option>
                        <option value={20}>Nhân viên Tài chính</option>
                        <option value={20}>Nhân viên Quân khí</option>
                        <option value={20}>Quân y</option>
                        <option value={20}>Thợ sữa chữa</option>
                        <option value={20}>Lái xe</option>
                    </Select>
                </FormControl>
                <Fab
                    onClick={handleClickOpen}
                    size="medium"
                    color="primary"
                    aria-label="Add"
                    className={classes.margin}
                    style={{ float: 'right' }}>
                    <Add />
                </Fab>
                <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="Close">
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                Tạo mới
                            </Typography>
                            <Button color="inherit" onClick={handleClose}>
                                save
                             </Button>
                        </Toolbar>
                    </AppBar>
                    <List>
                    <Container style={{
                        boxSizing: 'content-box',
                        padding: 20  
                    }}>
                    <TextField
                        style={{width: "100%", marginTop: 6}}
                        id="standard-password-input"
                        label="Họ và tên, năm sinh, số hiệu sĩ quan"
                    />
                     <TextField
                        style={{width: "100%", marginTop: 6}}
                        id="standard-password-input"
                        label="Cấp bậc, năm nhập ngũ"
                    />
                     <TextField
                        style={{width: "100%", marginTop: 6}}
                        id="standard-password-input"
                        label="Chức vụ, năm nhận, đơn vị"
                    />
                     <TextField
                        style={{width: "100%", marginTop: 6}}
                        id="standard-password-input"
                        label="Học vị"
                    />
                     <TextField
                        style={{width: "100%", marginTop: 6}}
                        id="standard-password-input"
                        label="Chức danh khoa học"
                    />
                     <TextField
                        style={{width: "100%", marginTop: 6}}
                        id="standard-password-input"
                        label="Đảng viên dự bị, Chính thức"
                    />
                     <TextField
                        style={{width: "100%", marginTop: 6}}
                        id="standard-password-input"
                        label="Qua trường (cấp học, ngành, thời gian)"
                    />
                     <TextField
                        style={{width: "100%", marginTop: 6}}
                        id="standard-password-input"
                        label="Văn hóa, ngoại ngữ"
                    />
                    <TextField
                        style={{width: "100%", marginTop: 6}}
                        id="standard-password-input"
                        label="Qua chiến đấu (cương vị, thời gian)"
                    />
                    <TextField
                        style={{width: "100%", marginTop: 6}}
                        id="standard-password-input"
                        label="Quê quán, trú quán, sức khỏe"
                    />
                    </Container>
                    </List>
                </Dialog>
            </div>
            
            <Table className={classes.table}>
                <TableHead>
                    <TableRow style={{background:"#3f51b5"}}>
                        <StyledTableCell style={{background:"#3f51b5"}}>Họ và tên</StyledTableCell>
                        <StyledTableCell style={{background:"#3f51b5"}} align="center">
                            Cấp bậc
                        </StyledTableCell>
                        <StyledTableCell  style={{background:"#3f51b5"}} align="center">Chức vụ</StyledTableCell>
                        <StyledTableCell  style={{background:"#3f51b5"}} align="center">Đơn vị</StyledTableCell>
                        <StyledTableCell  style={{background:"#3f51b5"}} align="center">Thông tin chi tiết</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.rank}</StyledTableCell>
                            <StyledTableCell align="center">{row.position}</StyledTableCell>
                            <StyledTableCell align="center">{row.unit}</StyledTableCell>
                            <StyledTableCell align="center"><Link to='/profile'>Xem</Link></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}
export default SignInUp;