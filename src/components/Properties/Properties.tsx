import { BoxProps, Flex, Heading, Text } from '@chakra-ui/react'
import * as React from 'react'
import DisplayCard from '../DisplayCard/DisplayCard'

export interface PropertiesProps extends BoxProps {
	data: any
	headingText: string
	isResult: boolean
	addProperty?: (data: any, isResult: boolean) => void
}
export default (props: PropertiesProps) => {
	const { headingText, data, isResult, bgColor, addProperty, ...rest } = props

	return (
		<Flex
			w='45%'
			p='3%'
			flexDir='column'
			overflowY='auto'
			minH='100vh'
			bgColor={bgColor ?? ''}
		>
			<Heading fontWeight='normal' mb={4} letterSpacing='tight'>
				{headingText ?? 'Properties'}
			</Heading>
			<Flex
				justifyContent='space-between'
				alignItems='center'
				mt={4}
				flexDir='column'
				w='100%'
			>
				{data.length === 0 && (
					<Flex
						flex='1 1 auto'
						h='100%'
						w='100%'
						justifyContent='center'
						alignItems='center'
					>
						<Text fontSize='16px' opacity={0.5} fontWeight='bold'>
							No Data
						</Text>
					</Flex>
				)}
				{data &&
					data.map((data: any) => (
						<DisplayCard
							logoUrl={data.agency.logo}
							imageUrl={data.mainImage}
							price={data.price}
							headerColor={data.agency.brandingColors.primary}
							isResult={isResult}
							onClick={() => addProperty(data, isResult)}
						/>
					))}
			</Flex>
		</Flex>
	)
}
