import * as React from 'react'
import Properties from './Properties'
import { storiesOf } from '@storybook/react'
import * as data from '../../../data.json'

storiesOf('Property', module)
	.add('Property Results', () => (
		<Properties data={data.results} headingText='Results' isResult={false} />
	))
	.add('Property Saved', () => (
		<Properties data={data.results} headingText='Results' isResult={false} />
	))
