import { Box } from '@chakra-ui/react'
import * as React from 'react'
import Dashboard from '../Dashboard/Dashboard'

export interface AppProps {}

export default function App(props: AppProps) {
	// npx eslint src/components/* --fix
	return <Dashboard />
}
