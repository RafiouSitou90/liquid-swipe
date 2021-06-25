import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Routes } from './src/Routes'
import { LoadAssets } from './src/components'
import LiquidSwipe, { assets as liquidSwipeAssets } from './src/LiquidSwipe'

const fonts = {
	'SFProDisplay-Bold': require('./src/assets/fonts/SFPro/SF-Pro-Display-Bold.otf'),
	'SFProDisplay-Semibold': require('./src/assets/fonts/SFPro/SF-Pro-Display-Semibold.otf'),
	'SFProDisplay-Regular': require('./src/assets/fonts/SFPro/SF-Pro-Display-Regular.otf'),
	'SFProDisplay-Medium': require('./src/assets/fonts/SFPro/SF-Pro-Display-Medium.otf'),
}

const assets: number[] | undefined = [...liquidSwipeAssets]

const { Navigator, Screen } = createStackNavigator<Routes>()

const AppNavigator = () => (
	<Navigator>
		<Screen
			name="LiquidSwipe"
			component={LiquidSwipe}
			options={{
				title: 'Liquid Swipe',
				header: () => null,
				gestureEnabled: false,
			}}
		/>
	</Navigator>
)

const App = () => {
	return (
		<LoadAssets assets={assets} fonts={fonts}>
			<AppNavigator />
		</LoadAssets>
	)
}

export default App
