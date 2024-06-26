import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useRef } from 'react'
import { CampaignChartProps } from './campaignChart.types'

const CampaignChart = ({ chartOptions }: CampaignChartProps) => {
	const chartComponentRef = useRef<HighchartsReact.RefObject>(null)

	return (
		<HighchartsReact
			highcharts={Highcharts}
			options={chartOptions}
			ref={chartComponentRef}
		/>
	)
}

export default CampaignChart
