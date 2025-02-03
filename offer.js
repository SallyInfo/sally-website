const danner = document.querySelector('.danner');
const InputColor = document.querySelector('.input-color');

InputColor.addEventListener('input', () =>{
    danner.style.background = InputColor.value;
});



// const danner = document.getElementById('danner');
// const color = document.getElementById('color');
// InputColor.forEach(danner =>{
//     InputColor.addEventListener('input',()=>{
//         danner.style.background = InputColor.value;
//     });
// });