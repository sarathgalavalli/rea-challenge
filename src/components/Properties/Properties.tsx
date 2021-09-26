import { BoxProps, Flex, Heading, Text } from '@chakra-ui/react'
import * as React from 'react'
import DisplayCard from '../DisplayCard/DisplayCard'

export interface PropertiesProps extends BoxProps {
	data: any
	headingText: string
}
export default (props: PropertiesProps) => {
	const { headingText, data, bgColor, ...rest } = props
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
				{data.map((data: any) => (
					<DisplayCard
						logoUrl={data.agency.logo}
						imageUrl={data.mainImage}
						price={data.price}
						headerColor={data.agency.brandingColors.primary}
					/>
				))}
			</Flex>
		</Flex>
	)
}
