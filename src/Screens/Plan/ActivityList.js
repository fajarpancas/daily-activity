import React from 'react';
import {View, Text, Image as RNImage} from 'react-native';
import moment from 'moment';
import Scale from '../../Transform/Scale';
import {Images} from '../../Themes';
import {activityStatus} from '../../Data/Const';

const ActivityList = ({data, index}) => {
  const {date, time, activity, status} = data;

  let roundedCheckIcon =
    status === activityStatus.complete
      ? Images.roundCheck
      : Images.roundUncheck;
  let roundedRejectIcon =
    status === activityStatus.reject
      ? Images.roundReject
      : Images.roundUnReject;

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Scale(10)
      }}>
      <Text
        style={{
          width: Scale(25)
        }}>
        {index + 1}
      </Text>
      <View
        style={{
          width: Scale(80)
        }}>
        <Text
          style={{
            fontSize: Scale(11),
            textAlign: 'center'
          }}>
          {date}
        </Text>
        <Text
          style={{
            fontSize: Scale(11),
            textAlign: 'center'
          }}>
          {time}
        </Text>
      </View>
      <Text
        style={{
          width: Scale(190),
          textAlign: 'center'
        }}>
        {activity}
      </Text>
      <RNImage
        source={roundedCheckIcon}
        style={{
          height: Scale(20),
          width: Scale(20),
          resizeMode: 'contain',
          marginLeft: Scale(5),
          marginRight: Scale(10)
        }}
      />
      <RNImage
        source={roundedRejectIcon}
        style={{
          height: Scale(20),
          width: Scale(20),
          resizeMode: 'contain',
          marginRight: Scale(10)
        }}
      />
    </View>
  );
};

export default ActivityList;
