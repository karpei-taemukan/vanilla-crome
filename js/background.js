const images = ["1.gif","2.gif","3.gif"];

const chosenImages = images[Math.floor(Math.random()*images.length)];

const bgimage = document.createElement("img");

bgimage.src =  `img/${chosenImages}`;

document.body.appendChild(bgimage);