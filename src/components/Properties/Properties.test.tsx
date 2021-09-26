import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Properties from './Properties'
import * as data from '../../../data.json'

describe('Properties', () => {
	test('are Properties Rendered', () => {
		render(<Properties data={data.results} headingText='Results' />)
	})
})
