import { Flex } from '@chakra-ui/react'
import * as React from 'react'
import { useEffect, useState } from 'react'
import * as data from '../../../data.json'
import SideBar from '../SideBar/SideBar'
import Properties from '../Properties/Properties'

export default ({}) => {
	const [results, setResults] = useState(data.results)
	const [saved, setSaved] = useState(data.saved)

	const addProperty = (propertyData: any, isResult: boolean) => {
		if (isResult) {
			// remove from results
			// push to saved
			setSaved(saved.concat(propertyData))
			setResults(results.filter((result: any) => result.id !== propertyData.id))
		} else {
			// remove from saved
			// push back to results
			setResults(results.concat(propertyData))
			setSaved(
				saved.filter((savedResult: any) => savedResult.id !== propertyData.id)
			)
		}
	}

	return (
		<Flex h='100vh' direction='row' overflow='hidden' w="100%">
			{/* Side bar */}
			<SideBar headingText='Project' signature='Anonymous' />
			{/* Column 1: Saved */}
			<Properties
				data={results}
				headingText='Results'
				isResult
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
