import { TriangleAlertIcon } from 'lucide-react'
import { DashboardErrorProps } from './dashboardError.types'

const DashboardError = ({ text }: DashboardErrorProps) => {
	return (
		<div className='flex justify-center items-center'>
			<span className='mr-4'>
				<TriangleAlertIcon color='#fff' size={35} />
			</span>
			<h2 className='text-3xl text-[#fff]'>{text}</h2>
		</div>
	)
}

export default DashboardError
