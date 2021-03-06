/* eslint-disable */
import React, {Component,} from 'react'
import {
  StyleSheet, TouchableOpacity, StatusBarStyle,
  View,
  Text,
} from 'react-native'

import {
  Header
} from 'react-native-elements'

import { Feather } from '@expo/vector-icons';
import StyledText from 'react-native-styled-text';
import { SharedStyle } from './styles';

interface Props {
  backgroundColor?: string,
  color?: string,
  title?: string,
  // backButtonVisible?: boolean,
  navigation?: any,
  barStyle?: StatusBarStyle,
}

const VKHeader: React.FC<Props> = (props) => {
  // STATE
  // let [balance, setBalance] = React.useState<number>();

  // PROPS
  const BG_COLOR = props.backgroundColor ? props.backgroundColor : '#424242'
  const COLOR = props.color ? props.color : '#fff'
  const TITLE = props.title ? props.title : ''
  const BAR_STYLE = props.barStyle ? props.barStyle : 'light-content'

  React.useEffect(() => {
    // componentDidMount

    const componentWillUnmount = () => {
      // do something..
    }
    return componentWillUnmount
  }, [])

  const renderLeftComponent = (color: String = '#fff') => {
    if (props.navigation)
      return (
        <TouchableOpacity onPress={ () => props.navigation.goBack() }>
          <Feather name='chevron-left' size={28} color={color} />
        </TouchableOpacity>
      )
    else
      return <></>
  }

  return (
    // <View style={[ LocalStyle.header, { backgroundColor: BG_COLOR } ]}>
    //   { renderLeftComponent(COLOR) }
    //   <StyledText style={[ SharedStyle.HeaderTitle, { color: COLOR } ]}>
    //     { TITLE }
    //   </StyledText>
    // </View>
    <Header
      backgroundColor={ BG_COLOR }
      leftComponent={ renderLeftComponent(COLOR) }
      centerComponent={
        <StyledText style={[ SharedStyle.HeaderTitle, { color: COLOR } ]}>
          { TITLE }
        </StyledText>
      }
      barStyle={ BAR_STYLE }
      statusBarProps={{ barStyle: BAR_STYLE, backgroundColor: '#00000020', translucent: true, animated: true }}
    />
      // centerComponent={{ text: TITLE, style: { color: COLOR, fontSize: 26, fontWeight: 'bold', fontFamily: 'rsu-text_bold' } }}
  )
}

const LocalStyle = StyleSheet.create({
  header: {
    width: '100%',
    height: 100
  }
});

export default VKHeader
