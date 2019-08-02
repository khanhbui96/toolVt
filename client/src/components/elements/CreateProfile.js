import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Add } from '@material-ui/icons'
import { Typography, IconButton, Fab, Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import ImageIcon from '@material-ui/icons/Image';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile.acitons';
import FileBase64 from 'react-file-base64';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const currencies = [
    {
        value: '',
        label: '',
      },
    {
      value: 'Tiểu đoàn trưởng',
      label: 'Tiểu đoàn trưởng',
    },
    {
      value: 'Chính trị viên Tiểu đoàn',
      label: 'Chính trị viên Tiểu đoàn',
    },
    {
      value: 'Đại đội trưởng',
      label: 'Đại đội trưởng',
    },
    {
      value: 'Chính trị viên Đại đội',
      label: 'Chính trị viên Đại đội',
    },
    {
        value: 'Trung đội trưởng',
        label: 'Trung đội trưởng',
      },
      {
        value: 'Lái xe',
        label: 'Lái xe',
      },
      {
        value: 'Thợ sữa chữa',
        label: 'Thợ sữa chữa',
      }
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

function CreateProfile(props) {
    const classes = useStyles();
    const { createProfile } = props;
    const [values, setValues] = React.useState({
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
      });
    const [open, setOpen] = React.useState(false);
    const [file, chooseFile] = React.useState([]);
    
    const [data, changeData] = React.useState({
        battled: "",
        birthday: "",
        degree: "",
        homeTown: "",
        idArmy: "",
        language: "",
        name: "",
        unit: "",
        position: "",
        rank: "",
        school: "",
        title: "",
        yearIn: ""
    });
    function handleClickOpen() {
        setOpen(true);
    }
    function handleClose() {
        setOpen(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        if(file.length){
            formData.append('file', file[0].base64);
        }else{
            formData.append('file', '');
        }
        formData.append('data', JSON.stringify(data));
        createProfile(formData);
    }
    const handleChange = (e) => {
        changeData({ ...data, [e.target.name]: e.target.value })
    }
    const handleChangeSelect = name => event => {
        changeData({ ...data, [name]: event.target.value });
      };
    const getFiles = (files) => {
        chooseFile(files)
    }
    return (
        <React.Fragment>
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
                <form encType='multipart/form-data' onSubmit={handleSubmit}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="Close">
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                Tạo mới
                            </Typography>
                            <Button color="inherit" type="submit" onClick={handleClose}>
                                Lưu
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <List>
                        <Card className={classes.card}>
                            <CardContent className={classes.imageBox}>
                                <Button
                                    style={{ borderRadius: '50%' }}
                                    component="label"
                                >
                                    <div style={{ display: "none" }}>
                                        <FileBase64
                                            multiple={true}
                                            onDone={getFiles} />
                                    </div>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={file.length ? file[0].base64 : "https://www.digitalseed.dk/wp-content/uploads/2016/02/avatar_male.jpg"} className={classes.bigAvatar} >
                                    </Avatar>
                                </Button>
                            </CardContent>

                            <CardContent>
                                <Grid container spacing={3}>
                                    <Grid item xs={4}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <ImageIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <TextField
                                                style={{ width: "60%", marginBottom: 24 }}
                                                id="standard-password-input"
                                                label="Họ và tên"
                                                name='name'
                                                onChange={handleChange}
                                            />
                                        </ListItem>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <ImageIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <TextField
                                                style={{ width: "60%", marginBottom: 24 }}
                                                id="standard-password-input"
                                                label="Năm sinh"
                                                name='birthday'
                                                onChange={handleChange}
                                            />
                                        </ListItem>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <ImageIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <TextField
                                                style={{ width: "60%", marginBottom: 24 }}
                                                id="standard-password-input"
                                                label="Số hiệu sĩ quan"
                                                name="idArmy"
                                                onChange={handleChange}
                                            />
                                        </ListItem>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <ImageIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <TextField
                                                style={{ width: "60%", marginBottom: 24 }}
                                                id="standard-password-input"
                                                label="Cấp bậc"
                                                name="rank"
                                                onChange={handleChange}
                                            />
                                        </ListItem>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <ImageIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <TextField
                                                select
                                                label="Chức vụ"
                                                style={{ width: "60%", marginBottom: 24 }}
                                                value={data.position.currency}
                                                onChange={handleChangeSelect('position')}
                                                SelectProps={{
                                                    native: true,
                                                    MenuProps: {
                                                        className: classes.menu,
                                                    },
                                                }}
                                            >
                                                {currencies.map(option => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </TextField>
                                        </ListItem>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <ImageIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <TextField
                                                style={{ width: "60%", marginBottom: 24 }}
                                                id="standard-password-input"
                                                label="Đơn vị"
                                                name="unit"
                                                onChange={handleChange}
                                            />
                                        </ListItem>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <ImageIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <TextField
                                                style={{ width: "60%", marginBottom: 24 }}
                                                id="standard-password-input"
                                                label="Năm nhập ngũ"
                                                name="yearIn"
                                                onChange={handleChange}
                                            />
                                        </ListItem>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <ImageIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <TextField
                                                style={{ width: "60%", marginBottom: 24 }}
                                                id="standard-password-input"
                                                label="Học vị"
                                                name="degree"
                                                onChange={handleChange}
                                            />
                                        </ListItem>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <ImageIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <TextField
                                                style={{ width: "60%", marginBottom: 24 }}
                                                id="standard-password-input"
                                                label="Chức danh khoa học"
                                                name="title"
                                                onChange={handleChange}
                                            />
                                        </ListItem>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <ImageIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <TextField
                                                style={{ width: "60%", marginBottom: 24 }}
                                                name="party1"
                                                label="Ngày vào Đảng"
                                                onChange={handleChange}
                                            />
                                        </ListItem>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <ImageIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <TextField
                                                style={{ width: "60%", marginBottom: 24 }}
                                                name="party2"
                                                label="Ngày chính thức"
                                                onChange={handleChange}
                                            />
                                        </ListItem>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <ImageIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <TextField
                                                style={{ width: "80%", marginBottom: 24 }}
                                                id="standard-password-input"
                                                label="Qua trường (cấp học, ngành, thời gian)"
                                                name="school"
                                                onChange={handleChange}
                                            />
                                        </ListItem>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <ImageIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <TextField
                                                style={{ width: "80%", marginBottom: 24 }}
                                                id="standard-password-input"
                                                label="Văn hóa - Ngoại ngữ"
                                                name="language"
                                                onChange={handleChange}
                                            />
                                        </ListItem>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <ImageIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <TextField
                                                style={{ width: "80%", marginBottom: 24 }}
                                                id="standard-password-input"
                                                label="Qua chiến đấu ( Cương vị, thời gian"
                                                name="battled"
                                                onChange={handleChange}
                                            />
                                        </ListItem>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <ImageIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <TextField
                                                style={{ width: "80%", marginBottom: 24 }}
                                                id="standard-password-input"
                                                label="Quê quán trú quán sức khỏe"
                                                name="homeTown"
                                                onChange={handleChange}
                                            />
                                        </ListItem>
                                    </Grid>
                                </Grid> </CardContent>
                        </Card>
                    </List>
                </form>

            </Dialog>
        </React.Fragment>

    )
}
const mapStateToProps = state => ({

});
export default connect(mapStateToProps, { createProfile })(CreateProfile);