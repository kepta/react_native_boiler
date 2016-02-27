import React, { Component, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from './state/actions';

function mapStateToProps(state) {
  return { login: state.login };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <View style={{ marginTop: 100}}>
        <Text>
          Check
        </Text>
      </View>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
