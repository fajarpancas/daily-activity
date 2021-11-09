import React, {PureComponent} from 'react';
import Modal from 'react-native-modal';
import {View, Text, TouchableOpacity} from 'react-native';
import {filterOptions} from '../../Data/Const';
import Scale from '../../Transform/Scale';
import {Colors} from '../../Themes';

class ChooseFilter extends PureComponent {
  constructor(props) {
    super(props);
    const {value} = this.props;
    this.state = {
      showModal: false,
      optionSelected: value
    };

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.renderOptions = this.renderOptions.bind(this);
  }

  componentDidMount() {
    const {setRef} = this.props;
    if (setRef) {
      setRef(this);
    }
  }

  show() {
    this.setState({showModal: true});
  }

  hide() {
    this.setState({showModal: false});
  }

  renderOptions({id, title, hasBorder}) {
    const {optionSelected} = this.state;
    const {setOptionSelected} = this.props;
    return (
      <TouchableOpacity
        onPress={() =>
          this.setState({optionSelected: id}, () => {
            setOptionSelected(id, title);
            this.hide();
          })
        }
        activeOpacity={0.9}
        style={{
          width: '100%',
          height: Scale(50),
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomColor: Colors.lineGray,
          borderBottomWidth: hasBorder ? 1 : 0,
          flexDirection: 'row'
        }}>
        <View style={{width: Scale(40)}} />
        <Text>{title}</Text>
        <Text
          style={{
            width: Scale(40),
            fontSize: Scale(15)
          }}>
          {optionSelected === id ? '✓' : ''}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const {showModal} = this.state;
    const options = [
      {
        id: filterOptions.all,
        title: 'Semua',
        hasBorder: true
      },
      {
        id: filterOptions.done,
        title: 'Terlaksana',
        hasBorder: true
      },
      {
        id: filterOptions.undone,
        title: 'Tidak Terlaksana'
      }
    ];
    return (
      <Modal
        isVisible={showModal}
        onBackdropPress={this.hide}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        onBackButtonPress={this.hide}
        backdropTransitionOutTiming={0}
        style={{margin: 0}}
        useNativeDriver
        useNativeDriverForBackdrop>
        <View
          style={{
            position: 'absolute',
            width: Scale(375),
            bottom: 0,
            backgroundColor: 'white',
            borderTopLeftRadius: Scale(20),
            borderTopRightRadius: Scale(20)
          }}>
          {options.map(this.renderOptions)}
        </View>
      </Modal>
    );
  }
}

export default ChooseFilter;
