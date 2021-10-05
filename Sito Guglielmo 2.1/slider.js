
/*slider golf living */
var slides=document.querySelector('.sliderGolf-items').children;
var rightSlide=document.querySelector(".sliderGolfright");
var leftSlide=document.querySelector(".sliderGolfleft");
var totalSlides=slides.length;
var index=0;

rightSlide.onclick=function(){
    console.log("click");
    nextGolf("next");
}
leftSlide.onclick=function(){
    console.log("click");
    nextGolf("left");
}

function nextGolf(direction){
    if(direction=="next"){
        index++;
        if(index==totalSlides){
            index=0;
        }
    }
    else{
        if(index==0){
            index=totalSlides-1;
        }else{
            index--;
        }
    }
    for(i=0;i<slides.length;i++){
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}
/*slider letti */
var slidesLetti=document.querySelector('.sliderletti-items').children;
var rightSlideLetti=document.querySelector(".sliderlettiright");
var leftSlideLetti=document.querySelector(".sliderlettileft");
var totalSlidesLetti=slidesLetti.length;
var index=0;

rightSlideLetti.onclick=function(){
    console.log("click");
    nextLetti("next");
}
leftSlideLetti.onclick=function(){
    console.log("click");
    nextLetti("left");
}

function nextLetti(direction){
    if(direction=="next"){
        index++;
        if(index==totalSlidesLetti){
            index=0;
        }
    }
    else{
        if(index==0){
            index=totalSlidesLetti-1;
        }else{
            index--;
        }
    }
    for(i=0;i<slidesLetti.length;i++){
        slidesLetti[i].classList.remove("active");
    }
    slidesLetti[index].classList.add("active");
}
/*slider armadi */
var slidesArmadi=document.querySelector('.sliderarmadi-items').children;
var rightSlideArmadi=document.querySelector(".sliderarmadiright");
var leftSlideArmadi=document.querySelector(".sliderarmadileft");
var totalSlidesArmadi=slidesArmadi.length;
var index=0;

rightSlideArmadi.onclick=function(){
    console.log("click");
    nextArmadio("next");
}
leftSlideArmadi.onclick=function(){
    console.log("click");
    nextArmadio("left");
}

function nextArmadio(direction){
    if(direction=="next"){
        index++;
        if(index==totalSlidesArmadi){
            index=0;
        }
    }
    else{
        if(index==0){
            index=totalSlidesArmadi-1;
        }else{
            index--;
        }
    }
    for(i=0;i<slidesArmadi.length;i++){
        slidesArmadi[i].classList.remove("active");
    }
    slidesArmadi[index].classList.add("active");
}
/*slider cucina */
var slidesCucina=document.querySelector('.slidercucina-items').children;
var rightSlideCucina=document.querySelector(".slidercucinaright");
var leftSlideCucina=document.querySelector(".slidercucinaleft");
var totalSlidesCucina=slidesCucina.length;
var index=0;

rightSlideCucina.onclick=function(){
    console.log("click");
    nextCucina("next");
}
leftSlideCucina.onclick=function(){
    console.log("click");
    nextCucina("left");
}

function nextCucina(direction){
    if(direction=="next"){
        index++;
        if(index==totalSlidesCucina){
            index=0;
        }
    }
    else{
        if(index==0){
            index=totalSlidesCucina-1;
        }else{
            index--;
        }
    }
    for(i=0;i<slidesCucina.length;i++){
        slidesCucina[i].classList.remove("active");
    }
    slidesCucina[index].classList.add("active");
}
