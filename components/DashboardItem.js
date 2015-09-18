/**
 * HackDash Native
 */
'use strict';

var React = require('react-native');
var {
  ListView,
  Text,
  View,
  StyleSheet,
} = React;
var ProjectStore = require('../stores/ProjectStore');
var Project = require('./Project');
var {ASSETS_BASE_URL} = require('../constants/HackdashConstants');

module.exports = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});               
    return {
      dataSource: ds.cloneWithRows([])
    };
  },

  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{this.props.dashboard.title || this.props.dashboard.domain}</Text>
          <Text style={styles.description}>{this.props.dashboard.description}</Text>
        </View>
        <ListView
          automaticallyAdjustContentInsets={false}
          dataSource={this.state.dataSource}
          renderRow={rowData => <Project project={rowData} />} />
      </View>
    );
  },

  componentDidMount: function() {
    ProjectStore.getAllByDomain(this.props.dashboard.domain)
      .then(data => this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data)
      }));
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,         
  },
  header: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',     
  },
  description: {
    fontSize: 14,
    color: '#fff',     
  },
});
