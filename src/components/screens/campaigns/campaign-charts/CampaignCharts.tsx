import CampaignChart from '@/components/chart/CampaignChart'
import 'simplebar-react/dist/simplebar.min.css'
import s from './CampaignCharts.module.scss'
import { CampaignChartsProps } from './campaignCharts.types'

const CampaignCharts = ({
	imprOpt,
	clicksOpt,
	costOpt,
	convOpt,
	revOpt,
	ctrOpt,
	isLoading,
	isError,
}: CampaignChartsProps) => {
	return (
		<>
			{!isError && !isLoading && (
				<div className='dashboard-card mb-5 overflow-x-auto overflow-y-hidden'>
					<div className={s.row}>
						<div className={s.item}>
							<CampaignChart chartOptions={imprOpt} />
						</div>
						<div className={s.item}>
							<CampaignChart chartOptions={clicksOpt} />
						</div>
					</div>
					<div className={s.row}>
						<div className={s.item}>
							<CampaignChart chartOptions={costOpt} />
						</div>
						<div className={s.item}>
							<CampaignChart chartOptions={convOpt} />
						</div>
					</div>
					<div className={s.row}>
						<div className={s.item}>
							<CampaignChart chartOptions={revOpt} />
						</div>
						<div className={s.item}>
							<CampaignChart chartOptions={ctrOpt} />
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default CampaignCharts
