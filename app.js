const mrSnibbly = {
  name: 'Mr. Snibbly',
  moods: [
    'Classy',
    'Sassy',
    'Gone!'
  ],
  moodImgs: [
    '//unsplash.it/500x500',
    '//unsplash.it/400x400',
    ''
  ],
  tolerance: 7,
  pets: 0,
  moodIndex: 0
}

const catImg = document.getElementById('cat-img')
const catName = document.getElementById('name')
const mood = document.getElementById('mood')
const pets = document.getElementById('pets')

function draw() {
  catImg.setAttribute('src', mrSnibbly.moodImgs[mrSnibbly.moodIndex])
  catName.innerText = mrSnibbly.name
  mood.innerText = mrSnibbly.moods[mrSnibbly.moodIndex]
  pets.innerText = mrSnibbly.pets.toString()
  if (mrSnibbly.pets > mrSnibbly.tolerance * 2) {
    document.getElementById("pet-button").disabled = true;
  }
}

function pet() {
  mrSnibbly.pets++;
  if (mrSnibbly.pets % mrSnibbly.tolerance == 0) {
    mrSnibbly.moodIndex++
  }
  draw();
}

function reset() {
  mrSnibbly.pets = 0
  mrSnibbly.moodIndex = 0
  draw()
}


draw()