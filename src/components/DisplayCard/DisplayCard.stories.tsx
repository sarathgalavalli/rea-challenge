import * as React from 'react'
import DisplayCard from './DisplayCard'
import { storiesOf } from '@storybook/react'

storiesOf('DisplayCard', module)
	.add('Display Card Results', () => (
		<DisplayCard
			logoUrl='https://i1.au.reastatic.net/170x32/d9e65c666e427e655fb63dcfe73f50d4ac7ff9a58c173db9474bd92e75b01070/main.gif'
			imageUrl='https://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg'
			price='$726,500'
			headerColor='#ffe512'
			isResult={true}
			onClick={() => console.log('clicked display result card')}
		/>
	))
	.add('Display Card Saved', () => (
		<DisplayCard
			logoUrl='https://i1.au.reastatic.net/170x32/d9e65c666e427e655fb63dcfe73f50d4ac7ff9a58c173db9474bd92e75b01070/main.gif'
			imageUrl='https://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg'
			price='$726,500'
			headerColor='#ffe512'
			isResult={false}
			onClick={() => console.log('clicked display saved card')}
		/>
	))
