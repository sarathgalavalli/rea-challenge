import { Text, Image, BoxProps, Flex, Box, Button } from '@chakra-ui/react'
import * as React from 'react'
import { useState } from 'react'
import HoverButton from '../HoverButton/HoverButton'

export interface DisplayCardProps extends BoxProps {
	price: any
	logoUrl: any
	imageUrl: any
	headerColor: any
	isResult: boolean
	onClick: () => void
}

export default (props: DisplayCardProps) => {
	const { price, logoUrl, imageUrl, headerColor, isResult, onClick, ...rest } =
		props

	const [showButton, setShowButton] = useState(false)

	return (
		<Flex
			h='100%'
			w='-webkit-fit-content'
			p={0}
			mb={5}
			flexDir='column'
			boxShadow='0px 0px 20px rgba(0, 0, 0, 0.09);'
			pos='relative'
			flex='1 1 auto'
		>
			<Box
				as={Button}
				h='100%'
				w='-webkit-fit-content'
				border='transparent'
				_hover={{
					cursor: 'default',
				}}
				onMouseEnter={event => {
					setShowButton(true)
				}}
				onMouseLeave={even => {
					setShowButton(false)
				}}
				p={0}
			>
				<Box
					as={Flex}
					direction='column'
					borderRadius={5}
					flex='1 1 auto'
					w='-webkit-fit-content'
				>
					<Flex bgColor={headerColor} borderTopRadius={5}>
						<Image src={logoUrl} alt='logo' p={2} />
					</Flex>
					<Flex bgColor='yellow' flexDir='column'>
						<Image
							className='sourceImage'
							src={imageUrl}
							alt='Image'
							w='450px'
							h='300px'
						/>
					</Flex>
					<Flex
						h='full'
						minHeight='65px'
						bgColor='white'
						alignItems='center'
						justifyContent='space-between'
						paddingLeft={5}
						flex='1 1 auto'
					>
						<Text
							fontFamily='Museo-Sans'
							fontSize='20px'
							letterSpacing={2}
							data-test-id={`price-${price}-${isResult ? 'Result' : 'Saved'}`}
						>
							Price: {price}
						</Text>
						{showButton && (
							<HoverButton
								className='hoverButton'
								color='fff'
								backgroundColor={isResult ? 'green.300' : 'red.300'}
								onClick={onClick}
							>
								{isResult ? 'Add' : 'Remove'}
							</HoverButton>
						)}
					</Flex>
				</Box>
			</Box>
		</Flex>
	)
}
