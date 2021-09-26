import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from './App'

describe('App', () => {
	test('is App Rendered', () => {
		render(<App />)
	})
})
