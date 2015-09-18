/**
 * HackDash Native
 */
'use strict';

var React = require('react-native');
var {
  ListView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} = React;
var DashboardStore = require('../stores/DashboardStore');
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
        <ListView
          automaticallyAdjustContentInsets={false}
          dataSource={this.state.dataSource}
          renderRow={rowData =>
            <TouchableHighlight onPress={() => this._openDashboard(rowData)}>
              <Image source={{uri: ASSETS_BASE_URL + rowData.covers[0]}} style={styles.row} resizeMode='cover'>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>{rowData.title || rowData.domain}</Text>
                </View>
              </Image>
            </TouchableHighlight>
          } />
    );
  },
  componentDidMount: function() {
    DashboardStore.getAll().then(data => this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data)
    }));                 
  },
  _openDashboard: function(dashboard) {
    this.props.navigator.push({
      name: 'dashboard',
      dashboard,
    });
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
