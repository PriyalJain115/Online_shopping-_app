// Script for navigation bar
const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar')

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active')
    })
}

if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active')
    })
}

// JavaScript code 

const product=[
    {
        id:0,
        image:'img/products/f1.jpg',
        title:'Cartoon Astronaut T-Shirts1',
        price: 200,
    },
    {
        id:1,
        image:'img/products/f2.jpg',
        title:'Cartoon Astronaut T-Shirts2',
        price: 250,
    },
    {
        id:2,
        image:'img/products/f3.jpg',
        title:'Cartoon Astronaut T-Shirts3',
        price: 300,
    },
    {
        id:3,
        image:'img/products/f4.jpg',
        title:'Cartoon Astronaut T-Shirts4',
        price: 350,
    },
    {
        id:4,
        image:'img/products/f5.jpg',
        title:'Cartoon Astronaut T-Shirts5',
        price: 400,
    },
    {
        id:5,
        image:'img/products/f6.jpg',
        title:'Cartoon Astronaut T-Shirts6',
        price: 450,
    },
    {
        id:6,
        image:'img/products/f7.jpg',
        title:'Cartoon Astronaut T-Shirts7',
        price: 500,
    },
    {
        id:7,
        image:'img/products/f8.jpg',
        title:'Cartoon Astronaut T-Shirts8',
        price: 550,
    }
];

const categories=[...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML=categories.map((item)=>
{
    var {image, title, price}=item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button class='btn1' onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('');

var cart=[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a,1);
    displaycart();
}
function displaycart(a){
    
    let j=0, total=0;
    document.getElementById('count').innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML="Your cart is empty";
        document.getElementById('total').innerHTML="$ "+0+".00";
    }
    else{
        document.getElementById('cartItem').innerHTML=cart.map(item=>{
            var {image, title, price}=item;
            total=total+price;
            document.getElementById("total").innerHTML="$ "+total+".00";
            return(
                `<div class='box'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:15px;'>$ ${price}.00</h2>`+
                    "<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"
            );
        }).join('');
    }
}

