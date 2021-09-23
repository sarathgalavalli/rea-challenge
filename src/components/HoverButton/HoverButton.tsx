import { Button, ButtonProps, Text } from '@chakra-ui/react'
import * as React from 'react'

export interface HoverButtonProps extends ButtonProps {
	children: any
	onClick?: () => void
}
export default (props: HoverButtonProps) => {
	const { children, onClick, backgroundColor, ...rest } = props
	return (
		<Button
			// style={{ color }}
			onClick={onClick}
			borderRadius={12}
			size='md'
			minH='45px'
			minW='200px'
			backgroundColor={backgroundColor}
		>
			<Text m={0} fontSize='18px' fontWeight='semibold'>
				{children}
			</Text>
		</Button>
	)
}
