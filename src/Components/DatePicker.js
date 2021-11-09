import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';
import moment from 'moment-timezone';
import Scale from '../Transform/Scale';
import {View, TouchableOpacity, Text} from 'react-native';
import {Colors} from '../Themes';
import PropTypes from 'prop-types';

const CustomDatePicker = (props) => {
  const {
    modalVisible,
    dismiss,
    initialDate,
    onDateChange,
    dateFormat,
    maximumDate,
    minimumDate,
    value,
    mode,
    locale
  } = props;

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [latestSelectedDate, setLatestSelectedDate] = useState(null);

  const changeDate = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    if (value) {
      setSelectedDate(moment.tz(value, dateFormat, 'UTC').toDate());
    } else {
      setSelectedDate(new Date());
      setLatestSelectedDate(null);
    }
  }, [value]);

  const onDone = () => {
    if (onDateChange) {
      onDateChange(moment.tz(selectedDate, 'UTC').format(dateFormat));
      setLatestSelectedDate(selectedDate);
      dismiss();
    }
  };

  const onClose = () => {
    if (latestSelectedDate) {
      setSelectedDate(latestSelectedDate);
    } else {
      setSelectedDate(new Date());
    }
    dismiss();
  };

  return (
    <Modal
      isVisible={modalVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
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
        <TouchableOpacity activeOpacity={0.9} onPress={onClose}>
          <Text style={{fontSize: Scale(14), color: Colors.gray}}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} onPress={onDone}>
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
        initialDate={moment.tz(initialDate, 'UTC').toDate()}
        onDateChange={changeDate}
        maximumDate={
          maximumDate ? moment.tz(maximumDate, 'UTC').toDate() : undefined
        }
        date={
          selectedDate
            ? moment.tz(selectedDate, dateFormat, 'UTC').toDate()
            : moment.tz(undefined, 'UTC').toDate()
        }
        minimumDate={
          minimumDate ? moment.tz(minimumDate, 'UTC').toDate() : undefined
        }
        mode={mode}
        locale={locale}
        timeZoneOffsetInMinutes={0}
      />
    </Modal>
  );
};

CustomDatePicker.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  dismiss: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onDateChange: PropTypes.func,
  dateFormat: PropTypes.string,
  locale: PropTypes.string,
  mode: PropTypes.oneOf(['date', 'time', 'datetime']),
  initialDate: PropTypes.instanceOf(Date),
  maximumDate: PropTypes.instanceOf(Date),
  minimumDate: PropTypes.instanceOf(Date)
};

CustomDatePicker.defaultProps = {
  value: null,
  mode: 'date',
  dateFormat: 'DD/MM/YYYY',
  locale: 'en-GB',
  initialDate: undefined,
  maximumDate: undefined,
  minimumDate: undefined,
  onDateChange: () => null
};

export default CustomDatePicker;
