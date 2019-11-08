import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import StatusBarConfig from './config/StatusBarConfig'

import SplashScreen from './pages/SplashScreen'
// import Home from ''

const Routes = createAppContainer(
    createSwitchNavigator({
        SplashScreen,
        // Home,
    })
)

export default Routes