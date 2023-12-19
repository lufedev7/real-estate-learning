export interface PropertiesData {
  id: number
  location: string
  price: number
  bedrooms: number
  bathroom: number
  image: string
  star: number
  meters: number
}
export interface PropertiesDataGrid {
  key: number
  property: PropertiesData
}
