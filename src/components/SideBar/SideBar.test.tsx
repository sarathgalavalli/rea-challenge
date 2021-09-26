import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SideBar from './SideBar'

describe('SideBar', () => {
	test('is SideBar Rendered', () => {
		render(<SideBar headingText='Repo' signature='test' />)
	})
})
