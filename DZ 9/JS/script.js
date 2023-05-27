// Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.


const button = document.querySelector('.btn');
const square = document.querySelector('.sqr');

button.addEventListener('click', function() {
      square.classList.toggle('click');

      if (square.classList.contains('click')) {
        square.style.backgroundColor = 'green';
        square.style.width = '100px';
        square.style.height = '100px';
      } else {
        square.style.backgroundColor = 'red';
        square.style.width = '200px';
        square.style.height = '200px';
      }
    })

    // 2 - Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.


const button2 = document.querySelector('.btn2');
const square2 = document.querySelector('.sqr2');
    
    button2.addEventListener('click', function() {
          square2.classList.toggle('click');
    
          if (square2.classList.contains('click')) {
            square2.style.backgroundColor = 'blue';
            console.log("new color is dark sky blue");
            
          } else {
            square2.style.backgroundColor = 'pink';
            console.log("new color is pinky pink");
          }
    })

    // 3 - Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.
    const btn3 = document.getElementById('btn3');
    const square3 = document.getElementById('square3');
    
    btn3.addEventListener('click', () => {
      const currentWidth = square3.offsetWidth;
      const currentHeight = square3.offsetHeight;
      
      const newWidth = currentWidth + 20;
      const newHeight = currentHeight + 20;
      
      square3.style.width = `${newWidth}px`;
      square3.style.height = `${newHeight}px`;
    });

     // 4 - Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.


const btn4 = document.getElementById('btn4');
const rootDiv = document.querySelector('.root');

btn4.addEventListener('click', () => {
  const paragraph = document.createElement('p');
  paragraph.textContent = 'Текст параграфа';
  paragraph.classList.add('blue-paragraph');
  rootDiv.appendChild(paragraph);
});


// 5 - Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.

const btn5 = document.getElementById('btn5');
const rootDiv2 = document.querySelector('.root2');
let isBlue = true;

btn5.addEventListener('click', () => {
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Текст параграфа';
    
    if (isBlue) {
      paragraph.classList.add('blue-paragraph');
    } else {
      paragraph.classList.add('green-paragraph');
    }
    
    rootDiv2.appendChild(paragraph);
    
    isBlue = !isBlue; 
  });