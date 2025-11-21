const pictures = document.querySelectorAll('.pictures')
const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')
let currentIdx = 0
arrowRight.addEventListener('click' , () => {
    currentIdx++
    if (currentIdx > pictures.length - 1) {
        currentIdx = 0
    }
    slidePictures()
})
arrowLeft.addEventListener('click' , () => {
    currentIdx--
    if (currentIdx < 0) {
        currentIdx = pictures.length - 1
    }
    slidePictures()
})

//idxで写真を選ぶ
function slidePictures() {
    pictures.forEach( picture => {
        picture.classList.remove('active-slider')
    })

    pictures[currentIdx].classList.add('active-slider')
}


const largeTexts = document.querySelectorAll('.large-text')

const observerText = new IntersectionObserver(entries => {
    entries.forEach( entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('active')
            },100)
        }
    })
},{threshold: 0.8})

largeTexts.forEach( text => observerText.observe(text))

largeTexts.forEach( largeText => {
const chars = largeText.textContent
    largeText.textContent = ''

    chars.split('').forEach((char,idx) => {
        const span = document.createElement('span')

        span.textContent = char
        span.style.transitionDelay = `${idx * 100}ms`

        largeText.appendChild(span)
        console.log(largeText.textContent)
    })
})
const smallTexts = document.querySelectorAll('.small-text')

smallTexts.forEach( text => observerText.observe(text))

smallTexts.forEach( smallText => {
const chars = smallText.textContent
    smallText.textContent = ''

    chars.split('').forEach((char,idx) => {
        const span = document.createElement('span')

        span.textContent = char
        span.style.transitionDelay = `${idx * 100}ms`

        smallText.appendChild(span)
    })
})

const nav = document.querySelector('.nav')

window.addEventListener('scroll',changeNav)
console.log(nav.offsetHeight)
function changeNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}


const row = document.querySelector('.row')
const observer = new IntersectionObserver(entries => {
    entries.forEach( entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('active')
            },100)
        }
    })
},{threshold: 0.6})
observer.observe(row)

const coverSlider = document.querySelectorAll('.cover-slider')


const observerInview = new IntersectionObserver( entries => {
    entries.forEach( entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview')
        }
    })
}, {threshold: 0.6})
coverSlider.forEach( slider => {
    observerInview.observe(slider)
})