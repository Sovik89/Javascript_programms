const dataArray=data;
let container=document.querySelector("#container");


for(let i=0;i<data.length;i++){
    let dataObject=data[i];
    console.log(dataObject)


    let cardElement=document.createElement("div");
    cardElement.setAttribute("class","card");
    let detailsElement=document.createElement("div");
    detailsElement.setAttribute("class","details");

    let productNameElement=document.createElement("span");
    productNameElement.setAttribute("class","product__name");
    productNameElement.innerText=dataObject.title;

    let productCategoryElement=document.createElement("span");
    productCategoryElement.setAttribute("class","product__category");
    productCategoryElement.innerText=dataObject.category;

    
    let filled_star=parseInt(dataObject.rating.rate);
    console.log(filled_star);

    let allStarsElement=document.createElement("div");
    allStarsElement.setAttribute("class","all__star");

    let color=(data[i].rating.rate)-1
    for (let k=0;k<5;k++){
        if (k>color){
            allStarsElement.innerHTML+= `<span class="star__notfilled">&#9734;</span>`
        }else{
            allStarsElement.innerHTML+= `<span class="star__filled">&#9733;</span>`
        }
    }

    let ratingElement=document.createElement("div");
    ratingElement.setAttribute("class","rating__count");
    ratingElement.innerHTML=`Rating Count : <span>${dataObject.rating.count}</span>`

    let buyNowButton=document.createElement("button");
    buyNowButton.setAttribute("class","btn__buy");
    buyNowButton.innerText="Buy Now";

    const lineBreak = document.createElement('br');

    detailsElement.appendChild(productNameElement);
    detailsElement.appendChild(lineBreak);
    detailsElement.appendChild(productCategoryElement);
    detailsElement.appendChild(allStarsElement);
    detailsElement.appendChild(ratingElement);
    cardElement.appendChild(detailsElement);
    cardElement.appendChild(buyNowButton);
    container.appendChild(cardElement);

}




