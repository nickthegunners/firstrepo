import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSomething } from '../../redux/actions';

class Page1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  componentWillMount(){
    this.props.dispatchFetchSomething();
  }

  render(){
    return (
      <div className="page1">
        <h1>Page 1</h1>
        {
          this.props.first.activity.map((item, key) => (
            <p key={key}>{item.text}</p>
          ))
        }
      </div>
    );
  }

}

const mapStateToProps = (state)=> {
  return {
    /*contacts: state.ContactsState,
    activities: state.ActivitiesState,
    professional: state.ProfessionalState,*/
    //token: state.AccountState,
    first: state.FirstState,
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    dispatchFetchSomething: fetchSomething,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Page1);