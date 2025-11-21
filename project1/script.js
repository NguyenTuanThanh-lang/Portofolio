//左右から中央にスライド
// const row = document.querySelector('.row')
const cols = document.querySelectorAll('.col')
const row = document.querySelector('.row')
window.addEventListener('scroll', checkCol)

function checkCol() {
    //windowの画面の高さ
    const triggerBottom = window.innerHeight * 0.8
    //colのtopまでのたかさ
    cols.forEach( col => {
        const colTop = col.getBoundingClientRect().top;
        //colは80%の画面になったら
        if (triggerBottom > colTop) {
            row.classList.add('active')
        } else {
            row.classList.remove('active')
        }

    })
}

//expanding cards 
const panels = document.querySelectorAll('.panel')

panels.forEach( panel => 
    panel.addEventListener('click', () => {
        if (panel.classList.contains('flex')) {
            panel.classList.remove('flex')
        } else {
        removeflexPanels()
        panel.classList.add('flex')
        }
    })
)

function removeflexPanels() {
    panels.forEach( panel => {
        panel.classList.remove('flex')
    })
}