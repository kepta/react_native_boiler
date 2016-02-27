import React, {
  AppRegistry,
  Component,
} from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/state/reducers';

import App from './src/index';

const store = createStore(reducers);

class intranet extends Component {
  render() {
    return (
      <Provider store = {store}>
        <App />
      </Provider>
    );
  }
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('intranet', () => intranet);
