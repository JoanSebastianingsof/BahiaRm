const opciones = {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}

let sliders = []

for(let i = 1;i < 5; i++) {
  sliders.push(new Swiper('.cs' + i, opciones));
}


const deslizar = (slider, direccion) => {
  const sliderADeslizar = sliders[slider - 1]
  if(direccion === 'd') {
    sliderADeslizar.slideNext()
  } 
  else {
    sliderADeslizar.slidePrev()
  }
}
