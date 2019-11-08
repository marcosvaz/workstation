import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import './config/StatusBarConfig'

import SplashScreen from './pages/SplashScreen'
import Home from './pages/Home'

const Routes = createAppContainer(
    createSwitchNavigator({
        SplashScreen,
        Home,
    })
)

export default Routes