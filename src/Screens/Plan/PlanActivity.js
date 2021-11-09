import React, {PureComponent} from 'react';

import {
  FlatList,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import ChooseFilter from '../../Components/Plan/ChooseFilter';
import {activityStatus, filterOptions} from '../../Data/Const';
import NavigationServices from '../../Navigation/NavigationServices';
import {NAVIGATION_NAME} from '../../Navigation/RegisterComponent';
import {Colors, Images} from '../../Themes';
import Scale from '../../Transform/Scale';
import ActivityList from './ActivityList';

const dummy = [
  {
    date: '10/11/2020',
    time: '08:00',
    activity: 'Membayar Kontrakan',
    status: activityStatus.complete
  },
  {
    date: '10/11/2020',
    time: '09:00',
    activity: 'Membayar Zakat',
    status: activityStatus.reject
  },
  {
    date: '14/11/2020',
    time: '07:00',
    activity: 'Membayar Listrik',
    status: activityStatus.waiting
  }
];

class PlanActivity extends PureComponent {
  filterModal = undefined;

  constructor(props) {
    super(props);

    this.state = {
      filterOption: filterOptions.all,
      filterOptionName: 'Semua'
    };
  }

  renderFilterButton = () => {
    const {filterOptionName} = this.state;
    return (
      <TouchableOpacity
        onPress={() => {
          if (this.filterModal !== undefined) {
            this.filterModal.show();
          }
        }}
        activeOpacity={0.9}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'flex-end',
          height: Scale(30),
          borderRadius: Scale(15),
          borderColor: 'lightgray',
          borderWidth: 1,
          paddingHorizontal: Scale(15),
          marginTop: Scale(10),
          marginRight: Scale(10),
          marginBottom: Scale(10),
          flexDirection: 'row'
        }}>
        <Text>{filterOptionName}</Text>
        <Text
          style={{
            fontSize: Scale(18),
            marginTop: Scale(-9),
            marginLeft: Scale(5)
          }}>
          ⌄
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    const {filterOption} = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        {this.renderFilterButton()}
        <TouchableOpacity
          onPress={() =>
            NavigationServices.push(NAVIGATION_NAME.MAIN.PLAN.addActivity)
          }
          activeOpacity={0.9}
          style={{
            position: 'absolute',
            zIndex: 1,
            bottom: Scale(20),
            right: Scale(20)
          }}>
          <Image
            source={Images.addIcon}
            style={{
              height: Scale(50),
              width: Scale(50)
            }}
          />
        </TouchableOpacity>
        <FlatList
          data={dummy}
          renderItem={({item, index}) => {
            return <ActivityList data={item} index={index} />;
          }}
          ItemSeparatorComponent={() => (
            <View
              style={{
                borderWidth: 1,
                borderColor: Colors.lineGray,
                marginVertical: Scale(5)
              }}
            />
          )}
        />

        <ChooseFilter
          setRef={(r) => (this.filterModal = r)}
          value={filterOption}
          setOptionSelected={(id, title) =>
            this.setState({filterOption: id, filterOptionName: title})
          }
        />
      </SafeAreaView>
    );
  }
}

export default PlanActivity;
