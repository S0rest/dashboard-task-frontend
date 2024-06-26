import { metricsService } from '@/services/metrics.service'
import { useQuery } from '@tanstack/react-query'

export const useMetricQuery = (id: number) => {	
	return useQuery({
		queryKey: ['metric'],
		queryFn: () => metricsService.getMetric(id),
		enabled: !!id,
		retry: 0,
	})
}
