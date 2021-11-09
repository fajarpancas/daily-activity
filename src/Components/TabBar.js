import React from 'react';
import {TabBar} from 'react-native-tab-view';
import {Colors, Fonts} from '../Themes';
import Scale from '../Transform/Scale';

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: Colors.navy}}
    style={{backgroundColor: Colors.white}}
    activeColor={Colors.navy}
    inactiveColor="gray"
    labelStyle={{
      fontFamily: Fonts.type.base,
      fontSize: Scale(12),
      textAlign: 'center'
    }}
  />
);

export default renderTabBar;
