
export const darkmode =()=>{
    console.log("hhh")
    const body = document.querySelector('body') ;
    const section = document.querySelector('section') ;
    const div = document.querySelector('div') ;
    const h1s = document.querySelectorAll('h1') ;
    const h2s = document.querySelectorAll('h2') ;
    const h3s = document.querySelectorAll('h3') ;
    const h4s = document.querySelectorAll('h4') ;
    const ps = document.querySelectorAll('p') ;
    const as = document.querySelectorAll('a') ;
    const mainContainer = document.querySelector(".sectAbout_contCards");
    const innerContainers = mainContainer.querySelectorAll(".cont_cardAbout");

    div.classList.toggle('darkBackground');
    section.classList.toggle('darkBackground');
    for(const h1 of h1s){
        h1.classList.toggle('darkTitle')
    }
    for(const h2 of h2s){
        h2.classList.toggle('darkTitle')
    }
    for(const h3 of h3s){
        h3.classList.toggle('darkTitle')
    }
    for(const h4 of h4s){
        h4.classList.toggle('darkTitle')
    }
    for(const p of ps){
        p.classList.toggle('darkText')
    }
    for(const a of as){
        a.classList.toggle('darkText')
    }
    for (const innerContainer of innerContainers) {
        innerContainer.classList.toggle("darkCard");
    }


}