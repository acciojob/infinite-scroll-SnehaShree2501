// var list=document.getElementById("infi-list")
// function addItems(){
//     for (var i=1;i<10;i++){
//         var li = document.createElement("li"); //this is for each list element
//         li.textContent = `Item ${i}`;
//         list.appendChild(li);
//     }
//     var n=10;
//     list.addEventListener("scroll", addAtEnd);
//     function addAtEnd(){
//         if(list.scrollHeight - list.scrollTop - list.clientHeight < 1) { //Scroll Height is the total height, scrollTop is the top height of the
//                                                     //of the scroll of page including everything, clientHeigth is viewable height of an element in pixels,
//                                                     // including padding, but not the border, scrollbar or margin.
//                                                     //this is for each list element
//                                                     list.innerHTML += `
//                                                     <li>Item ${n+1}</li>
//                                                     <li>Item ${n+2}</li>
//                                                     `
//                                                     n+=2;
//         }
//     }

// }


let list = document.querySelector("#infi-list");
console.log(list);
 
for(let i=1; i<=10; i++){
  list.innerHTML += `<li>Item ${i}</li>`
}
console.log("I am running?")
let n = 10;
 
list.addEventListener("scroll", ()=>{
  // console.log("used scrolled the list");
  if(list.scrollHeight - list.scrollTop - list.clientHeight < 1){
    // console.log("you reached the end");
    list.innerHTML += `
    <li>Item ${n+1}</li>
    <li>Item ${n+2}</li>
    `
    n+=2;
  }
})