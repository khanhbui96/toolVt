import React, {useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { Clear} from '@material-ui/icons'
import { Link } from 'react-router-dom';
import { Typography, IconButton,  Select, InputLabel, FormControl,} from '@material-ui/core';

import { red } from '@material-ui/core/colors';
import CreateProfile from './CreateProfile'

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
    avatar: {
        backgroundColor: red[500],
    },
    bigAvatar: {
        margin: 10,
        width: 200,
        height: 200,
    },
    imageBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

function People(props) {
    const classes = useStyles();
    const rows = props.profiles.data.map((profile, index)=>{
        return createData(profile.name, profile.rank, profile.position , profile.unit, profile._id)
    })
    const handleChange = (e) => {
        console.log(e.target.value)
        // changeData({ ...data, [e.target.name]: e.target.value })
    }
    return (
        <Paper className={classes.root}>
            <Typography style={{ textAlign: 'center' }} variant='h4'>Cán bộ, nhân viên chuyên môn</Typography>
            <div>
                <form >
                    <TextField
                        style={{ margin: 8 }}
                        placeholder='Tìm kiếm'
                        name='keyword'
                        onChange={handleChange}
                    />
                    <IconButton ><Clear /></IconButton>
                </form>

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">Cấp bậc</InputLabel>
                    <Select native >
                        <option value="" />
                        <option value={10}>Cấp úy</option>
                        <option value={20}>Cấp tá</option>
                    </Select>
                </FormControl>
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
                <CreateProfile/>
            </div>

            <Table className={classes.table}>
                <TableHead>
                    <TableRow style={{ background: "#3f51b5" }}>
                        <StyledTableCell style={{ background: "#3f51b5" }}>Họ và tên</StyledTableCell>
                        <StyledTableCell style={{ background: "#3f51b5" }} align="center">
                            Cấp bậc
                        </StyledTableCell>
                        <StyledTableCell style={{ background: "#3f51b5" }} align="center">Chức vụ</StyledTableCell>
                        <StyledTableCell style={{ background: "#3f51b5" }} align="center">Đơn vị</StyledTableCell>
                        <StyledTableCell style={{ background: "#3f51b5" }} align="center">Thông tin chi tiết</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                            <StyledTableCell align="center">{row.rank}</StyledTableCell>
                            <StyledTableCell align="center">{row.position}</StyledTableCell>
                            <StyledTableCell align="center">{row.unit}</StyledTableCell>
                            <StyledTableCell align="center"><Link to={`/technical/profile/${row.infor}`}>Xem</Link></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}
export default People;