import { Flex } from '@chakra-ui/react'
import * as React from 'react'
import * as data from '../../../data.json'
import SideBar from '../SideBar/SideBar'
import Properties from '../Properties/Properties'
import { useEffect, useState } from 'react'

export interface DashboardProps {}
export default (props: DashboardProps) => {
	const [results, setResults] = useState(data.results)
	const [saved, setSaved] = useState(data.saved)

	const addProperty = (data: any, isResult: boolean) => {
		if (isResult) {
			// remove from results
			// push to saved
			setSaved(saved.concat(data))
			setResults(
				results.filter((result: any) => {
					return result.id !== data.id
				})
			)
		} else {
			//remove from saved
			//push back to results
			setResults(results.concat(data))
			setSaved(
				saved.filter((saved: any) => {
					return saved.id !== data.id
				})
			)
		}
	}

	return (
		<Flex h='100vh' direction='row' overflow='hidden' maxW='2000px'>
			{/* Side bar */}
			<SideBar headingText='Project' signature='Anonymous' />
			{/* Column 1: Saved */}
			<Properties
				data={results}
				headingText='Results'
				isResult={true}
				addProperty={addProperty}
			/>
			{/* Column 2: Results */}
			<Properties
				data={saved}
				headingText='Saved'
				bgColor='#f5f6f7'
				isResult={false}
				addProperty={addProperty}
			/>
		</Flex>
	)
}
