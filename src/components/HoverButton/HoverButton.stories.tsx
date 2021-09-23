import * as React from 'react'
import HoverButton from './HoverButton'
import { storiesOf } from '@storybook/react'

storiesOf('ColorButton', module)
	.add('Accept', () => (
		<HoverButton children='Accept' backgroundColor='#fcfa3b' />
	))
	.add('Decline', () => <HoverButton children='Decline' />)

// export default {
// 	component: HoverButton,
// }
// export const Basic = () => (
// 	<HoverButton children='Decline' backgroundColor='#fcfa3b' />
// )
// export const Second = () => <HoverButton children='Accept' />