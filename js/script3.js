
const slider = document.querySelector('#slider')
const canvas = document.querySelector('#canvas')
slider.addEventListener('input', handleInputSlider)
const ctx = canvas.getContext('2d')
const images = []
window.addEventListener('load', pageLoaded)
function pageLoaded() {
  for (let i = 1; i <= 36; i += 1) {
    const number = i.toString().padStart(2, '00')
    const url = `https://images.stockx.com/360/Nike-Air-Max-90-Infrared-2020/Images/Nike-Air-Max-90-Infrared-2020/Lv2/img${number}.jpg?auto=compress&dpr=1&updated_at=1609366208&fit=clip&fm=webp&ixlib=react-9.1.5&q=90&w=1140`
    const image = new Image()
    image.src = url
    image.addEventListener('load', () => {
      images[i] = image
      if (i === 1) {
        loadImage(i)
      }
    })
  }
}
function loadImage(index) {
  ctx.drawImage(images[index], 0, 0, canvas.width, canvas.height)
}
function handleInputSlider() {
  console.log(this.value)
  loadImage(this.value)
}

       