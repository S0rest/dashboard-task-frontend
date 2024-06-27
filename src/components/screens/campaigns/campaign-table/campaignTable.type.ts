import { MetricsResponse } from '@/services/metrics.types'
import { ChangeEvent } from 'react'

export type CampaignTableProps = {
	dataSource: MetricsResponse[] | undefined
	searchTerm: string
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
	isLoading: boolean
	isError: boolean
	error: string
}
