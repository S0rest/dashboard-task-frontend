import { ROUTE } from '@/util/enums'
import cn from 'clsx'
import { GemIcon } from 'lucide-react'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import s from './Sidebar.module.scss'
import SidebarContent from './content/SidebarContent'
import { SidebarProps } from './sidebar.types'

const Sidebar = memo(({ sidebar }: SidebarProps) => {
	return (
		<>
			<div
				className={cn(s.verticalMenu, {
					[s.verticalMenu_collapsed]: sidebar,
				})}
			>
				<div
					className={cn(s.navbarBrandBox, {
						[s.navbarBrandBox_collapsed]: sidebar,
					})}
				>
					<Link className={s.link} to={ROUTE.HOME}>
						<span className={cn(s.logo)}>
							<GemIcon color='#A6B0CF' />
						</span>
						{!sidebar && <span className={s.logoText}>Dashboard</span>}
					</Link>
				</div>
				<div
					className={cn(s.sidebarMenu, {
						[s.sidebarMenu_collapsed]: sidebar,
					})}
				>
					<SidebarContent sidebar={!sidebar} />
				</div>
			</div>
		</>
	)
})

export default Sidebar
