/**
 * HackDash Native
 */
'use strict';

var React = require('react-native');
var {
  View,
  Text,
  StyleSheet,
} = React;
var Header = require('./Header');
var Dashboards = require('./Dashboards');

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Header />
        <Dashboards navigator={this.props.navigator} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353d45',
  }
});
