export interface GithubMonthData {
  [key: string]: number;
}

export const monthsForLocale = (
  monthFormat: 'short' | 'numeric' | '2-digit' | 'long' | 'narrow' | undefined,
): GithubMonthData => {
  const currentLocale = Intl.DateTimeFormat().resolvedOptions().locale;

  const format = (date: Date) =>
    new Intl.DateTimeFormat(currentLocale, {
      month: monthFormat,
    })
      .format(date)
      .slice(0, -1);

  const data: GithubMonthData = {};
  [...Array(12).keys()].forEach(
    m => (data[format(new Date(Date.UTC(2021, m % 12)))] = 0),
  );

  return data;
};
