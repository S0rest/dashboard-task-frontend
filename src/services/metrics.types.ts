export type MetricsResponse = {
	id: number
	ad_name: string
	impressions: number
	clicks: number
	cost: number
	conversions: number
	revenue: number
	ctr: number
	cpc: number
	cpm: number
	cpa: number
	roas: number
}


export type MetricsError = {
	message: string
	details: string
	status_code: number
}