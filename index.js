document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  // ADD CODE HERE!

  // √1. add listenrer to capture keypress
  // √2. create li for each direction key 
  // 3. add click listener on the move button 
  // 4. remove li from the list after move button is clicked 

  const movesContainer = document.querySelector("#moves-container")
  const moveButton = document.querySelector('#move-button')

  function createLi(direction){
    const li = document.createElement("li")
    li.textContent = direction 
    movesContainer.append(li)

  }
  document.addEventListener("keydown", function(e){
    if(e.key === "ArrowLeft"){
      createLi("left")
    } else if(e.key === "ArrowRight"){
      createLi("right")
    } else if(e.key === "ArrowDown"){
      createLi("down")
    } else if(e.key === "ArrowUp"){
      createLi("up")
    } else if(e.key === "Backspace"){
        if(directionsPresent()){
      movesContainer.lastChild.remove()
      }   else {
      alert("Sorry, no move directions inserted --bleep--blooop!")
      }
    }
  })

  moveButton.addEventListener("click", function(e) {
      if(directionsPresent()){
      // if(document.querySelector('li')){
        const directionLi = document.querySelector('li')
        const direction = directionLi.textContent
        directionLi.remove()
        move(direction)
      } else {
        alert("Sorry, no move directions inserted --bleep--blooop!")
      }
  })

  function directionsPresent(){
    return !!document.querySelector('li')
  }
})



//resources: 
//js event reference
//get last child of an element   