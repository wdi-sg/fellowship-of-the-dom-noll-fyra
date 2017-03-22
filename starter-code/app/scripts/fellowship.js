console.log('Linked.')

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
]

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
]

var lands = ['The Shire', 'Rivendell', 'Mordor']
var body = document.querySelector('body')

// Part 1

function makeMiddleEarth () {
  // create a section tag with an id of middle-earth
  var middleEarth = document.createElement('section')
  middleEarth.id = 'middle-earth'
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  lands.forEach(function (land) {
    var landArticle = document.createElement('article')
    var landTitle = document.createElement('h1')
    landTitle.textContent = land
    landArticle.appendChild(landTitle)
    middleEarth.appendChild(landArticle)
  })
  body.appendChild(middleEarth)
}

makeMiddleEarth()

var theShire = document.querySelectorAll('article')[0]
var rivendell = document.querySelectorAll('article')[1]
var mordor = document.querySelectorAll('article')[2]

// Part 2

function makeHobbits () {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
  var hobbitList = document.createElement('ul')
  hobbits.forEach(function (name) {
    var hobbitName = document.createElement('li')
    hobbitName.textContent = name
    hobbitName.classList += 'hobbit'
    hobbitList.appendChild(hobbitName)
  })
  theShire.appendChild(hobbitList)
}

makeHobbits()

// Part 3
var ringClicks = 0

function keepItSecretKeepItSafe () {
  // create a div with an id of 'the-ring'
  var theRing = document.createElement('div')
  theRing.id = 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  theRing.className = 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  var frodo = theShire.querySelectorAll('li')[0]
  theRing.addEventListener('click', function () {
    ringClicks += 1
    nazgulScreech()
    if (ringClicks == 3) {
      // body.parentNode.removeChild(body)
      while (body.hasChildNodes()) {
    body.removeChild(body.lastChild);
}
var theEndOfAllThings = document.createElement('h1')
      theEndOfAllThings.textContent = 'The Ring has been returned to Sauron and the world is over.'
      theEndOfAllThings.textAlign = 'centre'
      body.appendChild(theEndOfAllThings)
    }
    frodo.style.opacity = 0
    frodo.style.transition = 'opacity 2s ease-in-out'
    setTimeout(function() {
      frodo.style.opacity = 1
    }, 2000)
    // frodo.style.opacity = 1
    // frodo.style.transition = 'opacity 2s ease'
  })
  // add the ring as a child of Frodo
  frodo.appendChild(theRing)
}

keepItSecretKeepItSafe()

// Part 4

function makeBuddies () {
  // create an aside tag
  var aside = document.createElement('aside')
  // attach an unordered list of the 'buddies' in the aside
  var buddyList = document.createElement('ul')
  buddies.forEach(function (name) {
    var buddyName = document.createElement('li')
    buddyName.textContent = name
    buddyList.appendChild(buddyName)
  })
  aside.appendChild(buddyList)
  rivendell.appendChild(aside)
  // insert your aside as a child element of rivendell
}

// makeBuddies()

// Part 5

function beautifulStranger () {
  // change the 'Strider' textnode to 'Aragorn'
  var aragorn = rivendell.querySelectorAll('li')[3]
  aragorn.textContent = 'Aragorn'
}

// beautifulStranger()

// Part 6

function leaveTheShire () {
  // assemble the hobbits and move them to Rivendell
  var hobbitsAssemble = theShire.querySelector('ul')
  var theDeparted = hobbitsAssemble.parentNode.removeChild(hobbitsAssemble)
  rivendell.appendChild(theDeparted)
}

// leaveTheShire()

// Part 7

function forgeTheFellowShip () {
  // create a new div called 'the-fellowship' within rivendell
  var fellowship = document.createElement('div')
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var fellows = rivendell.querySelectorAll('li')
  fellows.forEach(function (fellow) {
    fellowship.appendChild(fellow)
    // window.alert(fellow.textContent + ' has joined your party')
  })
  rivendell.appendChild(fellowship)
}

// forgeTheFellowShip()

// Part 8

function theBalrog () {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  var gandalf = rivendell.querySelectorAll('li')[0]
  gandalf.textContent = 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  gandalf.style.background = 'white'
  gandalf.style.border = '3px solid grey'
}

// theBalrog()

// Part 9

function hornOfGondor () {
  // pop up an alert that the horn of gondor has been blown
  // window.alert('The horn of Gondor has been blown!')
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  var boromir = rivendell.querySelectorAll('li')[4]
  boromir.style.textDecoration = 'line-through'
  // Remove Boromir from the Fellowship
  // var sonOfGondor = rivendell.querySelector('div')
  boromir.parentNode.removeChild(boromir)
}

// hornOfGondor()

// Part 10

function itsDangerousToGoAlone () {
  // take Frodo and Sam out of the fellowship and move them to Mordor
  var frodo = rivendell.querySelectorAll('li')[4]
  var sam = rivendell.querySelectorAll('li')[5]
  // var brokenFellowship = rivendell.querySelector('div')
  var frodoGone = frodo.parentNode.removeChild(frodo)
  var samGone = sam.parentNode.removeChild(sam)
  mordor.appendChild(frodoGone)
  mordor.appendChild(samGone)
  // add a div with an id of 'mount-doom' to Mordor
  var mountDoom = document.createElement('div')
  mountDoom.id = 'mount-doom'
  mordor.appendChild(mountDoom)
}

// itsDangerousToGoAlone()

var mountDoom = body.querySelector('#mount-doom')

// Part 11

function weWantsIt () {
  // Create a div with an id of 'gollum' and add it to Mordor
  var gollum = document.createElement('div')
  gollum.id = 'gollum'
  mordor.appendChild(gollum)
  // Remove the ring from Frodo and give it to Gollum
  var theRing = body.querySelector('#the-ring')
  // var frodo = mordor.querySelectorAll('li')[0]
  var theRingForsaken = theRing.parentNode.removeChild(theRing)
  gollum.appendChild(theRingForsaken)
  // Move Gollum into Mount Doom
  var theLostHobbit = gollum.parentNode.removeChild(gollum)
  mountDoom.appendChild(theLostHobbit)
}

// weWantsIt()

// Part 12

function thereAndBackAgain () {
  // remove Gollum and the Ring from the document
  var gollum = document.querySelector('#gollum')
  gollum.parentNode.removeChild(gollum)
  // remove all the buddies from the document
  var theBuddies = rivendell.querySelectorAll('div li')
  var theHobbits = body.querySelectorAll('.hobbit')
  theBuddies.forEach(function (name) {
    name.parentNode.removeChild(name)
  })
  // Move all the hobbits back to the shire
  var theScouring = document.createElement('ul')
  theHobbits.forEach(function (name) {
    theScouring.appendChild(name)
  })
  theShire.append(theScouring)
}

// thereAndBackAgain()

window.addEventListener('click', hobbitTheme)
