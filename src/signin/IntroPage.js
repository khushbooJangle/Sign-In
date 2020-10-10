import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './IntroPage.css';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class Main extends React.Component {
    static propTypes = {

    }

    render() {
        return (
            <>
                <div>
                    <h1 style={{marginTop:'30px', marginLeft:'50px'}}> Welcome to SRMS </h1>
                </div>
                <div className={this.props.classes.div}>
                    <Card className={this.props.classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={this.props.classes.media}
                            image="https://source.unsplash.com/random"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                EMPLOYEE
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                <Link to='/employee'>Sign In</Link>
                            </Button>
                        </CardActions>
                    </Card>
                    <Card className={this.props.classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={this.props.classes.media}
                            image="https://source.unsplash.com/random"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                STUDENT
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            <Link to='/student'>Sign In</Link>
                            </Button>
                        </CardActions>
                    </Card>
                    <Card className={this.props.classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={this.props.classes.media}
                            image="https://source.unsplash.com/random"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                OWNER
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                <Link to='/owner'>Sign In</Link>
                            </Button>
                        </CardActions>
                    </Card>
                </div>
         </>
        )
    }
}


const useStyles = {
    div: {
        display: "flex",
        margin: '30px',
    },
    root: {
      maxWidth: 345,
      margin:'70px',
    },
    media: {
      height: 140,
    },
  };

export default withStyles(useStyles)(Main);