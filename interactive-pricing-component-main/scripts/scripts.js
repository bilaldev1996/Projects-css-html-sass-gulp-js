addEventListener('load',()=>{
    
    const descuento = document.querySelector('.descuento')
    const boton = document.querySelector('.boton')
    const bola = document.querySelector('.bola')
    const year= document.querySelector('.year')
    const price = document.querySelector('.price')
    const progressBar = document.querySelector('.progressbar')
    const botones = document.querySelectorAll('.slid')
    const numbersPage = document.querySelector('.numbersPage')
    const prices = document.querySelector('.prices')
    boton.setAttribute('disabled','')
    let anchoVentana = window.innerWidth
    window.onresize = () =>{
        anchoVentana = window.innerWidth
        if(anchoVentana > 578){
            descuento.textContent = '25% discount'
        }else{
            descuento.textContent = '-25%'
        }
    }
    const render = (valorBar,valorPage,valorPrice) =>{
        progressBar.value = valorBar
        numbersPage.textContent = valorPage
        prices.textContent = valorPrice
    }
    
    const discountYear = (priceMonth) =>{
        let dis = (priceMonth*12)*0.25
        let res = (priceMonth*12) - dis
        return res
    }

    const botonActivo = (month) =>{
        if(boton.classList.contains('active')){
            changeYear(month)
            retBolaLeft()
        }
    }
    const botonDesactivado = (month) =>{
        if(boton.classList.contains('desactive')){
            changeMonth(month)
        }
    }
    botones.forEach(btn =>{
        let content = btn.textContent
        btn.addEventListener('click',()=>{
            boton.removeAttribute('disabled','')
            if(content === '20%'){
                removeClass()
                btn.classList.add('--active')
                render(20,'10K','$8')
                retYear(8)
                botonActivo(8)
                botonDesactivado(8)
            }else if(content === '40%'){
                removeClass()
                btn.classList.add('--active')
                render(40,'50K','$12')
                retYear(12)
                botonActivo(12)
                botonDesactivado(12)
            }else if(content === '60%'){
                removeClass()
                btn.classList.add('--active')
                render(60,'100K','$16')
                retYear(16)
                botonActivo(16)
                botonDesactivado(16)
            }else if(content === '80%'){
                removeClass()
                btn.classList.add('--active')
                /* botones[2].classList.remove('--active') */
                render(80,'500K','$24')
                retYear(24)
                botonActivo(24)
                botonDesactivado(24)
            }else{
                removeClass()
                btn.classList.add('--active')
                render(100,'1M','$36')
                retYear(36)
                botonActivo(36)
                botonDesactivado(36)
            }
        })
    })
    const removeClass = () =>{
        botones.forEach(btn =>{
            if(btn.classList.contains('--active')){
                btn.classList.remove('--active')
            }
        })
    }
    const  retYear =  (month) =>{
        boton.addEventListener('click',()=>{
            const span = document.createElement('span')
            let anio = year.textContent='/ year'
            boton.classList.add('active')
            bola.classList.add('toRight')
            span.textContent = anio
            span.classList.add('year')
            price.textContent = `$${discountYear(month)}`
            price.append(span)
            year.classList.add('anio')
            if(boton.classList.contains('active')){
                console.log('activo');
                 retBolaLeft()
            }
            if(boton.classList.contains('desactive')){
                retBolaRigth()
                console.log('desactivado');
            }
        })
    }

    const changeYear = (month) =>{
        const span = document.createElement('span')
        let anio = year.textContent='/ year'
        span.textContent = anio
        span.classList.add('year')
        price.textContent = `$${discountYear(month)}`
        price.append(span)
        year.classList.add('anio')
    }

    const changeMonth = (month) =>{
        const span = document.createElement('span')
        let anio = year.textContent='/ month'
        span.textContent = anio
        span.classList.add('year')
        price.textContent = `$${month}`
        price.append(span)
        year.classList.add('anio')
    }

    const retBolaLeft = () =>{
        bola.addEventListener('click',()=>{
            boton.classList.add('desactive')
            bola.classList.add('toLeft')
            bola.classList.remove('toRight')
            bola.classList.remove('active')
        })
    }
    const retBolaRigth =  () =>{
        bola.addEventListener('click',()=>{
            boton.classList.add('active')
            bola.classList.add('toRight')
            bola.classList.remove('toLeft')
            boton.classList.remove('desactive')
        })
    }
})


/* -10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month */