import { MetricsError, MetricsResponse } from '@/services/metrics.types'
import { ChartOptionsType } from '@/types/hooks.types'
import axios, { AxiosError } from 'axios'
import { BookAIcon, HouseIcon, LineChartIcon } from 'lucide-react'
import { ROUTE } from './enums'

export const getCurrentYear = () => {
	return new Date().getFullYear()
}

export const MENU_ITEMS = [
	{
		link: ROUTE.HOME,
		icon: HouseIcon,
		value: 'Home',
	},
	{
		link: ROUTE.ABOUT,
		icon: BookAIcon,
		value: 'About',
	},
	{
		link: ROUTE.DASHBOARD,
		icon: LineChartIcon,
		value: 'Dashboard',
	},
]

export const CAMPAIGN_COLUMNS = [
	{
		title: 'ID',
		dataIndex: 'campaignId',
		key: 'campaignId',
	},
	{
		title: 'Campaign Name',
		dataIndex: 'campaignName',
		key: 'campaignName',
	},
	{
		title: 'Impressions',
		dataIndex: 'impressions',
		key: 'impressions',
	},
	{
		title: 'Clicks',
		dataIndex: 'clicks',
		key: 'clicks',
	},
	{
		title: 'Cost',
		dataIndex: 'cost',
		key: 'cost',
	},
	{
		title: 'Conversions',
		dataIndex: 'conversions',
		key: 'conversions',
	},
	{
		title: 'Revenue',
		dataIndex: 'revenue',
		key: 'revenue',
	},
	{
		title: 'CTR',
		dataIndex: 'ctr',
		key: 'ctr',
	},
	{
		title: 'CPC',
		dataIndex: 'cpc',
		key: 'cpc',
	},
	{
		title: 'CPM',
		dataIndex: 'cpm',
		key: 'cpm',
	},
	{
		title: 'CPA',
		dataIndex: 'cpa',
		key: 'cpa',
	},
	{
		title: 'ROAS',
		dataIndex: 'roas',
		key: 'roas',
	},
]

export const createChartOptions = ({
	text,
	type,
	data,
	categories,
}: ChartOptionsType) => {
	return {
		title: {
			text,
		},
		series: [
			{
				name: type === 'pie' ? 'Percentage' : text,
				type,
				data:
					type === 'pie'
						? (data as MetricsResponse[])?.map(p => ({name: p.ad_name, y: p.ctr}))
						: data,
			},
		],
		xAxis: {
			categories,
		},
	}
}

export const handleErrorMsg = (error: unknown) => {
	let errorMsg: string

	if (axios.isAxiosError(error)) {
		const axiosError = error as AxiosError

		const metricsError = axiosError.response?.data as unknown as MetricsError

		if (metricsError && metricsError.message) {
			errorMsg = metricsError.message
		} else {
			errorMsg = axiosError.message
		}
	} else {
		errorMsg = 'Response error occurred'
	}

	return errorMsg
}
