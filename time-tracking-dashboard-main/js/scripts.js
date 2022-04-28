window.addEventListener('load',()=>{
    const daily = document.querySelector('#daily')
    const weekly = document.querySelector('#weekly')
    const monthly = document.querySelector('#monthly')

    /* Cargar archivo json */
    const jsonData = [
        {
          "title": "Work",
          "timeframes": {
            "daily": {
              "current": 5,
              "previous": 7
            },
            "weekly": {
              "current": 32,
              "previous": 36
            },
            "monthly": {
              "current": 103,
              "previous": 128
            }
          }
        },
        {
          "title": "Play",
          "timeframes": {
            "daily": {
              "current": 1,
              "previous": 2
            },
            "weekly": {
              "current": 10,
              "previous": 8
            },
            "monthly": {
              "current": 23,
              "previous": 29
            }
          }
        },
        {
          "title": "Study",
          "timeframes": {
            "daily": {
              "current": 0,
              "previous": 1
            },
            "weekly": {
              "current": 4,
              "previous": 7
            },
            "monthly": {
              "current": 13,
              "previous": 19
            }
          }
        },
        {
          "title": "Exercise",
          "timeframes": {
            "daily": {
              "current": 1,
              "previous": 1
            },
            "weekly": {
              "current": 4,
              "previous": 5
            },
            "monthly": {
              "current": 11,
              "previous": 18
            }
          }
        },
        {
          "title": "Social",
          "timeframes": {
            "daily": {
              "current": 1,
              "previous": 3
            },
            "weekly": {
              "current": 5,
              "previous": 10
            },
            "monthly": {
              "current": 21,
              "previous": 23
            }
          }
        },
        {
          "title": "Self Care",
          "timeframes": {
            "daily": {
              "current": 0,
              "previous": 1
            },
            "weekly": {
              "current": 2,
              "previous": 2
            },
            "monthly": {
              "current": 7,
              "previous": 11
            }
          }
        }
      ]
      const previous = []
      previous.push(...document.querySelectorAll('.previous'))
      const current = []
      current.push(...document.querySelectorAll('.current'))
      const title = []
      title.push(...document.querySelectorAll('.title'))
      const devolverCurrent = (title,tipo) =>{
        let current = []
        jsonData.forEach((data,i) =>{
           if(data.title === title){
            /* current.push(data.timeframes.daily.current) */
            //semana =data.timeframes.weekly.current
            if(tipo == 'daily'){
              current.push(data.timeframes.daily.current) 
            }else if(tipo == 'weekly'){
              current.push(data.timeframes.weekly.current) 
            }else{
              current.push(data.timeframes.monthly.current) 
            }
           }
        })
        return current
      }
      const devolverPrevious = (title,tipo) =>{
        let previous = []
        jsonData.forEach((data,i) =>{
           if(data.title === title){
            if(tipo == 'daily'){
              previous.push(data.timeframes.daily.previous) 
            }else if(tipo == 'weekly'){
              previous.push(data.timeframes.weekly.previous) 
            }else{
              previous.push(data.timeframes.monthly.previous) 
            }
           }
        })
        return previous
      }
      const imprimirDatos = (ti,cbPrev,cbCurr,tipo,moment) =>{
        for(let i = 0; i<jsonData.length ;i++){
          //console.log(title[i].textContent);
          let pos ;
          if(title[i].textContent === ti){
            pos=i
            if(devolverCurrent(ti,tipo)<=1){
              current[pos].textContent = `${cbCurr(ti,tipo)}hr`
              /* previous[pos].textContent = `${moment} - ${cbPrev(ti,tipo)}hr` */
            }else{
              current[pos].textContent = `${cbCurr(ti,tipo)}hrs`
              /* previous[pos].textContent = `${moment} - ${cbPrev(ti,tipo)}hrs` */
            }
            if(devolverPrevious(ti,tipo) <=1){
              previous[pos].textContent = `${moment} - ${cbPrev(ti,tipo)}hr`
            }else{
              previous[pos].textContent = `${moment} - ${cbPrev(ti,tipo)}hrs`
            }
          }
        }
      }
      
      daily.addEventListener('click',()=>{  
        daily.className = 'cl'
        weekly.className = 'enlace'
        monthly.className = 'enlace'
        jsonData.forEach(element =>{
          imprimirDatos(element.title,devolverPrevious,devolverCurrent,'daily','Yesterday')
        })
      })
      weekly.addEventListener('click',()=>{
        weekly.className = 'cl'
        daily.className = 'enlace'
        monthly.className = 'enlace'
        jsonData.forEach((element,i) =>{
          if(title[i].textContent == element.title){
            imprimirDatos(element.title,devolverPrevious,devolverCurrent,'weekly','Last Week')
          }
        })
      })
      monthly.addEventListener('click',()=>{
        monthly.className = 'cl'
        weekly.className = 'enlace'
        daily.className = 'enlace'
        jsonData.forEach((element,i) =>{
          if(title[i].textContent == element.title){
            imprimirDatos(element.title,devolverPrevious,devolverCurrent,'monthly','Last Month')
          }
        })
      })
})