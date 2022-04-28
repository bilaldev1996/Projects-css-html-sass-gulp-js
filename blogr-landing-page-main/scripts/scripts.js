addEventListener('load',()=>{
    const nav = document.querySelector('.nav')
    const close = document.querySelector('.close')
    const hamburger = document.querySelector('.hamburguer')
    const arrow = document.querySelectorAll('.arrow')
    const titles = document.querySelectorAll('.title')
    const editorDesktop = document.querySelector('.editorDesktop')
    const laptopDesktop = document.querySelector('.laptobMobile')

    if(innerWidth < 768){
        nav.style.display = 'none'
    }else{
        nav.style.display = ''
        arrow.forEach(arr =>{
            arr.src = "./images/icon-arrow-light.svg"
        })
        titles.forEach(title =>{
            title.addEventListener('click',()=>{
                toggleClass(title,'decoration')
            })
            title.addEventListener('click',toggleMenuDisplay)
            setTimeout(() => {
                if(title.classList.contains('decoration')){
                    console.log('tiene la clase decoration');
                    titles.forEach(title =>{
                        title.addEventListener('click',recogerMenu)
                    })
                }
            }, 1000);
        })
        editorDesktop.src = '../images/illustration-editor-desktop.svg'
        laptopDesktop.src = '../images/illustration-laptop-desktop.svg'

    }


    /* Ocultar icono hamburguer y mostrar X */
    hamburger.addEventListener('click',()=>{
        hamburger.style.display = 'none'
        nav.style.display = 'block'
        close.style.display = 'block'
    })

    /* Mostrar icono hamburguer y ocultar X */
    close.addEventListener('click',()=>{
        console.log('click');
        nav.style.display = 'none'
        close.style.display = 'none'
        hamburger.style.display = 'block'
        closeAll()
    })

     /* Para que no queden los menus desplegados en la version movil */
    const closeAll = () =>{
            document.querySelectorAll('.ocultar').forEach(oc =>{
                oc.classList.add('hide')
            arrow.forEach(arr =>{
                arr.classList.add('rotate0')
            })
        })
    }

    /* Trabajando dentro del menu */
  
    /* Desplegando menús en modo móvil */
    arrow.forEach(arr => {
        arr.addEventListener('click',()=>{
            arr.addEventListener('click',toggleMenuDisplay)
           /*  arr.addEventListener('click',toggleMenuDisplay)
            arr.addEventListener('click',toggleMenuDisplay)
            console.log('He entrado'); */
        })
    })

    function toggleClass(elem,className){
        if (elem.className.indexOf(className) !== -1){
            elem.className = elem.className.replace(className,'');
        }else{
            elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
        }
    
        return elem;
    }

    function recogerMenu(e){
        const dropdown = e.currentTarget.parentNode;
        const menu = dropdown.querySelector('.ocultar');
        const icon = dropdown.querySelector('.arrow');
        toggleClass(menu,'hide');
        toggleClass(icon,'rotate-90');   
    }
    function toggleMenuDisplay(e){
        const dropdown = e.currentTarget.parentNode;
        const menu = dropdown.querySelector('.ocultar');
        const icon = dropdown.querySelector('.arrow');
        
        if(dropdown.className !== menu.className){
            document.querySelectorAll('.ocultar').forEach(oc =>{
                if(oc != dropdown.className){
                    oc.classList.add('hide')
                    arrow.forEach(arr =>{
                        arr.classList.remove('rotate-90')
                    })
                }
                setTimeout(() => {
                    if(oc.classList.contains('hide')){
                        console.log('he entrado por fin');
                        arrow.forEach(arr =>{
                            arr.addEventListener('click',recogerMenu)
                        })
                    }
                }, 1000);
            })            
            toggleClass(menu,'hide');
            toggleClass(icon,'rotate-90');        
        }
    }

})