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
var DashboardItem = require('./DashboardItem');

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Header navigator={this.props.navigator} />
        <DashboardItem dashboard={this.props.dashboard} />
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
