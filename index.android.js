/**
 * HackDash Native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Navigator,
  View,
} = React;
var HomeScene = require('./components/HomeScene');
var DashboardScene = require('./components/DashboardScene');

var HackdashNative = React.createClass({
  render: function() {
    return (
      <Navigator
        initialRoute={{name: 'home', index: 0}}
        renderScene={RouteMapper} />
    );
  }
});

var RouteMapper = function(route, navigator) {
  if(route.name === 'home') {
    return <HomeScene navigator={navigator} />;
  } else if(route.name === 'dashboard') {
    return <DashboardScene navigator={navigator} dashboard={route.dashboard} />;
  }
}

AppRegistry.registerComponent('HackdashNative', () => HackdashNative);
