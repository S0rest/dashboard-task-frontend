import { MENU_ITEMS } from '@/util/helpers'
import cn from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import { SidebarProps } from '../sidebar.types'
import s from './SidebarContent.module.scss'

const SidebarContent = ({ sidebar }: SidebarProps) => {
	const location = useLocation()

	return (
		<SimpleBar className={s.scrollbar}>
			<ul className={s.menu}>
				{MENU_ITEMS.map((item, index) => (
					<li key={'menu-item' + index} className={s.menuItem}>
						<Link
							to={item.link}
							className={cn(s.menuItem__link, {
								[s.menuItem__link_active]: location.pathname.includes(
									item.link
								),
							})}
						>
							<span>
								{location.pathname.includes(item.link) ? (
									<item.icon color='#fff' />
								) : (
									<item.icon />
								)}
							</span>
							{sidebar && <p className={s.menuItem__text}>{item.value}</p>}
						</Link>
					</li>
				))}
			</ul>
		</SimpleBar>
	)
}

export default SidebarContent
