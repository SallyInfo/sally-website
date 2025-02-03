const productContainers = [...document.querySelectorAll(".product-container")];

const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimnsions = item.getBoundingClientRect();
  let containerWidth = containerDimnsions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });
  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});


// ??????????????????????????????????????????????????????????????????????????????


const btnGem = document.getElementById("btn-gem");              //**//
const GemBox = document.getElementById("gem-box");             //**//

btnGem.onclick = () => {
    if (btnGem.classList.contains('fa-gem')) {
        btnGem.classList.replace('fa-gem', 'fa-close');         //**//
        GemBox.classList.add('show');                          //**//
      }
      else {
        GemBox.classList.remove('show');
        btnGem.classList.replace('fa-close', 'fa-gem');        //**//
    }
}

