import React, {useEffect} from 'react';
import Root from '../Root';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import People from '../elements/People';
import SignInUp from '../elements/SignInUp';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {getAllProfiles} from '../../actions/profile.acitons';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  page: {
    maxWidth: '94vw',
  }
}));

const Technical = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const {profiles, getAllProfiles} = props ;
  useEffect(()=>{
    if(!localStorage.getItem('jwt')){
        props.history.push('/')
    };
    getAllProfiles();
  },[])
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
      <Root>
        <div className={classes.root}>
        <AppBar position="static">
            <Tabs value={value} onChange={handleChange}>
            <Tab label="Cán bộ, nhân viên chuyên môn" />
            <Tab label="Đăng kí ra vào kho và khu kĩ thuật" />
            </Tabs>
        </AppBar>
        {value === 0 && <div className={classes.page}><People profiles={profiles}/></div>}
        {value === 1 && <div className={classes.page}><SignInUp/></div>}
        </div>
    </Root>
  );
}
const mapStateToProps = state=>({
  profiles: state.profiles
});
export default connect(mapStateToProps, {getAllProfiles})(withRouter (Technical))