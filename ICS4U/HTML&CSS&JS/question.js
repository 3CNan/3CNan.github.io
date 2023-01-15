var questions = [
  {question:"What's your name?"},
  {question:"What game do you like?"},
  {question:"How old are you?"},
  {question:"Are you study or work?"}
]


;(function(){

  var tTime = 100  
  var wTime = 200  
  var eTime = 1000 


  var position = 0

  putQuestion()

  progressButton.addEventListener('click', validate)
  inputField.addEventListener('keyup', function(e){
    transform(0, 0) // ie hack to redraw
    if(e.keyCode == 13) validate()
  })


  function putQuestion() {
    inputLabel.innerHTML = questions[position].question
    inputField.value = ''
    inputField.type = questions[position].type || 'text'  
    inputField.focus()
    showCurrent()
  }
  
  function done() {

    register.className = 'close'
    
    var h1 = document.createElement('h1')
    h1.appendChild(document.createTextNode('Thanks answering these questions!'))
    setTimeout(function() {
      register.parentElement.appendChild(h1)     
      setTimeout(function() {h1.style.opacity = 1}, 50)
    }, eTime)
    
  }

  function validate() {

    // set the value of the field into the array
    questions[position].value = inputField.value

    // check if the pattern matches
    if (!inputField.value.match(questions[position].pattern || /.+/)) wrong()
    else ok(function() {
      
      // set the progress of the background
      progress.style.width = ++position * 100 / questions.length + 'vw'

      // if there is a new question, hide current and load next
      if (questions[position]) hideCurrent(putQuestion)
      else hideCurrent(done)
             
    })

  }


  function hideCurrent(callback) {
    inputContainer.style.opacity = 0
    inputProgress.style.transition = 'none'
    inputProgress.style.width = 0
    setTimeout(callback, wTime)
  }

  function showCurrent(callback) {
    inputContainer.style.opacity = 1
    inputProgress.style.transition = ''
    inputProgress.style.width = '100%'
    setTimeout(callback, wTime)
  }

  function transform(x, y) {
    register.style.transform = 'translate(' + x + 'px ,  ' + y + 'px)'
  }

  function ok(callback) {
    register.className = ''
    setTimeout(transform, tTime * 0, 0, 10)
    setTimeout(transform, tTime * 1, 0, 0)
    setTimeout(callback,  tTime * 2)
  }

  function wrong(callback) {
    register.className = 'wrong'
    for(var i = 0; i < 6; i++) // shaking motion
      setTimeout(transform, tTime * i, (i%2*2-1)*20, 0)
    setTimeout(transform, tTime * 6, 0, 0)
    setTimeout(callback,  tTime * 7)
  }

}())