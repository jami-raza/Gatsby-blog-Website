import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'gatsby';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    navigation:{
      marginRight:'50px',
      paddingRight:'10px',
    },
    link:{
      textDecoration:'none',
      color:'#fff'
    }
  }),
);

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
            
          
          <Typography variant="h4" className={classes.title}>
            <Link className={classes.link} to ="/">Tech Blogger</Link>
          </Typography>
          <Typography variant="subtitle1" className={classes.navigation}>
            <Link className={classes.link} to="/">Home</Link>
          </Typography>
          <Typography variant="subtitle1" className={classes.navigation}>
            <Link className={classes.link} to="/about">About</Link>
          </Typography>
          <Typography variant="subtitle1" className={classes.navigation}>
           <Link className={classes.link} to="/blogs"> Blogs</Link>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
