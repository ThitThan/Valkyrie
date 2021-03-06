/* eslint-disable */
import React from 'react'
import {
  StyleSheet, View,
} from 'react-native'

import StyledText from 'react-native-styled-text'
import { SharedStyle } from '../styles'
import i18n from 'i18n-js'

interface Props {
  // backgroundColor?: string,
  // title?: string,
  // navigation?: any,
}

const Note: React.FC<Props> = (props) => {
  // STATE
  // let [balance, setBalance] = React.useState<number>();

  // PROPS
  // const TITLE = props.title ? props.title : ''

  React.useEffect(() => {
    // componentDidMount

    const componentWillUnmount = () => {
      // do something..
    }
    return componentWillUnmount
  }, [])

  // const TITLE = i18n.t('sitting_position_importance_title')
  const RAW = i18n.t('exercise_note')
  const TITLE = RAW.title
  const CONTENT = RAW.subtitle
  return (
    <View style={SharedStyle.InfoCard}>
      <StyledText style={SharedStyle.Title}>
        { TITLE }
      </StyledText>
      <StyledText style={SharedStyle.Content}>
        { CONTENT }
      </StyledText>
    </View>
  )
}

const LocalStyle = StyleSheet.create({
  header: {
    width: '100%',
    height: 100
  },
});

export default Note
