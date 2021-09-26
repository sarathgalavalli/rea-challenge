import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Dashboard from './Dashboard'

describe('Dashboard', () => {
	test('is Dashboard Rendered', () => {
		render(<Dashboard />)
	})
})
