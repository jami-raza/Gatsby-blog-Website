import { graphql,Link,useStaticQuery } from 'gatsby';
import React from 'react';
import Styles from './Home.module.css';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from '@contentful/rich-text-types'
import Markdown from 'react-markdown';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader'
import Truncate from 'react-truncate';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop:50,
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      paddingBottom:20,
      flexGrow:10,
      backgroundColor:'transparent',
      
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 500,
    },
    card:{
      display: 'flex',
      maxWidth:'720px',
      height:'320px',
      marginBottom:'50px'
    },
    link:{
      textDecoration:'none',
    },

  }),
);

const Home = () => {
  const classes = useStyles();

    const data = useStaticQuery(graphql`
    query {
    allContentfulBlogPost {
      nodes {
        author
        date
        heading
        slug
        image {
          fluid {
            src
          }
          description
        }
        content {
          json
        }
      }
    }
  }
`
)

    console.log(data)
    


    return (
      <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid item xs={8} >
        <Paper className={classes.paper}style={{marginBottom:'50px'}}>
          <Grid item xs={12}>
          <Typography component="h4" variant="h4" style={{padding:'10px 10px 50px 10px',color: "#3f51b5",}}>
            Trending
          </Typography>
          <Link to={`/blogs/${data.allContentfulBlogPost.nodes[0].slug}`} className={classes.link}>
          <Card className={classes.card}>
            
          
        <CardMedia
        className={classes.cover}
        image={data.allContentfulBlogPost.nodes[0].image.fluid.src}
        title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
         
          <Typography component="h4" variant="h4">
            
              {data.allContentfulBlogPost.nodes[0].heading}
            
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" style={{textAlign:'left'}}>
            <Truncate
            lines={3}
            >
              {documentToReactComponents(data.allContentfulBlogPost.nodes[0].content.json)}
            </Truncate>
          </Typography>
        </CardContent>
        </div>
        </Card>
        </Link>
        <Link to={`/blogs/${data.allContentfulBlogPost.nodes[10].slug}`} className={classes.link}>
        <Card className={classes.card}>
            
          
        <CardMedia
        className={classes.cover}
        image={data.allContentfulBlogPost.nodes[10].image.fluid.src}
        title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
         
          <Typography component="h4" variant="h4">
            
              {data.allContentfulBlogPost.nodes[10].heading}
            
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            <Truncate
            lines={3}
            >
              {documentToReactComponents(data.allContentfulBlogPost.nodes[10].content.json)}
            </Truncate>
          </Typography>
        </CardContent>
        </div>
        </Card>
        </Link>
        <Link to={`/blogs/${data.allContentfulBlogPost.nodes[6].slug}`} className={classes.link}>
        <Card className={classes.card}>
            
          
        <CardMedia
        className={classes.cover}
        image={data.allContentfulBlogPost.nodes[6].image.fluid.src}
        title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
         
          <Typography component="h4" variant="h4">
            
              {data.allContentfulBlogPost.nodes[6].heading}
            
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            <Truncate
            lines={3}
            >
              {documentToReactComponents(data.allContentfulBlogPost.nodes[6].content.json)}
            </Truncate>
          </Typography>
        </CardContent>
        </div>
        </Card>
        </Link>
          </Grid>
          
        </Paper>
        
      </Grid>
      <Grid item xs={4} className={Styles.sidebar}>
      
        <Paper className={classes.paper}>
        <Typography component="h5" variant="h5" style={{padding:'0px 0px 10px 0px',color: "#3f51b5",}}>
            Popular
          </Typography>
          <Link className={classes.link} to={`/blogs/${data.allContentfulBlogPost.nodes[4].slug}`}>
          <Card style={{marginTop:'20px'}}>
            <CardContent>
            <Typography component="h6" variant="h6">
            
              {data.allContentfulBlogPost.nodes[4].heading}
            
          </Typography>
            </CardContent>
          </Card>
          </Link>
          <Link className={classes.link} to={`/blogs/${data.allContentfulBlogPost.nodes[5].slug}`}>
          <Card style={{marginTop:'20px'}}>
            <CardContent>
            <Typography component="h6" variant="h6">
            
              {data.allContentfulBlogPost.nodes[5].heading}
            
          </Typography>
            </CardContent>
          </Card>
          </Link>
          <Link className={classes.link} to={`/blogs/${data.allContentfulBlogPost.nodes[2].slug}`}>
          <Card style={{marginTop:'20px'}}>
            <CardContent>
            <Typography component="h6" variant="h6">
            
              {data.allContentfulBlogPost.nodes[2].heading}
            
          </Typography>
            </CardContent>
          </Card>
          </Link>
          </Paper>
      </Grid>
      
      </Grid>
      </div>

    )
}


export default Home;
