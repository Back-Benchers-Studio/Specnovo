import { proxy } from 'valtio'

let colors = ['#08BCBB', '#EFBD4E', '#80C670', '#726DE8','#2B7A78','#EF674E', '#353934','#ecdea7','red']
const state = proxy({
  intro: true,
  colors:colors, 
  inConfigMode:false,
  inShopMode:false,
  decals: ['logo'],
  color: '#726DE8',
  decal: 'logo'
})

export { state }
