import axios from '@/axios/axios'
import { MetricsQueryType } from '@/types/hooks.types'
import { METRICS } from '@/util/api'
import { AxiosResponse } from 'axios'
import { MetricsError, MetricsResponse } from './metrics.types'

export const metricsService = {
	getAll: async ({ search }: MetricsQueryType): Promise<MetricsResponse[]> => {
		const response: AxiosResponse<MetricsResponse[], MetricsError> =
			await axios.get(METRICS, {
				params: {
					search,
				},
			})
		return response.data
	},
	getMetric: async (id: number): Promise<MetricsResponse> => {
		const response: AxiosResponse<MetricsResponse, MetricsError> =
			await axios.get(METRICS + '/' + id)
		return response.data
	},
}
