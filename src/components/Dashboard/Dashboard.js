import React from 'react';
import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler = () =>{
    this.props.logout();
    this.props.history.push('/');
  }
    render() {

        return (
            <>
            <Button onClick={this.clickHandler}>LogOut</Button>
            </>                 
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout()) 
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Dashboard));