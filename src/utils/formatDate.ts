export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('pt-BR').format(date);
}
