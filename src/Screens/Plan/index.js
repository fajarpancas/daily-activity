import React from 'react';
import {getTopBarBlueStyle} from '../../Lib/HeaderStylingHelper';
import {Colors} from '../../Themes';
import PlanActivity from './PlanActivity';
import UnexpectedActivity from './UnexpectedActivity';
import {TabView, SceneMap} from 'react-native-tab-view';
import renderTabBar from '../../Components/TabBar';

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
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
    />
  );
};

Plan.options = {
  topBar: {
    noBorder: true,
    ...getTopBarBlueStyle('Kegiatan', 'black', Colors.white)
  }
};

export default Plan;
