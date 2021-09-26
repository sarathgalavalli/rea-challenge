import {
	Avatar,
	Box,
	Button,
	ButtonProps,
	Flex,
	Heading,
	Text,
} from '@chakra-ui/react'
import * as React from 'react'
import DisplayCard from '../DisplayCard/DisplayCard'
import * as data from '../../../data.json'
import SideBar from '../SideBar/SideBar'
import Properties from '../Properties/Properties'

export interface DashboardProps {}
export default (props: DashboardProps) => {
	return (
		<Flex h='100vh' direction='row' overflow='hidden' maxW='2000px'>
			{/* Side bar */}
			<SideBar headingText='Project' signature='Anonymous' />
			{/* Column 1: Saved */}
			<Properties data={data.results} headingText='Results' />
			{/* Column 2: Results */}
			<Properties data={data.saved} headingText='Saved' bgColor='#f5f6f7' />
		</Flex>
	)
}
