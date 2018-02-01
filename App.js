import React from 'react';
import { StyleSheet } from 'react-native';
import Home from './components/Home';
import Chat from './components/Chat';

import {
  Router,
  Scene,
} from 'react-native-router-flux';

class App extends React.Component {
  render() {
    return (
      <Router navigationBarStyle={styles.navBar}>
        <Scene key='root'>
          <Scene key='home' component={Home} title='Home' />
          <Scene key='chat' component={Chat} title='Chat' />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green'
  }
});

export default App;
