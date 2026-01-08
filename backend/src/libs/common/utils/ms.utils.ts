type TimeUnit = 'ms' | 's' | 'm' | 'h' | 'd';

function toMilliseconds(value: number, unit: TimeUnit): number {
  switch (unit) {
    case 'ms':
      return value;
    case 's':
      return value * 1000;
    case 'm':
      return value * 1000 * 60;
    case 'h':
      return value * 1000 * 60 * 60;
    case 'd':
      return value * 1000 * 60 * 60 * 24;
    default:
      throw new Error(`Unknown time unit: ${unit}`);
  }
}

export function parseTimeToMs(input: string): number {
  const match = input.match(/^(\d+(?:\.\d+)?)(ms|s|m|h|d)$/);
  if (!match) throw new Error(`Invalid time format: ${input}`);
  const [, numStr, unit] = match;
  return toMilliseconds(parseFloat(numStr), unit as TimeUnit);
}
