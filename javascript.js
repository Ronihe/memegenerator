// generate  meme functions
let genMeme = {
  // max meme on the screen is two;

  url: [],
  topText: [],
  bottomText: [],

// add meme function
  addMeme: function(url, topText, bottomText){
    this.url.push(url);
    this.topText.push(topText);
    this.bottomText.push(bottomText);
  },

//delete Meme
  deleteMeme: function(position){
    this.url.splice(position, 1);
    this.topText.splice(position, 1);
    this.bottomText.splice(position, 1)
  }
};



let handlers = {
  addMeme: function(){
    let url = document.getElementById("url").value;
    let textOnTop = document.getElementById("textOnTop").value;
    let textAtBottom = document.getElementById("textAtBottom").value;

    genMeme.addMeme(url, textOnTop, textAtBottom);
    view.displayMeme();
    document.getElementById("myform").reset();
  },

  deleteMeme: function(position){
    // genMeme.url = genMeme.url.slice(0,2);
    // genMeme.topText = genMeme.topText.slice(0,2);
    // genMeme.bottomText = genMeme.bottomText.slice(0,2);

    genMeme.deleteMeme(position);
    view.displayMeme();
  }

}

let generateTemplate = function(divId, url, topText, bottomText) {
  let outputString = '\
    <div class="col-sm font-weight-bold">\
      <div class="container" onclick="handlers.deleteMeme('+divId+')">\
        <img src='+url+' style="width:30%;" class="img-thumbnail">\
        <div class="top">'+topText+'</div>\
        <div class="bottom">'+bottomText+'</div>\
      </div>\
    </div>'
  return outputString;
}


let view = {
  displayMeme: function(){
    let container = document.getElementById('memeContainer');
    container.innerHTML = "";

    genMeme.url.forEach(function(url, i){
      let htmlString = generateTemplate(i, url, genMeme.topText[i], genMeme.bottomText[i])
      container.insertAdjacentHTML('beforeend', htmlString);
    });
  }
}

  // <div class="container" onclick="handlers.deleteMeme(0)">
  //               <img id="memeImg_1"  style="width:80%;">
  //               <div id="top_1" class="top"></div>
  //               <div id="bottom_1" class="bottom"></div>
  //           </div>





// V1
// function addMeme(){
//     //create the img
//     let url = document.getElementById("url").value;
//     let memeImg = document.getElementById("memeImg");
//     memeImg.src = url;

//     //create the top text
    
//     let textOnTop = document.getElementById("textOnTop").value;
//     let memeTextOnTop = document.getElementById("top");
//     memeTextOnTop.innerText = textOnTop;


//     // //create the bottom text
//     let textAtBottom = document.getElementById("textAtBottom").value;
//     let memeTextAtBottom = document.getElementById("bottom");
//     memeTextAtBottom.innerText = textAtBottom;





// }


