export const Formatter = {
  formatDate(date: any) {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    return `${date.getDay()} ${
      monthNames[date.getMonth()]
    }, ${date.getFullYear()}`
  },
  numberWithCommas(x: any) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  },
}
