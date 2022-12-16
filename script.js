const WHITE_KEYS = ['q','w','e','r','t','y','u','i','o','p','z','x','c','v','b']
const BLACK_KEYS = ['2','3','5','6','7','9','0','s','d','f']


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

    if (whiteKeyIndex == 0) {
      document.body.style.background = "linear-gradient(45deg, var(--C) 10%, var(--G) 100%)";
    }
    else if (whiteKeyIndex == 1) {
      document.body.style.background = "linear-gradient(45deg, var(--D) 10%, var(--A) 100%)";
    }
    else if (whiteKeyIndex == 2) {
      document.body.style.background = "linear-gradient(45deg, var(--E) 10%, var(--B) 100%)";
    }
    else if (whiteKeyIndex == 3) {
      document.body.style.background = "linear-gradient(45deg, var(--F) 10%, var(--C) 100%)";
    }
    else if (whiteKeyIndex == 4) {
      document.body.style.background = "linear-gradient(45deg, var(--G) 10%, var(--D) 100%)";
    }
    else if (whiteKeyIndex == 5) {
      document.body.style.background = "linear-gradient(45deg, var(--A) 10%, var(--E) 100%)";
    }
    else if (whiteKeyIndex == 6) {
      document.body.style.background = "linear-gradient(45deg, var(--B) 10%, var(--Gb) 100%)";
    }
    else if (whiteKeyIndex == 7) {
      document.body.style.background = "linear-gradient(45deg, var(--C) 10%, var(--G) 100%)";
    }
    else if (whiteKeyIndex == 8) {
      document.body.style.background = "linear-gradient(45deg, var(--D) 10%, var(--A) 100%)";
    }
    else if (whiteKeyIndex == 9) {
      document.body.style.background = "linear-gradient(45deg, var(--E) 10%, var(--B) 100%)";
    }
    else if (whiteKeyIndex == 10) {
      document.body.style.background = "linear-gradient(45deg, var(--F) 10%, var(--C) 100%)";
    }
    else if (whiteKeyIndex == 11) {
      document.body.style.background = "linear-gradient(45deg, var(--G) 10%, var(--D) 100%)";
    }
    else if (whiteKeyIndex == 12) {
      document.body.style.background = "linear-gradient(45deg, var(--A) 10%, var(--E) 100%)";
    }
    else if (whiteKeyIndex == 13) {
      document.body.style.background = "linear-gradient(45deg, var(--B) 10%, var(--Gb) 100%)";
    }
    else if (whiteKeyIndex == 14) {
      document.body.style.background = "linear-gradient(45deg, var(--C) 10%, var(--G) 100%)";
    }
     

    if (blackKeyIndex == 0) {
      document.body.style.background = "linear-gradient(45deg, var(--Db) 10%, var(--Ab) 100%)";
    }
    else if (blackKeyIndex == 1) {
      document.body.style.background = "linear-gradient(45deg, var(--Eb) 10%, var(--Bb) 100%)";
    }
    else if (blackKeyIndex == 2) {
      document.body.style.background = "linear-gradient(45deg, var(--Gb) 10%, var(--Db) 100%)";
    }
    else if (blackKeyIndex == 3) {
      document.body.style.background = "linear-gradient(45deg, var(--Ab) 10%, var(--Eb) 100%)";
    }
    else if (blackKeyIndex == 4) {
      document.body.style.background = "linear-gradient(45deg, var(--Bb) 10%, var(--F) 100%)";
    }
    else if (blackKeyIndex == 5) {
      document.body.style.background = "linear-gradient(45deg, var(--Db) 10%, var(--Ab) 100%)";
    }
    else if (blackKeyIndex == 6) {
      document.body.style.background = "linear-gradient(45deg, var(--Eb) 10%, var(--Bb) 100%)";
    }
    else if (blackKeyIndex == 7) {
      document.body.style.background = "linear-gradient(45deg, var(--Gb) 10%, var(--Db) 100%)";
    }
    else if (blackKeyIndex == 8) {
      document.body.style.background = "linear-gradient(45deg, var(--Ab) 10%, var(--Eb) 100%)";
    }
    else if (blackKeyIndex == 9) {
      document.body.style.background = "linear-gradient(45deg, var(--Bb) 10%, var(--F) 100%)";
    }
})
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
