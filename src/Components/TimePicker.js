import React, {PureComponent} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';
import moment from 'moment-timezone';
import {Colors} from '../Themes';
import Scale from '../Transform/Scale';

class ModalTimePicker extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      selectedDate: new Date()
    };

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.onDone = this.onDone.bind(this);
  }

  componentDidMount() {
    const {setRef} = this.props;

    if (typeof setRef === 'function') {
      setRef({
        show: this.show,
        hide: this.hide
      });
    }
  }

  show(time, date) {
    this.setState({isVisible: true}, () => {
      let timeSelected = '00:00';
      if (time) {
        timeSelected = time;
      }
      const parseDate = moment(date).format('YYYY-MM-DD');
      const value = new Date(`${parseDate}T${timeSelected}:00.000Z`);
      this.setState({selectedDate: value});
    });
  }

  hide() {
    this.setState({isVisible: false});
  }

  changeDate(date) {
    this.setState({selectedDate: date});
  }

  onDone() {
    const {selectedDate} = this.state;
    if (selectedDate) {
      const parseValue = new Date(
        selectedDate.getTime() + selectedDate.getTimezoneOffset() * 60000
      );
      // const value = moment(parseValue).format('HH:mm');
      this.props.onSelectDate(parseValue);
      this.hide();
    }
  }

  render() {
    const {isVisible, selectedDate} = this.state;
    return (
      <Modal
        onBackButtonPress={this.hide}
        onBackdropPress={this.hide}
        isVisible={isVisible}
        style={{
          justifyContent: 'flex-end',
          alignContent: 'center',
          alignItems: 'center',
          margin: 0,
          width: '100%',
          padding: 0
        }}>
        <View
          style={{
            backgroundColor: Colors.white,
            padding: 10,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
          <TouchableOpacity activeOpacity={0.9} onPress={this.hide}>
            <Text style={{fontSize: Scale(14), color: Colors.gray}}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} onPress={this.onDone}>
            <Text style={{fontSize: Scale(14), color: Colors.gray}}>Done</Text>
          </TouchableOpacity>
        </View>
        <DatePicker
          style={{
            backgroundColor: Colors.white,
            justifyContent: 'center',
            alignSelf: 'center',
            width: Scale(375)
          }}
          onDateChange={this.changeDate}
          date={selectedDate}
          mode="time"
          locale="en-GB"
          timeZoneOffsetInMinutes={0}
          // is24hourSource={'locale'}
        />
      </Modal>
    );
  }
}

export default ModalTimePicker;
