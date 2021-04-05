w=window
d=document

w.addEventListener("load", e =>{
    var h3=document.querySelectorAll("h3")
    global.addEventListener("scroll", ()=> {
        if(global.scrollTop >= global.offsetHeight*1.5){
            btnScrollTop.style.display = "block"
        }else{
            btnScrollTop.style.display = "none"
        }
    })

    btnScrollTop.addEventListener("click", ()=>{
        global.scrollTo(0,0)
    })
})