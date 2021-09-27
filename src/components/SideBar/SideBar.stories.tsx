import * as React from 'react'
import { storiesOf } from '@storybook/react'
import SideBar from './SideBar'

storiesOf('SideBar', module).add('SideBar', () => (
	<SideBar headingText='Repo' signature='test' />
))
