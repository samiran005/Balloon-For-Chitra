const container = document.querySelector('.inside')
const end = document.querySelector('.end')
const bar = document.querySelector('.bar')
const bottom = document.querySelector('.bottom')
const text = document.querySelector('.text')
// console.log(container)

// To get Property Form root in css
// --------------------------------
const r = document.querySelector(':root')

// **** to get the varible value ****
// ----------------------------------
// const rs = getComputedStyle(r)
// console.log(rs.getPropertyValue('--ballon-color'))


// **** to set the varible value ****
// ----------------------------------
// r.style.setProperty('--ballon-color', 'lightblue')


                /* ************* */
                /* first version */
                /* ------------- */

// function createBallon({x, y, text}){
//     const div = document.createElement('div')
//     div.classList.add('ballon')
//     div.style.bottom = `${y}%`
//     div.style.left = `${x}%`

//     const p = document.createElement('p')
//     p.innerText = text

//     div.append(p)
//     container.append(div)
// }

// const ballonData = [
//     {x: 50, y: 10, speed: 0.3, text: 'Soma'},
//     {x: 20, y: 10, speed: 0.3, text: 'I am Sorry'},
//     {x: 10, y: 10, speed: 0.3, text: 'This is only for you'},
//     {x: 25, y: 10, speed: 0.3, text: 'I love you baby'},
//     {x: 40, y: 10, speed: 0.3, text: "Don't be angry with me"},
//     {x: 35, y: 10, speed: 0.3, text: 'Please...'},
//     {x: 29, y: 10, speed: 0.3, text: 'I Love You Soma'},
// ]


// const data = []
    
    
// let i = 0

// setInterval(()=>{

//     if(i >= 0 && i < ballonData.length){
//         data.push(ballonData[i])
//         i += 1
//     }

//     if(i == ballonData.length){
//         setTimeout(()=>{
//             end.style.display = 'block'
//         }, 3000)
//     }

// }, 2500)

// function draw(){
//     requestAnimationFrame(draw)

//     container.innerHTML = ""
//     data.forEach((ele, i)=>{
//         ele.y += ele.speed
//         createBallon(ele)

//     })
// }

// // draw()


                /* ************** */
                /* second version */
                /* -------------- */


function pop(ele){
    console.log(ele.currentTarget.dataset.no)

    // * by accessing id no form element and set the data object display to no showing while randaring
    let eleNo = ele.currentTarget.dataset.no
    ballonData[eleNo].display = 'none'
    ballonData[eleNo].speed = 0

    setTimeout(()=>{
        // text.style.display = 'block'
        text.style.opacity = '1'
        text.style.transition = '1s opacity'
        text.innerText = ballonData[eleNo].text
        text.style.bottom = `${ballonData[eleNo].y}%`
        text.style.left = `${ballonData[eleNo].x + 10}%`
    }, 800)
    
    setTimeout(()=>{
        // text.style.display = 'none'
        text.style.opacity = '0'
    }, 3000)

    setTimeout(()=>{
        ballonData[eleNo].done = true
    }, 1000)
}

/* ********************************************************* */    

function createBallon({x, y, text, color, display, id, done}){
    if(done){
        return
    }
    const div = document.createElement('div')
    div.classList.add('ballon2')
    if(display == 'none'){
        div.classList.add('pop')
    }
    div.style.bottom = `${y}%`
    div.style.left = `${x}%`

    div.setAttribute("data-no", id)

    div.innerHTML += `
    <svg style="display: ${display};" xmlns:x="http://ns.adobe.com/Extensibility/1.0/" xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns:graph="http://ns.adobe.com/Graphs/1.0/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 83 260.1" enable-background="new 0 0 83 260.1" xml:space="preserve">
            <switch>
                <g i:extraneous="self">
                        <path id="XMLID_1_" fill="${color}" stroke="#ffffff" stroke-miterlimit="10" d="M40.6,111.8c1.1,0.7,2.6,0.4,5.6-0.2    c2.3-0.5,4.2-1.2,5.4-1.7c-0.2-2.7-6.2-3.5-6.8-6.2c6.2-3.1,19.5-10.9,28.8-26.6c3.1-5.3,8.8-15.2,8.9-29c0-2.4-0.3-29.4-21-41.9    c-7.9-4.8-15.7-5.6-19.6-5.6c-1.2,0-21.4-0.2-33.6,16.1C0.2,27.4,0.4,39.1,0.5,46.1c0.2,14.3,5.9,24.6,8.6,29.4    c4.5,7.9,7.6,13.6,14.4,17.7c6.8,4.2,13.8,4.7,15.5,10.3C40.2,107,38.5,110.4,40.6,111.8z"/>
                        <path id="XMLID_2_" fill="none" stroke="#ffffff" stroke-miterlimit="10" d="M47.5,112c4.3,25.2,6.5,52.1,6.5,78.9    c0,8.7-0.3,17.4,0.5,26c1.3,14.6,5.4,28.7,3.9,43.2"/>
                </g>
            </switch>
        </svg>
    `

    div.addEventListener("click", pop)

    container.append(div)
}

/* ********************************************************* */    


const ballonData = [
    {
        x: 50, y: 10, 
        speed: 0.3, 
        text: 'Happly Birthday Baby', 
        color:'hsl(50, 50%, 50%)', 
        display: 'block', 
        id: 0, 
        done: false
    },
    {
        x: 20, 
        y: 10, 
        speed: 0.3, 
        text: 'I know this is late', 
        color:'hsl(130, 50%, 50%)', 
        display: 'block', 
        id: 1, 
        done: false
    },
    {
        x: 10, 
        y: 10, 
        speed: 0.3, 
        text: 'But I love you So much', 
        color:'hsl(200, 50%, 50%)', 
        display: 'block', 
        id: 2, 
        done: false
    },
    {
        x: 25, 
        y: 10, 
        speed: 0.3, 
        text: 'This is for you', 
        color:'hsl(180, 50%, 50%)', 
        display: 'block', 
        id: 3, 
        done: false
    },
    {
        x: 40, 
        y: 10, 
        speed: 0.3, 
        text: "I love you Soma, only you", 
        color:'hsl(90, 50%, 50%)', 
        display: 'block', 
        id: 4, 
        done: false
    },
    {
        x: 35, 
        y: 10, 
        speed: 0.3, 
        text: 'you change my live, So much ...', 
        color:'hsl(120, 50%, 50%)', 
        display: 'block', 
        id: 5, 
        done: false
    },
    {
        x: 29, 
        y: 10, 
        speed: 0.3, 
        text: 'I love you Baby, sooooooo much', 
        color:'hsl(150, 50%, 50%)', 
        display: 'block', 
        id: 6, 
        done: false
    },
]

const data = []
    
/* ********************************************************* */    
let i = 0

let bottomClick = function(){
    bottom.removeEventListener("click", bottomClick)

    if(i >= 0 && i < ballonData.length){
        data.push(ballonData[i])
        i += 1

        bar.style.width = '100%'
        bar.style.transition = '2s all'
    }

    if(i == ballonData.length){
        setTimeout(()=>{
            end.style.display = 'block'
        }, 5000)
    }


    setTimeout(()=>{
        bottom.addEventListener("click", bottomClick)
        bar.style.width = '0%'
        bar.style.transition = '.5s all'
    }, 2000)
}

bottom.addEventListener("click", bottomClick)

/* ********************************************************* */      


function draw(){
    requestAnimationFrame(draw)

    container.innerHTML = ""
    data.forEach((ele, i)=>{
        ele.y += ele.speed
        createBallon(ele)

    })
}

draw()
