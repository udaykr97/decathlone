var product = JSON.parse(localStorage.getItem('cricket-product')) || []
var detail = {
    bat: 'MRF Bat',
    ball: 'Leather ball',
    pad: 'MRF pad',
    stump: 'SS stump',
    helmet: 'SS helmet'
}
console.log(detail)
product.push(detail)

localStorage.setItem('cricket-product', JSON.stringify(product))