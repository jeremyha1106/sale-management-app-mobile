import * as Expo from 'expo';
import React, { Component } from 'react';
import { StyleProvider } from 'native-base';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import App from '../App';
import getTheme from '../../native-base-theme/components';
import variables from '../../native-base-theme/variables/platform';

class Setup extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false })),
      isReady: false
    };
  }

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf')
    });

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady || this.state.isLoading) {
      return <Expo.AppLoading />
    }

    return (
      <StyleProvider style={getTheme(variables)}>
        <Provider store={this.state.store}>
          <App />
        </Provider>
      </StyleProvider>
    );  
  }
}

export default Setup;
