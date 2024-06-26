import { DimensionsPropsType } from '@/types/hooks.types'
import { useEffect, useState } from 'react'

export const useDimensions = ({
	fnCallback,
	dimensionsWidth,
}: DimensionsPropsType) => {
	const [dimensions, setDimensions] = useState({
		height: window.outerHeight,
		width: window.outerWidth,
	})

	useEffect(() => {
		const handleResize = () => {
			setDimensions({
				height: window.outerHeight,
				width: window.outerWidth,
			})
		}
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	})

	useEffect(() => {
		if (dimensions.width < dimensionsWidth) {
			fnCallback(false)
		} else {
			fnCallback(true)
		}
	}, [dimensions, fnCallback, dimensionsWidth])

	return {
		dimensions,
	}
}