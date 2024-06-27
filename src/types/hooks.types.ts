import { MetricsResponse } from '@/services/metrics.types'

export type DimensionsPropsType = {
	fnCallback: React.Dispatch<React.SetStateAction<boolean>>
	dimensionsWidth: number
}

export type ChartOptionsType = {
	text: string
	type: 'pie' | 'line' | 'bar'
	data: MetricsResponse[] | number[] | undefined
	categories: string[] | undefined
}

export type MetricsQueryType = {
	search?: string
}
