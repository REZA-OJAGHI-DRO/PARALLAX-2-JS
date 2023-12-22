let txt=document.getElementById('txt')
let main=document.querySelector('main')
let hed=document.getElementById('hed')
let img1=document.getElementById('img1')
let s1ar1=document.getElementById('s1ar1')
let _sec2=document.getElementById('sec2')
let _ofSec2=document.getElementById('ofSec2')
let _sec3=document.getElementById('sec3')
let _ofSec3=document.getElementById('ofSec3')
let _ofSec3ar1=document.getElementById('ofSec3ar1')
let _ofSec3ar2=document.getElementById('ofSec3ar2')
let _ofSec4=document.getElementById('ofSec4')

let _sec4ar1=document.getElementById('sec4ar1')
let _sec4ar2=document.getElementById('sec4ar2')
let _sec5ar1=document.getElementById('sec5ar1')
let _sec6ar1=document.getElementById('sec6ar1')
let _sec7=document.getElementById('sec7')
let _sec8=document.getElementById('sec8')
let _sec9=document.getElementById('sec9')
let _sec10=document.getElementById('sec10')
let _img2=document.getElementById('img2')
let _img3=document.getElementById('img3')
let _img4=document.getElementById('img4')
let _img5=document.getElementById('img5')


// main.scrollBy(0,10);
main.addEventListener('scroll',(e)=>{
    let st=e.target.scrollTop
    txt.innerHTML=st
    let y= hed.offsetTop
    
    if(st>200){
        hed.style.top=st+'px'
        s1ar1.style.opacity=0
        if(st>y){
            hed.style.height=0
        }else if(st<y){         
            hed.style.height=10+'vh'
            hed.style.background='black'
            hed.style.opacity='.7'
        }
    }else {
        hed.style.height=15+'vh'     
        hed.style.top=st+'px'
        s1ar1.style.opacity=1
    }

    if(0 <st<500){
    img1.style.scale=(st*.0006)+1
}else{
    img1.style.scale=1
}
let ofSec2=_ofSec2.offsetTop                            
if(st>ofSec2+100){
   _sec2.style.top=(st-(ofSec2+100))+'px'
}else{
   _sec2.style.top='0px'

}

let ofSec3=_ofSec3.offsetTop
let ofSec3ar1=_ofSec3ar1.offsetTop
let ofSec3ar2=_ofSec3ar2.offsetTop
let ofSec4ar1=_sec8.offsetTop
let ofSec4=_ofSec4.offsetTop

console.log(ofSec4ar1)
console.log(ofSec3ar1)
console.log(ofSec3ar2)
console.log(ofSec3)
console.log(ofSec4)

if(st>ofSec3 && st<ofSec4){
    _sec3.style.top=-((st-ofSec3)/4)+'px'
}else{
    _sec3.style.top='0px'
}
 
if(st>ofSec2 && st<(ofSec3)){
    x=(100/(ofSec3-ofSec2))
    _sec4ar1.style.transform='translate('+ (((st-ofSec2)*x)-100) +'%)'
    _sec4ar2.style.transform='translate('+ -(((st-ofSec2)*x)-100) +'%)'
}

 if(st>((ofSec3+(ofSec3ar1/2))) && st<(ofSec3ar1+ofSec3)){
    x=(100/((ofSec3ar1+ofSec3)-(ofSec3+(ofSec3ar1/2))))
    _sec5ar1.style.width=(((st-(ofSec3+(ofSec3ar1/2)))*x)+20)+'%'
    _img2.style.top=(((st-(ofSec3+(ofSec3ar1/2)))/2)+'px')
    _img3.style.top=(((st-(ofSec3+(ofSec3ar1/2)))/2)+'px')
    _img2.style.left=(((st-(ofSec3+(ofSec3ar1/2)))/2)+'px')
    _img3.style.right=(((st-(ofSec3+(ofSec3ar1/2)))/2)+'px')
    // _img2.style.transform='translateX('+(((st-2000)*.116)-50)+'%) translateY('+(((st-2000)*.116)-50)+'%)'
    // _img3.style.transform='translateX('+ -(((st-2000)*.116)-50)+'%) translateY('+ -(((st-2000)*.116)-50)+'%)'
    // _img2.style.opacity=(((st-2000)*.0025)-1)
    // _img3.style.opacity=(((st-2000)*.0025)-1)
 }

 if(st>(ofSec3+ofSec3ar2) && st<(ofSec4+(ofSec4ar1/3))){
    x=(.3/((ofSec4+(ofSec4ar1/3))-(ofSec3+ofSec3ar2)))
    y=(20/((ofSec4+(ofSec4ar1/3))-(ofSec3+ofSec3ar2)))
    _img4.style.scale=1.3-((st-(ofSec3+ofSec3ar2))*x)
    _img5.style.bottom=-((20-((st-(ofSec3+ofSec3ar2))*y)))+'%'
 }else{
    _img4.style.scale=1.3
 }
//  ****
if(st>(ofSec3+ofSec3ar2) && st<(ofSec4+(ofSec4ar1/10))){
    _sec6ar1.style.top=(st-(ofSec3+ofSec3ar2))+'px'
}else{
    _sec6ar1.style.top=0
}

// ****
if(st>(ofSec4-(ofSec4ar1/1.6))){

    _sec7.style.opacity=((st-(ofSec4-(ofSec4ar1/1.6)))*.002)
}else{
    _sec7.style.opacity=0
}

console.log((ofSec4+(ofSec3ar2/4)))
// ****
if(st>(ofSec4-(ofSec4ar1/4))&&st<(ofSec4+(ofSec3ar2/4))){
    x=(.5/((ofSec4+(ofSec3ar2/4))-(ofSec4-(ofSec4ar1/4))))
    _sec8.style.scale=.5+((st-(ofSec4-(ofSec4ar1/4)))*x)
}else if(st>(ofSec4+(ofSec3ar2/4))){
    _sec8.style.scale=1
}
if(st>(ofSec4+(ofSec3ar2/2.6))){
    _sec8.style.bottom=-(st-(ofSec4+(ofSec3ar2/2.6)))+'px'
    
}else{
    _sec8.style.bottom=0
}
})

// *****

let search=document.getElementById('search')
let search2=document.getElementById('search2')
let _close=document.getElementById('close')
search.addEventListener('click',()=>{
search2.style.top=0+'px'
})
_close.addEventListener('click',()=>{
search2.style.top=-100+'vh'
})

// ****
let menu1=document.getElementById('menu1')
let menu2=document.getElementById('menu2')
let _close2=document.getElementById('close2')
menu1.addEventListener('click',(e)=>{
    e.stopPropagation()
    menu2.style.right=0
})
_close2.addEventListener('click',()=>{
    menu2.style.right=-100+'%'
})
window.addEventListener('click',()=>{
    menu2.style.right=-100+'%'
})
menu2.addEventListener('click',(e)=>{
    e.stopImmediatePropagation()
})

// ****
// window.onresize()

