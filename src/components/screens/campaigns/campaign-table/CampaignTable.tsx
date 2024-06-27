import DashboardError from '@/components/error/DashboardError'
import { ROUTE } from '@/util/enums'
import { CAMPAIGN_COLUMNS } from '@/util/helpers'
import cn from 'clsx'
import { SearchIcon } from 'lucide-react'
import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import s from './CampaignTable.module.scss'
import { CampaignTableProps } from './campaignTable.type'
import TablePreloader from './preloader/TablePreloader'

const CampaignTable = memo(
	({
		dataSource,
		searchTerm,
		handleSearch,
		isLoading,
		isError,
		error,
	}: CampaignTableProps) => {
		const navigate = useNavigate()

		const handleRowClick = (id: number) => {
			navigate(ROUTE.DASHBOARD + '/' + id)
		}

		return (
			<div className='dashboard-card mb-6'>
				{isError ? (
					<DashboardError text={error} />
				) : (
					<SimpleBar autoHide={false} className={s.orderTable}>
						<div className={s.orderTable__row}>
							<div className={s.orderTable__search}>
								<span className={s.orderTable__searchIcon}>
									<SearchIcon color='#a6b0cf' />
								</span>
								<input
									id='search'
									className={cn('input', s.orderTable__searchInput)}
									type='text'
									placeholder='Search by name...'
									value={searchTerm}
									onChange={handleSearch}
								/>
							</div>
						</div>
						<table className={s.orderTable__table}>
							<thead>
								<tr>
									{CAMPAIGN_COLUMNS?.map(c => (
										<th key={c.key}>{c.title}</th>
									))}
								</tr>
							</thead>
							<tbody
								className={cn({
									['h-[150px]']: isLoading,
								})}
							>
								{dataSource?.map(c => (
									<tr key={c.id} onClick={() => handleRowClick(c.id)}>
										<td>{c.id}</td>
										<td>{c.ad_name}</td>
										<td>{c.impressions}</td>
										<td>{c.clicks}</td>
										<td>{c.cost + '$'}</td>
										<td>{c.conversions}</td>
										<td>{c.revenue + '$'}</td>
										<td>{c.ctr + '%'}</td>
										<td>{c.cpc + '$'}</td>
										<td>{c.cpm + '$'}</td>
										<td>{c.cpa + '$'}</td>
										<td>{c.roas}</td>
									</tr>
								))}
								{isLoading && <TablePreloader />}
							</tbody>
						</table>
					</SimpleBar>
				)}
			</div>
		)
	}
)

export default CampaignTable
