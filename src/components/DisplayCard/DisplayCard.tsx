import { Text, Image, BoxProps, Flex, Box } from '@chakra-ui/react'
import * as React from 'react'

export interface DisplayCardProps extends BoxProps {
	price: any
	logoUrl: any
	imageUrl: any
	headerColor: any
}

export default (props: DisplayCardProps) => {
	const { price, logoUrl, imageUrl, headerColor } = props

	return (
		<Flex
			h='full'
			direction='column'
			overflow='hidden'
			w='-webkit-max-content'
			boxShadow='0px 0px 20px rgba(0, 0, 0, 0.09);'
			borderRadius={5}
		>
			<Flex bgColor={headerColor} p={5} borderTopRadius={5}>
				<Image
					src={logoUrl}
					alt='logo'
					paddingTop={2}
					paddingLeft={2}
					objectFit='contain'
				/>
			</Flex>
			<Flex bgColor='yellow' h='full'>
				<Image src={imageUrl} alt='Image' />
			</Flex>
			<Flex
				h='full'
				minHeight='65px'
				bgColor='blue.200'
				alignItems='center'
				justifyContent='flex-start'
				paddingLeft={5}
			>
				<Text fontFamily='Museo-Sans' fontSize='20px' letterSpacing={2}>
					Price: {price}
				</Text>
			</Flex>
		</Flex>
	)
}
