export const getParsedDate = (date: string) => {
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' } as const;

  return new Date(date).toLocaleDateString(undefined, dateOptions);
};
