const colors = ['Red','Blue','Yellow','Purple','Green']
const cores = ['Vermelho','Azul','Amarelo','Lilás','Verde']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click',function(){
    const randomColor = getRandomColor()
    document.body.style.background = colors[randomColor] 
    color.textContent = cores[randomColor]      
})

function getRandomColor(){
    return Math.floor(Math.random() * colors.length) //floor arredonda os resultados
}