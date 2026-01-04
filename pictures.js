const url = "./images/";
const fs = require("fs");

function image(imgname) {
  let list = []
  let subfolderurl = `${url}${imgname}`;

  for (let i = 1; i < 6; i++) {
    list.push(`${url}${imgname}/${imgname}${i}.jpg`);

      
  }
  return list;
}


const menuImage = image("appetizer");
const subfolderurl = url;
const files = fs.readdirSync(subfolderurl);
console.log(menuImage)



//Not in use right now, might change in the Future//




