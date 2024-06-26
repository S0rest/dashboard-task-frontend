import { useDimensions } from '@/hooks/useDimensions'
import cn from 'clsx'
import { useCallback, useState } from 'react'
import { Outlet } from 'react-router-dom'
import s from './Layout.module.scss'
import Footer from './footer/Footer'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'

const Layout = () => {
	const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
	useDimensions({ fnCallback: setIsSidebarCollapsed, dimensionsWidth: 991.98 })

	const handleCollapseSidebar = useCallback(() => {
		setIsSidebarCollapsed(prev => !prev)
	}, [])

	return (
		<main className='w-full min-h-full overflow-hidden flex flex-col'>
			<Sidebar sidebar={!isSidebarCollapsed} />
			<Header
				sidebar={!isSidebarCollapsed}
				handleCollapseSidebar={handleCollapseSidebar}
			/>
			<section
				className={cn(s.dashboardContent, {
					[s.dashboardContent__closed]: !isSidebarCollapsed,
				})}
			>
				<Outlet />
			</section>
			<Footer />
		</main>
	)
}

export default Layout
