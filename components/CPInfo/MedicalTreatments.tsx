/* eslint-disable */
import React, {Component,} from 'react'
import {
  StyleSheet, TouchableOpacity,
} from 'react-native'

import {
  Header, Card, Text
} from 'react-native-elements'

import { Feather } from '@expo/vector-icons'
import { SharedStyle } from '../styles'
import i18n from 'i18n-js'
import VKInfoCard, { VKSection } from '../VKInfoCard'

interface Props {
  // backgroundColor?: string,
  // title?: string,
  // navigation?: any,
}

const MedicalTreatments: React.FC<Props> = (props) => {
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

  const TITLE = i18n.t('cpinfo_medical_treatments_title')
  const CONTENT_SECTIONS = i18n.t('cpinfo_medical_treatments_content')

  return (
    <VKInfoCard 
      title={TITLE}
      titleAlignment={`left`}
      contentSections={CONTENT_SECTIONS}
    />
  )
}

const LocalStyle = StyleSheet.create({
  header: {
    width: '100%',
    height: 100
  },
});

export default MedicalTreatments
