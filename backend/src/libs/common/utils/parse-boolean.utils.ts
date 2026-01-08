export function parseBoolean(value: string) {
  if (typeof value === 'boolean') {
    return value;
  }
  if (typeof value === 'string') {
    const lowerValue = value.trim().toLocaleLowerCase();

    if (lowerValue === 'true') {
      return true;
    }
    if (lowerValue === 'false') {
      return false;
    }
  }

  throw new Error(`Не удалось переобразить значение ${value}.`);
}
