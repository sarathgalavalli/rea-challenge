import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './components/App/App'
import '../styles/globals.css'

const Index = () => {
	// 2. Extend the theme to include custom colors, fonts, etc
	const theme = extendTheme({
		textStyles: {
			buttonText: {
				// you can also use responsive styles
				fontSize: ['48px'],
				fontWeight: 'bold',
				lineHeight: '110%',
			},
			h2: {
				fontSize: ['36px', '48px'],
				fontWeight: 'semibold',
				lineHeight: '110%',
				letterSpacing: '-1%',
			},
		},
	})
	return (
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	)
}

ReactDOM.render(<Index />, document.getElementById('root'))
