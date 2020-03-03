console.log('Alice')
const params = new URLSearchParams(window.location.search)
const id = params.get('id')


const cardsContainer = document.querySelector('.card-container')
const cards = ('http://localhost:3000/cards')

fetch(cards)
    .then(res => res.json())
    .then(cards => {
        cards.forEach(card => {
        const div_frontcard = document.createElement('div')
        const div_backcard = document.createElement('div')
        const li = document.createElement('li')
        const p = document.createElement('p')
        const img = document.createElement('img')
        const speaker = document.createElement('img')
        const nextpageButt = document.createElement('button')
        
        
        
        div_frontcard.className = "card__face card__face--front"
        div_backcard.className = "card__face card__face--back"
        speaker.id= 'speaker-butt'
        li.className = 'alphabet-card'
        p.innerText = card.description
        img.src = card.image_url
        speaker.src = "./picture/volume.png"

        
        speaker.addEventListener("click",()=>{
            playsound(card)
        })


        li.addEventListener('click',()=>{
           li.classList.toggle('flip')
        })

        div_frontcard.appendChild(img)
        div_backcard.append(p, speaker)
        li.append(div_frontcard, div_backcard)

        cardsContainer.appendChild(li)
    })
})

    function playsound(card){
        const audio = new Audio(card.radio_url)
        audio.play()
    }

    const nextpageButt = document.createElement('button')
    const buttContainer = document.createElement('div')
    
    buttContainer.id = 'buttContainer'
    nextpageButt.id = 'nextpageButt'
    nextpageButt.innerHTML = `<a href="flashcardgame.html?id">Next page</a>`
    
    buttContainer.appendChild(nextpageButt)
    document.body.appendChild(buttContainer)