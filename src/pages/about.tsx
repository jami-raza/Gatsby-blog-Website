import React from 'react'
import Layout from '../Components/Layout';
import Grid from '@material-ui/core/Grid';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop:50,
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: "#3f51b5",
      paddingBottom:20,
      flexGrow:10,
      fontSize:'36px'
    },
    typo:{
        padding: theme.spacing(2),
        textAlign: 'left',
        color: "#5C5858",
        paddingBottom:20,
        flexGrow:10 
    }
}));

const About = () => {
    const classes = useStyles();
    return (
        <Layout>
            <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                   <Paper className={classes.paper}>About</Paper>
                </Grid>
                <Grid item xs={12}>
                   <Paper className={classes.typo}>
                       <Typography component="p" >
                       Tech Crunch is considered as one of the well knows and popular website for 
                       providing quality information related to new gadgets and technology news. Also, 
                       Tech Crunch is one of the leading technology media on the internet as well as one 
                       of the most famous technology blog online. Mainly this provides articles related 
                       to internet portals, latest tech product reviews and news etc.
                       </Typography>
                   </Paper>
                </Grid>
            </Grid>
            </div>
            
        </Layout>
    )
}
export default About;