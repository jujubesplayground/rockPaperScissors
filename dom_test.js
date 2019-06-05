const container = document.querySelector("#container");
console.log(container)
const content = document.createElement('p');
content.classList.add('content');
content.textContent = 'I am RED';
content.style.color="red"

const h3= document.createElement('h3')
h3.textContent = "I m a blue h3"
h3.style.color="blue"

const div = document.createElement('div')
div.style.border = 'solid'
div.style.borderColor = 'black'
div.style.backgroundColor = 'pink'

const h1 = document.createElement('h1')
h1.textContent = 'My name is div'

const p = document.createElement('p')
p.textContent = 'me TOOOOOOOOOO!'

container.appendChild(div)
div.appendChild(h1)
div.appendChild(p);
container.appendChild(h3)
container.appendChild(content);