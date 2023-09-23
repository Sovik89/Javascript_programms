const container = document.querySelector(".container");
const stars = document.querySelectorAll(".star");
const ratingValue = document.getElementById("count");
let globalRating=0;
container.addEventListener('click', function(e) {
  let rating = e.target.dataset.index;
  console.log(rating);
  if(rating==null){
    rating=0;
    for(let i=0;i<stars.length;i++){
      stars[i].classList.remove("star-filled");
    }
  
  }
  else{
    if(rating==1&&globalRating==1){
      stars[0].classList.remove("star-filled");
      rating=0;
    }
    else{
      for(let i = 0; i < stars.length; i++) {
        if (i < rating) {
          stars[i].classList.add("star-filled");
        } else {
          stars[i].classList.remove("star-filled");
        }
      }
    }
  }
  globalRating=rating;
  ratingValue.textContent = rating;
});

container.addEventListener("mouseover",function(e) {
  let rating = e.target.dataset.index;

  for(let i = 0; i < rating; i++) {
    if (i < rating) {
      stars[i].classList.add("star-filled");
    }
  }
  for(let j=stars.length-1;j>=rating;j--){
        if(j>=globalRating){
        stars[j].classList.remove("star-filled");
        }
  } 
});

container.addEventListener("mouseenter",(e)=>{
  let rating = e.target.dataset.index;
  for(let i = globalRating; i < rating; i++) {
    if (i < rating) {
      stars[i].classList.add("star-filled");
    }
  }
})

container.addEventListener("mouseleave",()=>{
  //let rating = e.target.dataset.index;
  for(let i = stars.length-1; i >= globalRating; i--) {
    
      stars[i].classList.remove("star-filled");
    
  }
})





