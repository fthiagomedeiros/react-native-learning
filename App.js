import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TextInput} from 'react-native';
import {fetchAddress} from './api/apiCep';

class App extends Component {
  state = {
    count: 0,
    neighborhood: 'No data loaded',
    phone: 'sss',
  };

  async componentDidMount(): void {
    let address = await fetchAddress(58401470);
    this.setState({neighborhood: address});
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/logo.svg')} />

        <Text>{this.state.neighborhood}</Text>

        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => {
            this.setState({phone: text});
          }}
          value={this.state.phone}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
});

export default App;
