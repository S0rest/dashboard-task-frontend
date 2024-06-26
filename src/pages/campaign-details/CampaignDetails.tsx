import CampaignChart from '@/components/chart/CampaignChart'
import DashboardError from '@/components/error/DashboardError'
import { useMetricQuery } from '@/hooks/useMetricQuery'
import { ROUTE } from '@/util/enums'
import Highcharts from 'highcharts'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import 'simplebar-react/dist/simplebar.min.css'

const CampaignDetails = () => {
	const params = useParams()
	const navigate = useNavigate()

	const metricId = Number(params?.campaignId)
	const { data, isLoading, isError, error } = useMetricQuery(Number(metricId))
	const [chartOpt, setChartOptions] = useState({})

	useEffect(() => {
		if (!data) return

		const columnChartOptions: Highcharts.Options = {
			chart: {
				type: 'column',
			},
			title: {
				text: 'Ad Performance Metrics',
			},
			xAxis: {
				categories: [data.ad_name],
				crosshair: true,
			},
			yAxis: {
				title: {
					text: '',
				},
				labels: {
					formatter: function () {
						return this.value + ' $'
					},
				},
			},
			series: [
				{
					name: 'CPC',
					type: 'column',
					data: [data.cpc],
				},
				{
					name: 'CPA',
					type: 'column',
					data: [data.cpa],
				},
				{
					name: 'CPM',
					type: 'column',
					data: [data.cpm],
				},
			],
		}

		setChartOptions(columnChartOptions)
	}, [data])

	useEffect(() => {
		if (!metricId) {
			navigate(ROUTE.DASHBOARD)
		}
	}, [metricId, navigate])

	return (
		<div className='dashboard-card'>
			{isError ? (
				<DashboardError
					text={error?.response?.data?.message || error?.message}
				/>
			) : (
				!isLoading && (
					<>
						<h2 className='title'>{data?.ad_name}</h2>
						<div className='dashboard-card w-full'>
							<div className='mb-5'>
								<CampaignChart chartOptions={chartOpt} />
							</div>
							<div className='flex justify-between items-center'>
								<span className='text-xl text-[#afbeeb]'>
									Impressions: {data?.impressions}
								</span>
								<span className='text-xl text-[#afbeeb]'>
									Clicks: {data?.clicks}
								</span>
								<span className='text-xl text-[#afbeeb]'>
									Cost: {data?.cost + '$'}
								</span>
								<span className='text-xl text-[#afbeeb]'>
									Conversions: {data?.conversions}
								</span>
								<span className='text-xl text-[#afbeeb]'>
									Revenue: {data?.revenue}
								</span>
								<span className='text-xl text-[#afbeeb]'>
									CTR: {data?.ctr + '%'}
								</span>
								<span className='text-xl text-[#afbeeb]'>
									CPC: {data?.cpc + '$'}
								</span>
								<span className='text-xl text-[#afbeeb]'>
									CPA: {data?.cpa + '$'}
								</span>
								<span className='text-xl text-[#afbeeb]'>
									CPM: {data?.cpm + '$'}
								</span>
								<span className='text-xl text-[#afbeeb]'>
									ROAS: {data?.roas}
								</span>
							</div>
						</div>
					</>
				)
			)}
		</div>
	)
}

export default CampaignDetails
