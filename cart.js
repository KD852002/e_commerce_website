var male=document.querySelector("#male")
var maleMenu=document.querySelector("#male-menu")
var female=document.querySelector("#female")
var femaleMenu=document.querySelector("#female-menu")

var right=document.querySelector("#right")
var login=JSON.parse(localStorage.getItem("login"))


// storage.forEach((e)=>{
//     shirtRow.innerHTML+=e
// })




var img=document.getElementById("gallery") 
var array=["./images/carrasol1.jpg", 
            "./images/carrasol2.jpg", 
        "./images/carrasol3.jpg", 
    "./images/carrasol4.jpg", 
    "./images/carrasol5.jpg" ] 
var index=0 
// console.log(img) 
 
function auto(){ 
    index=index+1 
    if(index==array.length){ 
        index=0 
    } 
    // console.log(index) 
    img.src=`${array[index]}` 
} 
// auto() 
setInterval(auto,1000)

var shirtRow=document.querySelector("#shirtRow")
console.log(shirtRow);
var storage=[1,2,3,4,5]

var shirtstorage=[{
    id:"ms1",
    src:"./images/shirt1.webp",
    name:"Men Regular Fit Solid Spread Collar Casual Shirt",
    price:"400",
    rating:4,
    size:"s,m,l"

},

{
    id:"ms2",
    src:"./images/shirt2.webp",
    name:"Men Regular Fit Checkered Spread Collar Casual Shirt",
    price:"500",
    rating:2,
    size:"s,m,l"

},
{
    id:"ms3",
    src:"./images/shirt3.webp",
    name:"Men Regular Fit Printed Spread Collar Casual Shirt",
    price:"340",
    rating:3,
    size:"s,m,l"

},
{
    id:"ms4",
    src:"./images/shirt4.webp",
    name:"Men Regular Fit Color Block Spread Collar Casual Shirt",
    price:"600",
    rating:1,
    size:"s,m,l"

},
{
    id:"ms5",
    src:"./images/shirt5.webp",
    name:"Men Regular Fit Checkered Button Down Collar Casual Shirt",
    price:"450",
    rating:2,
    size:"s,m,l"

},
{
    id:"ms6",
    src:"./images/shirt6.webp",
    name:"Men Regular Fit Solid Mandarin Collar Casual Shirt",
    price:"500",
    rating:4,
    size:"s,m,l"

}

]


function menshirt(){
    shirtstorage.forEach((e)=>{
        shirtRow.innerHTML+=`<div id="${e.id}">
        <img src="${e.src}" alt="">
        <h3>${e.name}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
        <div><span>RS.${e.price}</span><span>size:${e.size}</span></div>
        <h4>Rating:${e.rating}</h4>
        <button class="button-secondary">Add To Cart</button>
    </div>`
    })
}
menshirt()


var tshirtRow=document.querySelector("#tshirtRow")
var tshirtstorage=[{
    id:"mb1",
    src:"./images/tshirt1.webp",
    name:"Tshirt1",
    price:"400",
    rating:4,
    size:"s,m,l"

},

{
    id:"mb2",
    src:"./images/tshirt2.webp",
    name:"Tshirt2",
    price:"500",
    rating:2,
    size:"s,m,l"

},
{
    id:"mb3",
    src:"./images/tshirt3.webp",
    name:"Tshirt3",
    price:"340",
    rating:3,
    size:"s,m,l"

},
{
    id:"mb4",
    src:"./images/tshirt4.webp",
    name:"Tshirt4",
    price:"600",
    rating:1,
    size:"s,m,l"

},
{
    id:"mb5",
    src:"./images/tshirt5.webp",
    name:"Tshirt5",
    price:"450",
    rating:2,
    size:"s,m,l"

},
{
    id:"mb6",
    src:"./images/tshirt6.webp",
    name:"Tshirt6",
    price:"500",
    rating:4,
    size:"s,m,l"

}

]
function tshirt(){
    tshirtstorage.forEach((e)=>{
        tshirtRow.innerHTML+=`<div id="${e.id}">
        <img src="${e.src}" alt="">
        <h3>${e.name}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
        <div><span>RS.${e.price}</span><span>size:${e.size}</span></div>
        <h4>Rating:${e.rating}</h4>
        <button class="button-secondary">Add To Cart</button>
    </div>`
    })
}
tshirt()

