// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function addThousandSeparators(number: number | string) {
  return (number = number
    .toLocaleString()
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."));
}
