window.addEventListener('load',()=>{
    const inputPropina = document.querySelector('.inputPropina')
    const numberPeople = document.querySelector('.numberPeople')
    const buttons = document.querySelectorAll('.btn')
    const tipAmount = document.querySelector('.tipAmount')
    const totalPerson = document.querySelector('.total')
    inputPropina.addEventListener('change',(e)=>{
        let valorBill
        valorBill = e.target.valueAsNumber
        numberPeople.addEventListener('change',(e)=>{
            let valorPerson = e.target.valueAsNumber
            buttons.forEach(btn =>{
                btn.addEventListener('click',(e)=>{
                    btn.classList.add('active')
                    let valorBotonClick = e.target.value.replace('%','')
                    if(valorBotonClick === 'Custom'){
                        let num =prompt('Introduce un porcentaje')
                        let valorCustom= document.querySelector('.custom').value = `${num}%`
                        valorBotonClick = valorCustom.replace('%','')
                        console.log(valorBotonClick);         
                    }
                    let porcentaje = valorBotonClick/100
                    console.log(porcentaje);

                    let amountPerson = valorBill*porcentaje/valorPerson

                    let totalPerPerson = (valorBill/valorPerson+amountPerson).toFixed(2)

                    tipAmount.textContent = `$${amountPerson.toFixed(2)}`
                    totalPerson.textContent = `$${totalPerPerson}`
                })
            })
        })
    })

    const reset = document.querySelector('.res')
    reset.addEventListener('click',()=>{
        window.location.reload()
        document.querySelector('.number').value = 1
        document.querySelector('.numbersPerson').value = 1
        numberPeople.value = 1
        console.log(inputPropina.value);
    })
    
})