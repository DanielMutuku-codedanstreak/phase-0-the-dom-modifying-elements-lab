// Write your code here!
//no longer has DOM node 'main#main'
const body = document.getElementsByTagName("body")[0]
const main = body.querySelector("main#main")
body.removeChild(main)
//has a 'newHeader' variable that points to an <h1> node
const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.textContent = 'DANIEL MAKAU MUTUKU is the champion'