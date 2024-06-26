import cn from 'clsx'
import { MenuIcon } from 'lucide-react'
import { memo } from 'react'
import s from './Header.module.scss'
import { HeaderProps } from './header.types'

const Header = memo(({ sidebar, handleCollapseSidebar }: HeaderProps) => {
	return (
		<header className={s.header}>
			<div
				className={cn(s.headerNavbar, {
					[s.headerNavbar_closed]: sidebar,
				})}
			>
				<button
					className={s.headerNavbar__button}
					onClick={handleCollapseSidebar}
				>
					<span>
						<MenuIcon color='#A6B0CF' size={50} />
					</span>
				</button>
			</div>
		</header>
	)
})

export default Header
