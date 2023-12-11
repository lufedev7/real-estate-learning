export function FormatPrice(price: number) {
  return Number(price).toLocaleString('es-ES', {
    style: 'currency',
    currency: 'EUR',
  })
}
