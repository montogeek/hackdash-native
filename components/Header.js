/**
 * HackDash Native
 */
'use strict';

var React = require('react-native');
var {
  TouchableHighlight,
  View,
  Image,
  Text,
  StyleSheet,
} = React;

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.base}>
        <Text style={styles.button}
              onPress={this._back}>{this.props.navigator ? 'back' : ''}</Text>
        <Image
          style={styles.logo}
          source={require('image!app_logo')}/>
      </View>
    );
  },

  _back: function() {
    if(this.props.navigator.getCurrentRoutes().length) {
      this.props.navigator.pop();
    }
  }
});

var styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
  },
  logo: {
    marginLeft: 10,
    width: 50,
    height: 55,
  }
});
