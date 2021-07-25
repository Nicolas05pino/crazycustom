const slider = document.querySelector('#slider')
        const canvas = document.querySelector('#canvas')
        slider.addEventListener('input', handleInputSlider)
        const ctx = canvas.getContext('2d')
        const images = []
        for(let x= 1; x <=36; x +=1){
            const number = x.toString().padStart(2,'00')
            const url = `https://stockx-360.imgix.net/adidas-Yeezy-Boost-350-V2-Yecheil/Images/adidas-Yeezy-Boost-350-V2-Yecheil/Lv2/img${number}.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1574449122`
            //const url = `https://stockx-360.imgix.net/adidas-Yeezy-Boost-350-V2-Yecheil/Images/adidas-Yeezy-Boost-350-V2-Yecheil/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1574449122`
            const image = new Image()
            image.src = url
            image.addEventListener('load', () => {
                images[x] = image
                if (x ===1) {
                    loadImage(x)
                }
            })
        }
        function loadImage(index) {
            ctx.drawImage(images[index], 0, 0, canvas.width, canvas.height)
        }
        function handleInputSlider() {
            console.log(this.value)
            loadImage(this.value)
        }

        const bg = document.getElementById('bg');
    function randomColor(){
        return Math.floor(Math.random()*255);
    }
    bg.addEventListener('click', () =>{
    bg.style.backgroundColor = 'rgba('+randomColor()+','+randomColor(
    )+','+randomColor()+')'
      })