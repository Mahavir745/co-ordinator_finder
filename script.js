const child1 = document.querySelector(".child1");
const child2 = document.querySelector(".child2")
const child2_img = document.querySelector('.child2_img')
const back_btn = document.querySelector("#back_btn")
const input_section = document.querySelector(".input_section")
const selected_area = document.querySelector(".selected_area");
const submit_btn = document.querySelector("#submit_btn")

let storeData = []
let valueAssign = []

for(let i = 1; i<=3; i++){
  let div = document.createElement("div")
  let img = document.createElement("img")
  div.appendChild(img)
  img.src = `./assets/assest_0${i}.jpg`
  child1.append(div)
  storeData.push(div)
}


storeData.forEach((image,index)=>{
  image.addEventListener("click",()=>{
    const img = image.children[0]
    child2.style.display = "flex"
    child2_img.src = img.src
    child1.style.display = "none"
  })
})

back_btn.addEventListener("click" ,()=>{
  child2.style.display = "none"
  child1.style.display = "flex"
})



let x , y, found = false;
let object ={}

child2_img.addEventListener("mousedown",(e)=>{
  x = e.offsetX;
  y = e.offsetY;

  found = true;
  selected_area.style.display = "block";
  selected_area.style.left = `${x}px`;
  selected_area.style.top = `${y}px`;
})

child2_img.addEventListener("mousemove",(e)=>{
  
  if(found){
  const x2 = e.offsetX;
  const y2 = e.offsetY;

  const width = Math.abs(x2 - x);
  const height = Math.abs(y2 - y);
  const left = Math.min(x,x2);
  const top = Math.min(y,y2)

  selected_area.style.left = `${left}px`
  selected_area.style.top = `${top}px`
  selected_area.style.width = `${width}px`
  selected_area.style.height = `${height}px`

  object["x"] =   selected_area.style.left;
  object["y"] =   selected_area.style.top;
  object["width"] =   selected_area.style.width;
  object["height"] = selected_area.style.height;
  }
})

child2_img.addEventListener("mouseup",()=>{
  found = false;
  input_section.style.display = "flex"
  selected_area.style.display = "none"

})

submit_btn.addEventListener('click',()=>{
  const keyName = document.querySelector("#keyName").value

  if(keyName!=""){
    let data = {
      x: object.x,
      y: object.y,
      width: object.width,
      height: object.height,
    }
    
    let value = {}
    value[keyName] = data
    
    window.alert(`Successfully Added:\n${JSON.stringify(value)}`)
    valueAssign.push(value)
    console.clear()
    
    console.log(valueAssign)
    input_section.style.display = "none"
  }
})

