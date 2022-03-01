let showBtn = document.querySelector(".menu-icon");
let closeBtn = document.querySelector(".close-btn");
let menuList = document.querySelector(".menu-list");


showBtn.addEventListener("click", () => {
    console.log("what")
    menuList.style.marginRight = "0";
});

closeBtn.addEventListener("click", () => {
    console.log("what")
    menuList.style.marginRight = "-100%";
});

// let currentLocation = location.href;
// let menuItem = document.querySelectorAll(".active-list");
// let menuLength = menuItem.length;
// console.log(currentLocation)
// console.log(menuItem)
// console.log(menuLength)
// for(let i = 0; i<menuLength; i++){
//     if(menuItem[i] === currentLocation){
//         menuItem[i].classList.add("active");
//     }
// }