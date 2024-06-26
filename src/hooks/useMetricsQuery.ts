import { metricsService } from '@/services/metrics.service'
import { MetricsQueryType } from '@/types/hooks.types'
import { useQuery } from '@tanstack/react-query'

export const useMetricsQuery = ({ search }: MetricsQueryType) => {
	return useQuery({
		queryKey: ['metrics', search],
		queryFn: () => metricsService.getAll({ search }),
		retry: 0,
	})
}