var pant=document.querySelector("#pants")
console.log(pant)
var pantstorage=[{
    id:"me1",
    src:"./images/pant1.webp",
    name:"pant1",
    price:"400",
    rating:4,
    size:"s,m,l"

},

{
    id:"me2",
    src:"./images/pant2.webp",
    name:"pant2",
    price:"500",
    rating:2,
    size:"s,m,l"

},
{
    id:"me3",
    src:"./images/pant3.webp",
    name:"pant3",
    price:"340",
    rating:3,
    size:"s,m,l"

},
{
    id:"me4",
    src:"./images/pant4.webp",
    name:"pant4",
    price:"600",
    rating:1,
    size:"s,m,l"

},
{
    id:"me5",
    src:"./images/pant5.webp",
    name:"pant5",
    price:"450",
    rating:2,
    size:"s,m,l"

},
{
    id:"me6",
    src:"./images/pant6.webp",
    name:"pant6",
    price:"500",
    rating:4,
    size:"s,m,l"

}

]
function pants(){
    pantstorage.forEach((e)=>{
        pant.innerHTML+=`<div id="${e.id}">
        <img src="${e.src}" alt="">
        <h3>${e.name}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
        <div><span>RS.${e.price}</span><span>size:${e.size}</span></div>
        <h4>Rating:${e.rating}</h4>
        <button class="button-secondary">Add To Cart</button>
    </div>`
    })
}
pants()


var saree=document.querySelector("#sareerow")

var sareestorage=[{
    id:"mc1",
    src:"./images/saree1.webp",
    name:"sarre1",
    price:"400",
    rating:4,
    size:"s,m,l"

},

{
    id:"mc2",
    src:"./images/saree2.webp",
    name:"sarre2",
    price:"500",
    rating:2,
    size:"s,m,l"

},
{
    id:"mc3",
    src:"./images/saree3.webp",
    name:"sarre3",
    price:"340",
    rating:3,
    size:"s,m,l"

},
{
    id:"mc4",
    src:"./images/saree4.webp",
    name:"sarre4",
    price:"600",
    rating:1,
    size:"s,m,l"

},
{
    id:"mc5",
    src:"./images/saree5.webp",
    name:"sarre5",
    price:"450",
    rating:2,
    size:"s,m,l"

},
{
    id:"mc6",
    src:"./images/saree6.webp",
    name:"sarre6",
    price:"500",
    rating:4,
    size:"s,m,l"

}

]
function sareerow(){
    sareestorage.forEach((e)=>{
        saree.innerHTML+=`<div id="${e.id}">
        <img src="${e.src}" alt="">
        <h3>${e.name}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
        <div><span>RS.${e.price}</span><span>size:${e.size}</span></div>
        <h4>Rating:${e.rating}</h4>
        <button class="button-secondary">Add To Cart</button>
    </div>`
    })
}
sareerow()

var dress=document.querySelector("#dressrow")

var dressstorage=[{
    id:"ma1",
    src:"./images/dress1.webp",
    name:"Dress1",
    price:"400",
    rating:4,
    size:"s,m,l"

},

{
    id:"ma2",
    src:"./images/dress2.webp",
    name:"Dress2",
    price:"500",
    rating:2,
    size:"s,m,l"

},
{
    id:"ma3",
    src:"./images/dress3.webp",
    name:"Dress3",
    price:"340",
    rating:3,
    size:"s,m,l"

},
{
    id:"ma4",
    src:"./images/dress4.webp",
    name:"Dress4",
    price:"600",
    rating:1,
    size:"s,m,l"

},
{
    id:"ma5",
    src:"./images/dress5.webp",
    name:"Dress5",
    price:"450",
    rating:2,
    size:"s,m,l"

},
{
    id:"ma6",
    src:"./images/dress6.webp",
    name:"Dress6",
    price:"500",
    rating:4,
    size:"s,m,l"

}

]
function dressrow(){
    dressstorage.forEach((e)=>{
        dress.innerHTML+=`<div id="${e.id}">
        <img src="${e.src}" alt="">
        <h3>${e.name}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
        <div><span>RS.${e.price}</span><span>size:${e.size}</span></div>
        <h4>Rating:${e.rating}</h4>
        <button class="button-secondary">Add To Cart</button>
    </div>`
    })
}
dressrow()

var kurti=document.querySelector("#kurtirow")

var kurtistorage=[{
    id:"md1",
    src:"./images/kurti1.webp",
    name:"Kurti1",
    price:"400",
    rating:4,
    size:"s,m,l"

},

{
    id:"md2",
    src:"./images/kurti2.webp",
    name:"Kurti2",
    price:"500",
    rating:2,
    size:"s,m,l"

},
{
    id:"md3",
    src:"./images/kurti3.webp",
    name:"Kurti3",
    price:"340",
    rating:3,
    size:"s,m,l"

},
{
    id:"md4",
    src:"./images/kurti4.webp",
    name:"Kurti4",
    price:"600",
    rating:1,
    size:"s,m,l"

},
{
    id:"md5",
    src:"./images/kurti5.webp",
    name:"Kurti5",
    price:"450",
    rating:2,
    size:"s,m,l"

},
{
    id:"md6",
    src:"./images/kurti6.webp",
    name:"Kurti6",
    price:"500",
    rating:4,
    size:"s,m,l"

}

]
function kurtirow(){
    kurtistorage.forEach((e)=>{
        kurti.innerHTML+=`<div id="${e.id}">
        <img src="${e.src}" alt="">
        <h3>${e.name}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
        <div><span>RS.${e.price}</span><span>size:${e.size}</span></div>
        <h4>Rating:${e.rating}</h4>
        <button class="button-secondary">Add To Cart</button>
    </div>`
    })
}
kurtirow()




