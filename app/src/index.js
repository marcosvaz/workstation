import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import './config/StatusBarConfig'

import SplashScreen from './pages/SplashScreen'
import Home from './pages/Home'
import AdicionarChamados from './pages/AdicionarChamados'

const Routes = createAppContainer(
    createSwitchNavigator({
        SplashScreen,
        Home,
        AdicionarChamados,
    })
)

export default Routes