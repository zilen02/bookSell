// let slideIndex1 = 1;

// const currentSlide = (n) => {
//     showSlide1(n);
// }

// const showSlide1 = (slideIndex) => {
//     let i;
//     let slides = document.getElementsByClassName("slide-section__content");
//     let s = [...slides];  
//     let dots = document.getElementsByClassName("dot");
//     let d = [...dots];
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }

//     s[slideIndex-1].style.display = "grid";
//     d[slideIndex-1].className += " active";
//     console.log(`Clicked (${slideIndex})`);
// }

// // showSlide1(slideIndex1);

let slideIndex = 0;

// const currentSlide = (n) => {
//     showSlide(n);
// }

const showSlide = () => {
    let i;
    let slides = document.getElementsByClassName("slide-section__content");
    let s = [...slides];  
    let dots = document.getElementsByClassName("dot");
    let d = [...dots];
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    
    s[slideIndex-1].style.display = "grid";
    d[slideIndex-1].className += " active";
    console.log(`Clicked (${slideIndex})`);
    setTimeout(showSlide,5000);
}

showSlide();

