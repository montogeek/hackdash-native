/**
 * HackDash Native
 */
'use strict';

var React = require('react-native');
var {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} = React;
var DashboardStore = require('../stores/DashboardStore');
var {ASSETS_BASE_URL} = require('../constants/HackdashConstants');

module.exports = React.createClass({

  render: function() {
    return (
      <TouchableHighlight onPress={() => this._openProject(this.props.project._id)}>
        <Image source={{uri: ASSETS_BASE_URL + this.props.project.cover}} style={styles.row} resizeMode='cover'>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{this.props.project.title}</Text>
          </View>
        </Image>
      </TouchableHighlight>
    );
  },

  _openProject: function(_id) {
                
  }
});

var styles = StyleSheet.create({
  row: {
    height: 80,
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,.58)',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    paddingLeft: 10,
    fontSize: 18
  }
});
