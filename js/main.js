const sildes = document.querySelector('#slider>ul'); //ul 슬라이드 컨테이너
const sildeImg = document.querySelectorAll('#slider>ul li'); //슬라이드들
const imgWidth = sildeImg[0].children[0].offsetWidth; //이미지 가로길이(css적용 후)
const slideCount = sildeImg.length;  //슬라이드 개수
const dots = document.querySelector('.dots');

sildes.style.width = `${imgWidth * (slideCount + 2)}px`

let currentIdx = 0;
let speed = 0.5; 

function makeClone() {
   let clone_first = sildeImg[0].cloneNode(true);
   let clone_last = sildes.lastElementChild.cloneNode(true);
   sildes.append(clone_first);
   sildes.firstElementChild.before(clone_last);
}
function initFunction() {
   sildes.style.width = `${imgWidth * (slideCount + 2)}px`
   sildes.style.left = `-${imgWidth}px`
}

function next() {
   if (currentIdx <= slideCount - 1) {   
      sildes.style.left = `-${(currentIdx + 2) * imgWidth}px`
      sildes.style.transition = `${speed}s ease-out`;
   }
   if (currentIdx === slideCount - 1) { 
      setTimeout(function () {
         sildes.style.left = `-${imgWidth}px`
         sildes.style.transition = `${0}s ease-out`;
      }, 500);
      currentIdx = -1;
   }
   currentIdx += 1;
}

function prev() {
   if (currentIdx >= 0) {
      sildes.style.left = `-${currentIdx * imgWidth}px`;
      sildes.style.transition = `${speed}s ease-out`;
   }
   if (currentIdx === 0) {
      setTimeout(function () {
         sildes.style.left = `-${slideCount * imgWidth}px`;
         sildes.style.transition = `${0}s ease-out`;
      }, 500)
      currentIdx = slideCount;
   }
   currentIdx -= 1;
}

makeClone();  //이미지들을 복사해서 앞, 뒤에 붙여넣는 함수
initFunction(); //초기화해주는 함수

let newBtn;

//dots 만들기
for (let i = 0; i < slideCount; i++) {
   newBtn = document.createElement('button')
   dots.append(newBtn)
}

console.log('dots?', dots)

const dotBtns = document.querySelectorAll('.dots > button')

dotBtns.forEach(function (dot, dotNumber) {
   dot.onclick = function () {
      sildes.style.left = `-${(dotNumber + 1) * imgWidth}px`
   }
})

/*
   A.cloneNode(true)   -A를 통채로 복사
   A.lastElementChild  -부모A 자식중에 마지막 노드(비요소(엔터, 공백...) 포함X, lastChild와 차이)
*/
