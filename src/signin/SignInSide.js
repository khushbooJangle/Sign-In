import React from "react";
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../actions/index';
import Copyright from './Copyright';
import { withStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';


const styles = (theme) => ({
  root: {
    height: '100vh',
    font: 'icon',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    font:'icon',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    font:'icon',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    font:'icon'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});


class SignInSide extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
    this.state={
      checked: true
    }

  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Success onClick')
    this.props.onAuth(this.usernameRef.current.value, this.passwordRef.current.value);
  }

  render() {

    const { classes } = this.props;

    let errorMessage = null;
    if (this.props.error) {
      errorMessage = (
        <>
          <Alert severity="error" style={{font:'icon'}}>{this.props.error.message}</Alert>
        </>
      );
    }
    let authRedirect = null;
    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to="/dashboard" />
    }
    return (
      <div>
        
        {authRedirect}
        {errorMessage}
        {
          this.props.loading ?
            <CircularProgress />
            :
            <Grid container component="main" className={classes.root}>
              <CssBaseline />
              <Grid item xs={false} sm={4} md={7} className={classes.image} />
              <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                  <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5" style={{ font: 'icon' }}>
                    Sign in
              </Typography>
                  <form className={classes.form} onSubmit={(event) => this.handleSubmit(event)} style={{ font: 'icon' }}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="username"
                      label="Username"
                      name="username"
                      autoComplete="username"
                      autoFocus
                      inputRef={this.usernameRef}
                      style={{ font: 'icon' }}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      inputRef={this.passwordRef}
                      style={{ font: 'icon' }}
                    />
                    <Grid item>
                      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <Link href="#" variant="body2" style={{ font: 'icon' }}>
                        Forgot password?
                    </Link>
                    </Grid>
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" style={{font:'icon'}}/>}
                      label="Remember me"
                    />
                    <FormControlLabel
                      checked={this.state.checked}
                      control={<Checkbox value="privacy" color="primary" />}
                      label="I accept the Privacy Policy and Term of services of Power2Create"

                    />
                    <Button
                      type="submit"
                      htmltype='submit'
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      style={{ font: 'icon' }}
                    >
                      Sign In
                </Button>
                    <Grid container>

                      <Grid item>
                        <Link href="#" variant="body2" style={{ font: 'icon' }}>
                          Need Assistance?
                    </Link>
                      </Grid>
                    </Grid>
                    <Box mt={5}>
                      <Copyright />
                    </Box>
                  </form>
                </div>
              </Grid>
            </Grid>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (username, password) => dispatch(actions.auth(username, password)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
  }
}
SignInSide.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SignInSide));
