export const toVND = (price) => {
  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
  const currency = formatter.format(price);
  return currency;
}