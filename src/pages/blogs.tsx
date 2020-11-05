import React from 'react'
import {graphql,useStaticQuery,Link} from 'gatsby';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Truncate from 'react-truncate';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Layout from '../Components/Layout';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 10,
      paddingTop:'50px'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: "#3f51b5",
      paddingBottom:20,
      flexGrow:10,
      fontSize:'36px'
      
    },
    Card:{
        padding: theme.spacing(2),
        maxWidth: 345,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    media:{
        height: 140,
    },
    link:{
        textDecoration:'none',
    }
  }),
);
function Blogs(){
    const classes = useStyles();
    const data = useStaticQuery(graphql`
    query MyQuery {
        allContentfulBlogPost {
          nodes {
            author
            date(formatString: "DD MMMM YYYY")
            heading
            slug
            image {
              fluid {
                src
              }
            }
            content {
              json
            }
          }
        }
      }
      
    `)

      console.log(data);
      
    return(
        <Layout>
        <div className={classes.root}>
        <Grid container spacing={5}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Blogs</Paper>
        </Grid>
        {data.allContentfulBlogPost.nodes.map((obj,index)=>{
                return (
        <Grid item xs={6} key={index}>

          <Link to={`/blogs/${obj.slug}`} className={classes.link}>
              <Card className={classes.Card}>
                  <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={obj.image.fluid.src}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" style={{color:"#5C5858"}}>
                            {obj.heading}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <Truncate
                            lines={4}
                            >
                                {documentToReactComponents(obj.content.json)}
                            </Truncate>
                        </Typography>
                    </CardContent>

                  </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Read More
                        </Button>
                    </CardActions>
              </Card>
          </Link>
          
        </Grid>
         )
        })}
        </Grid> 
    </div>    
    </Layout>
    )
}
export default Blogs;