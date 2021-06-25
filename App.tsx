import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Routes } from './src/Routes'
import { LoadAssets } from './src/components'
import LiquidSwipe from './src/LiquidSwipe'

const assets: number[] | undefined = []

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
		<LoadAssets assets={assets}>
			<AppNavigator />
		</LoadAssets>
	)
}

export default App
