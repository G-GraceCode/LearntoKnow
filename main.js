// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// show/hide faq answer

const faqs  = document.querySelectorAll('.faq');
const faqIcon = document.querySelectorAll('.faq__icon');
const iPlus = `<i class="fas fa-plus"></i>`;
const iClose = `<i class="fas fa-minus"></i>`;

faqIcon.forEach(faqicons => {
     faqicons.innerHTML = iPlus;
})

 faqs.forEach(faq => {

    faq.addEventListener('click', () => {

        faq.classList.toggle("open");
        //change icon 
        const icon = faq.querySelector('i');

        if(icon.classList === "fas fa-plus"){
            icon.className = "fas fa-minus";
        } else{
            
            icon.className = "fas fa-plus";

        }
    })

    //     if(icon.className === "fas fa-plus"){
    //         icon.className.replace("fas fa-minus");
    //     } else{
    //         icon.className.replace("fas fa-plus");

    //     }
    // })
    
})



//show/hide nav menu 

const menu = document.querySelector('.nav__menu')
const menuOpen = document.querySelector('.open-menu-btn')
const menuClose = document.querySelector('.close-menu-btn')

menuOpen.addEventListener('click', () => {
    menu.style.display = 'block';
    menuOpen.style.display = 'none';
    menuClose.style.display = 'block';
})

const closeNav = () => {
    menu.style.display = 'none';
    menuClose.style.display = 'none';
    menuOpen.style.display = 'inline-block'

}

menuClose.addEventListener('click', closeNav)
