import React, {PureComponent} from 'react';
import {Button, Text, View} from 'react-native';
import {connect} from 'react-redux';
import SampleActions from '../../Redux/SampleRedux';
import ApplicationStyles from '../../Themes/ApplicationStyles';

class MainScreen extends PureComponent {
  render() {
    return (
      <View style={ApplicationStyles.containerCenter}>
        <Text> Main Screen </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
