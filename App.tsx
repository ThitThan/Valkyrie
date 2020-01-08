/* eslint-disable */
import React, { useEffect } from 'react'
import { Dimensions, Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import NavigationService from '@app/components/NavigationService'

// PAGES
import MainPage from '@app/views/MainPage'
import CPInfoPage from '@app/views/CPInfo'
import CPCausesPage from '@app/views/CPInfo/Causes'
import CPCategoriesPage from '@app/views/CPInfo/Categories'
import CPDiagnosticsPage from '@app/views/CPInfo/Diagnostics'
import CPMedicalTreatmentsPage from '@app/views/CPInfo/MedicalTreatments'
import CPBodyEquipmentPage from '@app/views/CPInfo/BodyEquipment'
import RoutinePage from '@app/views/Routine'
import SittingPositionPage from './views/SittingPosition'
import SittingPositionInfoPage from './views/SittingPosition/Info'
import WrongSittingPositionPage from './views/WrongSittingPosition'
import WrongSittingPositionInfoPage from './views/WrongSittingPosition/Info'

// LOCALIZATION
require('@app/utils/localizations')

//
// Main Navigator
//
const MainNavigator = createStackNavigator(
  {
    Main: {
      screen: MainPage,
    },
    CPInfo: {
      screen: CPInfoPage,
    },
    CPCauses: {
      screen: CPCausesPage,
    },
    CPCategories: {
      screen: CPCategoriesPage,
    },
    CPDiagnostics: {
      screen: CPDiagnosticsPage,
    },
    CPMedicalTreatments: {
      screen: CPMedicalTreatmentsPage,
    },
    CPBodyEquipment: {
      screen: CPBodyEquipmentPage,
    },
    SittingPosition: {
      screen: SittingPositionPage,
    },
    SittingPositionInfo: {
      screen: SittingPositionInfoPage,
    },
    WrongSittingPosition: {
      screen: WrongSittingPositionPage,
    },
    WrongSittingPositionInfo: {
      screen: WrongSittingPositionInfoPage,
    },
    Routine: {
      screen: RoutinePage,
    }
  },
  {
    initialRouteName: 'Main', // Inital Route
    headerMode: 'none',
    // mode: 'modal',
    navigationOptions: {
      gesturesEnabled: true,
      gestureResponseDistance: {
        vertical: Dimensions.get('window').height
      },
    },
  }
)

const AppContainer = createAppContainer(MainNavigator)

const App = () => {
  // const [ fontLoaded, setFontLoad ] = useState(false)

  useEffect(() => {
    // componentDidMount

    const componentWillUnmount = () => {
      // do something..
    }
    return componentWillUnmount
  }, [])

  // async function loadAsync() {
  //   await loadFont()
  //   setFontLoad(true)
  // }
  let getActiveRouteName = (navigationState:any): string | null => {
    if (!navigationState) {
      return null
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
      return getActiveRouteName(route)
    }
    return route.routeName
  }

  // let updateOrientation = (routeName: string) => {
  //   let o = orientationLocks[routeName]
  //     switch(o) {
  //       case 'portrait':
  //         Orientation.lockToPortrait()
  //         break
  //       case 'portraitUpsideDown':
  //         Orientation.lockToPortraitUpsideDown()
  //         break
  //       case 'landscape':
  //         Orientation.lockToLandscape()
  //         break
  //       case 'landscapeLeft':
  //         Orientation.lockToLandscapeLeft()
  //         break
  //       case 'landscapeRight':
  //         Orientation.lockToLandscapeRight()
  //         break
  //       default:
  //         Orientation.unlockAllOrientations()
  //         break
  //     }
  // }

  let onNavigationStateChange = (prevState: any, currentState:any, action:any) => {
    const currentRouteName = getActiveRouteName(currentState)!
    const previousRouteName = getActiveRouteName(prevState)!

    if (currentRouteName && previousRouteName && previousRouteName !== currentRouteName) {
      // // the line below uses the @react-native-firebase/analytics tracker
      // // change the tracker here to use other Mobile analytics SDK.

      // analytics().setCurrentScreen(currentRouteName, currentRouteName);
      // updateOrientation(currentRouteName)
    }
  }
  
  return (
    // <Provider store={store}>
      // {fontLoaded ? (
        // <View style={{ width: '100%', height: '100%', backgroundColor: '#fff' }}>
          <AppContainer 
            ref={(navigatorRef: any) => NavigationService.setTopLevelNavigator(navigatorRef)}
            onNavigationStateChange={onNavigationStateChange} />
        // </View>
        // ) : null}
    // </Provider>
  )
}

export default App;
