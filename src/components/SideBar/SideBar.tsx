import {
	Avatar,
	Button,
	ButtonProps,
	Flex,
	Heading,
	Text,
} from '@chakra-ui/react'
import * as React from 'react'

export interface SideBarProps {
	headingText: string
	signature: string
}
export default (props: SideBarProps) => {
	const { headingText, signature } = props
	return (
		<Flex
			w='10%'
			flexDir='column'
			alignItems='center'
			color='white'
			bgColor='#020202'
		>
			<Flex flexDir='column' justifyContent='space-between' h='100vh'>
				<Flex flexDir='column'>
					<Heading
						mt={5}
						mb={100}
						fontSize='4xl'
						alignSelf='center'
						letterSpacing='tight'
						className='ProjectHeading'
					>
						Project.
					</Heading>
				</Flex>
				<Flex flexDir='column' alignItems='center' mb={10} mt={5}>
					<Avatar name='Anonymous' />
					<Text className='avatarText' textAlign='center'>
						Anonymous
					</Text>
				</Flex>
			</Flex>
		</Flex>
	)
}
