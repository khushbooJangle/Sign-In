import React from "react";
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
import * as actions from '../store/actions/auth';
import { Form, Input } from 'antd';
import Copyright from './Copyright';
import { makeStyles } from '@material-ui/core/styles';
import '../components/styles.css';




class SignInSide extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();

  }
  
// function SignInSide(props){
  
//   const onFinish = (values, error) => {
//     console.log('Success')
//     console.log('Received values of form: ', values);
//     console.log(error)
//     // if (!error) {
//     //     props.onAuth(values.username, values.password);
//     //     props.history.push('/employee/dashboard');
//     //   }
//   };
  
  
  handleSubmit=(event, error)=>{
    event.preventDefault();
    console.log('Success')
    console.log(this.usernameRef.current.value, this.passwordRef.current.value);
    this.props.onAuth(this.usernameRef.current.value, this.passwordRef.current.value);
    console.log(this.props.error)
    // if(!this.props.error){
    //   this.props.history.push('/employee/dashboard');
    
    // }
      
  }
  
  render() {
    let errorMessage = null;
  if (this.props.error) {
      errorMessage = (
        <>
          <p>{this.props.error.message}</p>
        </>
      );
  }
  // render(){
    return (
      <div>
        {errorMessage}
        {
          this.props.loading ?
          <CircularProgress />
          :
          <Grid container component="main" className='root'>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className='image' />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className='paper'>
              <Avatar className='avatar'>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              {/* <Form onFinish={onFinish} className="login-form" name="validate_other">
                  `<Form.Item 
                  label="Username"
                  name = "username"
                  rules={[
                    {
                      required: true,
                      message: 'please enter username',
                    },
                  ]} >
                  <Input />
                  </Form.Item > `
                  <Form.Item 
                  label="Password"
                  name = "password"
                  rules={[
                    {
                      required: true,
                      message: 'please enter password',
                    },
                  ]} >
                  <Input type='password'/>
                  </Form.Item > `
                        <Form.Item>
                        <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                            Login
                        </Button>
                        Or 
                        <Link 
                            style={{marginRight: '10px'}} 
                            to='#'> forget password
                        </Link>
                        </Form.Item>
                    </Form> */}
              <form className='form' onSubmit ={(event, error)=>this.handleSubmit(event, error)}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="username"
                  autoComplete="email"
                  autoFocus
                  inputRef={this.usernameRef}
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
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  htmltype='submit'
                  fullWidth
                  variant="contained"
                  color="primary"
                  className='submit'
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      {"Need Assistance.."}
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

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password)) 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignInSide);
