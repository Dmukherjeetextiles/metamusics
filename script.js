const WHITE_KEYS = ['q','w','e','r','t','y','u','i','o','p','z','x','c','v','b','n','m']
const BLACK_KEYS = ['2','3','5','6','7','9','0','s','d','f','h','j']


const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
    key.addEventListener('touchstart', () => {
      playNote(key, 'click');
      console.log('touchStart');
    })
  key.addEventListener('touchend', () => {
    key.classList.remove('active')
    console.log('touchEnd');
    })
})

document.addEventListener('keydown', e => {
    if (e.repeat) return
    const key = e.key
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

document.addEventListener('keyup', e => {
    const key = e.key
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)

    if (whiteKeyIndex > -1) stopNote(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1) stopNote(blackKeys[blackKeyIndex])
})


function playNote(key, eventName) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    if (!eventName) {
      key.addEventListener('keyup', () => {
        key.classList.remove('active')
      })
    }
}

function stopNote(key) {
    key.classList.remove('active')
}