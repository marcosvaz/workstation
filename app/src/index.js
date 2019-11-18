import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import './config/StatusBarConfig'

import SplashScreen from './pages/SplashScreen'
import Login from './pages/Login'
import Home from './pages/Home'
import AdicionarChamados from './pages/AdicionarChamados'

const Routes = createAppContainer(
    createSwitchNavigator({
        SplashScreen,
        Login,
        Home,
        AdicionarChamados,
    })
)

export default Routes