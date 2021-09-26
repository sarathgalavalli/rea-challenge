import * as React from 'react'
import SideBar from './SideBar'
import { storiesOf } from '@storybook/react'

storiesOf('SideBar', module).add('SideBar', () => (
	<SideBar headingText='Repo' signature='test' />
))
