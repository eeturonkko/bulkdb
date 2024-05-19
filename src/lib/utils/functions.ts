import type { DailyWeight } from '$lib/db/schema';
import { formatDistance } from 'date-fns';

export function timeAgo(date: string | Date | null): string {
	if (!date) {
		return 'Unknown time';
	}
	return formatDistance(new Date(date), new Date(), { addSuffix: true });
}

export function getColorByWeightChange(weight: number): string {
	switch (true) {
		case weight === 0:
			return 'text-yellow-400';
		case weight > 0:
			return 'text-green-500';
		default:
			return 'text-red-500';
	}
}

export function calculateDifferences(
	weights: DailyWeight[]
): { weight: DailyWeight; difference: number }[] {
	return weights.map(function (weight, index, weights) {
		if (index === 0) return { weight, difference: 0 };
		const difference = weight.weight - weights[index - 1].weight;
		return { weight, difference: +difference.toFixed(2) };
	});
}

export function formatDate(date: Date | null): string {
	if (!date) return 'No Date';
	return new Date(date).toISOString().split('T')[0]; // outputs YYYY-MM-DD
}