var close=document.querySelector('#cart')

function openclose(){
    var btnopen=document.querySelectorAll(".button-secondary")
    btnopen.forEach((btn)=>{
       btn.addEventListener("click",()=>{
        close.style.right="0"
       })
    })
}
var x=document.querySelector("#x")
    x.addEventListener("click",()=>{
        close.style.right="-100%"
    })



openclose()

function mainCart(){
 var allItems=[shirtstorage,tshirtstorage,pantstorage,kurtistorage,dressstorage,sareestorage]
 var btn=document.querySelectorAll(".button-secondary")
    btn.forEach((button)=>{
        button.addEventListener("click",()=>{
            var parent=button.parentElement.id
            var cartMenu=document.querySelector("#cart-menu")
            console.log(parent)
            
            allItems.forEach((items)=>{
                items.forEach((check)=>{
                    if(check.id==parent)
                    {
                        cartMenu.innerHTML+=`<div class="cart-item">
                        <div><img src="${check.src}" alt="hello"></div>
                        <div>
                            <h3>${check.name}</h3>
                            <h5>RS.${check.price}</h5>
                            <select name="" id="">
                                <option value="s">s</option>
                                <option value="m">m</option>
                                <option value="l">l</option>
                                <option value="xl">xl</option>
                            </select>
                            <input type="number" value="1" class="number">
                        </div>
                        <div>
                            <span class="subtotal">${check.price}</span>
                            <i class="fa-solid fa-trash"></i>
                        </div>
                    </div>`
                    }
                })
            })
            cal()
            del()
            total()
        })
    })


}
mainCart()

function del(){
    var trash=document.querySelectorAll(".fa-trash")
    trash.forEach((del)=>{
        del.addEventListener("click",()=>{
            del.parentElement.parentElement.remove()
            total()

        })
        
        
    })
}
function cal(){
    var input=document.querySelectorAll(".number")
    
    
    input.forEach((num)=>{
        num.addEventListener("input",()=>{
            if(num.value<=1){
                num.value=1
            }
            
            var parent=num.parentElement.parentElement
            var price=parent.querySelector("h5").innerHTML.replace("RS.","")
            var subtotal=parent.querySelector(".subtotal")
            console.log(price,num.value,subtotal)

            subtotal.innerHTML=`RS.${price*num.value}`
            total()
        })
    })

}
var carttotal=document.querySelector("#total")
function total(){
   
    var addsub=document.querySelectorAll(".subtotal")
    var sum=0
    console.log(carttotal,addsub)

    addsub.forEach((sub)=>{

        var subnumber= parseInt(sub.innerHTML.replace("RS.",""))
        sum=sum+subnumber
        carttotal.innerHTML=`Total:RS.${sum}`
    })
    if(addsub.length<1){
        carttotal.innerHTML=`Total:RS:0`
    }
}




function nav(){
    // male.addEventListener("mouseover",()=>{
    //     maleMenu.style.display="block"
    // })
    //     male.addEventListener("mouseout",()=>{
    //         maleMenu.style.display="none"
    //     })
    male.addEventListener("click",()=>{
        if(maleMenu.style.display=="none"){
            maleMenu.style.display="block"
            femaleMenu.style.display="none"
        
        }
        else{
            maleMenu.style.display="none"
        }
    })
   
    }

    function nav1(){
        female.addEventListener("click",()=>{
            if(femaleMenu.style.display=="none"){
                femaleMenu.style.display="block"
                maleMenu.style.display="none"
            
            }
            else{
                femaleMenu.style.display="none"
            }
            })
        
    }
function cart(){
    nav()
    nav1()
    if(login){
    right.innerHTML=`<span>${login.fname}</span><button id="logout">logout</button>`
     var logout=document.querySelector("#logout")
     logout.addEventListener("click",()=>{
        localStorage.removeItem("login")
        right.innerHTML=`<button><a href="./login.html">login</a></button>
        <button><a href="./sign_up.html">sign_up</a></button>`
     })
    }
   
}
cart()

