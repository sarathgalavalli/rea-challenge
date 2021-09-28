import { Button, ButtonProps, Text } from '@chakra-ui/react'
import { getRelatedTarget } from '@chakra-ui/utils'
import * as React from 'react'

export interface HoverButtonProps extends ButtonProps {
	onClick?: () => void
}
export default (props: HoverButtonProps) => {
	const {
		children,
		onClick,
		backgroundColor,
		color,
		pos,
		top,
		display,
		...rest
	} = props

	const hoverColor = backgroundColor === 'green.300' ? 'green.400' : 'red.400'
	return (
		<Button
			data-test-id={children}
			onClick={onClick}
			borderRadius={12}
			size='md'
			minH='45px'
			minW='200px'
			backgroundColor={backgroundColor}
			color={color}
			pos={pos}
			top={top}
			display={display}
			border='transparent'
			mr={3}
			_hover={{ backgroundColor: hoverColor }}
		>
			<Text m={0} fontSize='18px' fontWeight='semibold'>
				{children}
			</Text>
		</Button>
	)
}
