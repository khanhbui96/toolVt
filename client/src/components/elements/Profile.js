import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { red } from '@material-ui/core/colors';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import {Replay} from '@material-ui/icons'
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import { Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import Root from '../Root';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getProfileById} from '../../actions/profile.acitons';
import RepairProfile from './RepairProfile'

const useStyles = makeStyles(theme => ({

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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

function Profile(props) {
    const classes = useStyles();
    const {match, getProfileById, profile} = props;
    useEffect(()=>{
        getProfileById(match.params.id);
    },[])
    return (
        <Root>
            <Card className={classes.card}>
                <CardContent className={classes.imageBox}>
                    <Avatar
                        alt="Remy Sharp"
                        src={profile.data[0].avatar} className={classes.bigAvatar} />
                        <Link to='/technical'><Replay/></Link>
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
                                <ListItemText
                                    primary="Họ và tên"
                                    secondary={profile.data[0].name}
                                />
                            </ListItem>
                        </Grid>
                        <Grid item xs={4}>
                            <ListItem >
                                <ListItemAvatar>
                                    <Avatar>
                                        <ImageIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Năm sinh"
                                    secondary={profile.data[0].birthday}
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
                                <ListItemText
                                    primary="Số  hiệu sĩ quan"
                                    secondary={profile.data[0].idArmy}
                                />
                            </ListItem>
                        </Grid>
                        <Grid item xs={3}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <WorkIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Cấp bậc"
                                    secondary={profile.data[0].rank}
                                />
                            </ListItem>
                        </Grid>
                        <Grid item xs={3}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <WorkIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Chức vụ"
                                    secondary={profile.data[0].position}
                                />
                            </ListItem>
                        </Grid>
                        <Grid item xs={3}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <WorkIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Đơn vị"
                                    secondary={profile.data[0].position}
                                />
                            </ListItem>
                        </Grid>
                        <Grid item xs={3}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <WorkIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Năm nhập ngũ"
                                    secondary={profile.data[0].yearIn}
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
                                <ListItemText
                                    primary="Học vị"
                                    secondary={profile.data[0].degree}
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
                                <ListItemText
                                    primary="Chức danh khoa học"
                                    secondary={profile.data[0].title}
                                />
                            </ListItem>
                        </Grid>
                        <Grid item xs={6}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <BeachAccessIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Ngày vào Đảng"
                                    secondary={profile.data[0].party1}
                                />
                            </ListItem>
                        </Grid>
                        <Grid item xs={6}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <BeachAccessIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Chính Thức"
                                    secondary={profile.data[0].party2}
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
                                <ListItemText
                                    primary="Qua trường (cấp học, ngành, thời gian)"
                                    secondary={profile.data[0].school}
                                />
                            </ListItem>
                        </Grid>
                        <Grid item xs={12}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <WorkIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Văn hóa, ngoại ngữ"
                                    secondary={profile.data[0].language}
                                />
                            </ListItem>
                        </Grid>
                        <Grid item xs={12}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <BeachAccessIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Qua chiến đấu (cương vị, thời gian)"
                                    secondary={profile.data[0].batle}
                                />
                            </ListItem>
                        </Grid>
                        <Grid item xs={12}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <BeachAccessIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Quê quán, trú quán, sức khỏe"
                                    secondary={profile.data[0].homeTown}
                                />
                            </ListItem>
                        </Grid>
                    </Grid>
                    </CardContent>
                <CardContent className={classes.imageBox}><RepairProfile profile={profile}/></CardContent>
            </Card>
        </Root>
    );
};
const mapStateToProps = state=>({
    profile: state.profiles
})
export default connect(mapStateToProps, {getProfileById})(withRouter(Profile))