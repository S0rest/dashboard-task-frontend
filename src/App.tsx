import Layout from '@/components/layout/Layout'
import About from '@/pages/about/About'
import CampaignDetails from '@/pages/campaign-details/CampaignDetails'
import Dashboard from '@/pages/dashboard/Dashboard'
import Home from '@/pages/home/Home'
import { ROUTE } from '@/util/enums'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route
						path={ROUTE.MAIN}
						element={<Navigate to={ROUTE.DASHBOARD} />}
					/>
					<Route path={ROUTE.HOME} element={<Home />} />
					<Route path={ROUTE.ABOUT} element={<About />} />
					<Route path={ROUTE.DASHBOARD} element={<Dashboard />} />
					<Route path={ROUTE.CAMPAIGN_DETAILS} element={<CampaignDetails />} />
				</Route>
				<Route path='*' element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
