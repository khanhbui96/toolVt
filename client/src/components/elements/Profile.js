import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { red } from '@material-ui/core/colors';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Root from '../Root'

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
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

function Profile() {
    const classes = useStyles({
        
    });

    return (
        <Root>
            <Card className={classes.card}>
            <CardContent className={classes.imageBox}>
                <Avatar 
                    alt="Remy Sharp" 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0MZCJhtD5rVWKSurJvfK3kD3q1xwiqCpEF9ItYpmcpq0fkx8ujw" className={classes.bigAvatar} />
            </CardContent>

            <CardContent>
                <List className={classes.root}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                            primary="Họ và tên, năm sinh, số  hiệu sĩ quan" 
                            secondary="Jan 9, 2014" 
                            />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <WorkIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                            primary="Cấp bậc, năm nhập ngũ" 
                            secondary="Jan 7, 2014" 
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <BeachAccessIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                            primary="Chức vụ, năm nhận, đơn vị" 
                            secondary="July 20, 2014" 
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                            primary="Học vị" 
                            secondary="Jan 9, 2014" 
                            />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <WorkIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                            primary="Chức danh khoa học" 
                            secondary="Jan 7, 2014" 
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <BeachAccessIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                            primary="Đảng viên dự bị, Chính thức" 
                            secondary="July 20, 2014" 
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                            primary="Qua trường (cấp học, ngành, thời gian)" 
                            secondary="Jan 9, 2014" 
                            />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <WorkIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                            primary="Văn hóa, ngoại ngữ" 
                            secondary="Jan 7, 2014" 
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <BeachAccessIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                            primary="Qua chiến đấu (cương vị, thời gian)" 
                            secondary="July 20, 2014" 
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <BeachAccessIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                            primary="Quê quán, trú quán, sức khỏe" 
                            secondary="July 20, 2014" 
                        />
                    </ListItem>
                </List>
            </CardContent>
        </Card>
        </Root>
    );
}
export default Profile