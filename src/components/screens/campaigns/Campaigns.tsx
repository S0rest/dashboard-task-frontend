import { useDebounce } from '@/hooks/useDebounce'
import { useMetricsQuery } from '@/hooks/useMetricsQuery'
import { createChartOptions, handleErrorMsg } from '@/util/helpers'
import { ChangeEvent, useEffect, useState } from 'react'
import CampaignCharts from './campaign-charts/CampaignCharts'
import CampaignTable from './campaign-table/CampaignTable'

const Campaigns = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedValue = useDebounce(searchTerm)
	const { data, isLoading, isError, error } = useMetricsQuery({
		search: debouncedValue,
	})

	const [imprOpt, setImprOpt] = useState({})
	const [clicksOpt, setClicksOpt] = useState({})
	const [costOpt, setCostOpt] = useState({})
	const [convOpt, setConvOpt] = useState({})
	const [revOpt, setRevOpt] = useState({})
	const [ctrOpt, setCtrOpt] = useState({})

	useEffect(() => {
		if (data?.length === 0) return

		const impr = createChartOptions({
			text: 'Impressions',
			type: 'line',
			data: data?.map(imp => imp.impressions),
			categories: data?.map(imp => imp.ad_name),
		})

		const clicks = createChartOptions({
			text: 'Clicks',
			type: 'bar',
			data: data?.map(imp => imp.clicks),
			categories: data?.map(imp => imp.ad_name),
		})

		const cost = createChartOptions({
			text: 'Cost',
			type: 'line',
			data: data?.map(imp => imp.cost),
			categories: data?.map(imp => imp.ad_name),
		})

		const conv = createChartOptions({
			text: 'Conversions',
			type: 'bar',
			data: data?.map(imp => imp.conversions),
			categories: data?.map(imp => imp.ad_name),
		})

		const rev = createChartOptions({
			text: 'Revenue',
			type: 'line',
			data: data?.map(imp => imp.revenue),
			categories: data?.map(imp => imp.ad_name),
		})

		const ctr = createChartOptions({
			text: 'CTR',
			type: 'pie',
			data: data,
			categories: data?.map(imp => imp.ad_name),
		})

		setImprOpt(impr)
		setClicksOpt(clicks)
		setCostOpt(cost)
		setConvOpt(conv)
		setRevOpt(rev)
		setCtrOpt(ctr)
	}, [data])

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return (
		<>
			<h2 className='title'>Campaigns</h2>
			<CampaignTable
				dataSource={data}
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				isLoading={isLoading}
				isError={isError}
				error={handleErrorMsg(error)}
			/>
			<h3 className='title'>Ad Performance Metrics</h3>
			<CampaignCharts
				imprOpt={imprOpt}
				clicksOpt={clicksOpt}
				costOpt={costOpt}
				convOpt={convOpt}
				revOpt={revOpt}
				ctrOpt={ctrOpt}
				isLoading={isLoading}
				isError={isError}
			/>
		</>
	)
}

export default Campaigns
