import React from 'react';
import {
  getTopBarBlueStyle,
  statusBarStyle
} from '../../Lib/HeaderStylingHelper';
import {Colors} from '../../Themes';
import PlanActivity from './PlanActivity';
import UnexpectedActivity from './UnexpectedActivity';
import {TabView, SceneMap} from 'react-native-tab-view';
import renderTabBar from '../../Components/TabBar';
import {SafeAreaView} from 'react-native';

const Plan = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Rencana Kegiatan'},
    {key: 'second', title: 'Kegiatan Tak Terduga'}
  ]);

  const renderScene = SceneMap({
    first: PlanActivity,
    second: UnexpectedActivity
  });

  return (
    <SafeAreaView
      style={{flex: 1, borderBottomWidth: 0.5, borderBottomColor: 'lightgray'}}>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
      />
    </SafeAreaView>
  );
};

Plan.options = {
  statusBar: statusBarStyle(Colors.navy),
  topBar: {
    noBorder: true,
    ...getTopBarBlueStyle('TO-DO LIST BULANAN', Colors.white, Colors.navy, true)
  }
};

export default Plan;
