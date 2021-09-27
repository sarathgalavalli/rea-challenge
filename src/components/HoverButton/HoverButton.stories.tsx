import * as React from 'react'
import { storiesOf } from '@storybook/react'
import HoverButton from './HoverButton'

storiesOf('ColorButton', module)
	.add('Accept', () => (
		<HoverButton backgroundColor='#fcfa3b'> Accept </HoverButton>
	))
	.add('Decline', () => <HoverButton> Decline </HoverButton>)
