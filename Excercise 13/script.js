

// function createCard(title, cName, views, monthsOld, duration, thumbnail){
//     // Finish this function
// }

function createCard(){
    var title=document.getElementById("titleInput").value;
    var duration=document.getElementById("durationInput").value;
    var channel=document.getElementById("channelInput").value;
    var age=document.getElementById("ageInput").value;
    var views=document.getElementById("viewsInput").value;
    var thumbnail=document.getElementById("thumbnailInput").value;

    
    function formatNumber(views) {
        if (views >= 1000000) {
          return (views / 1000000).toFixed(1) + "M";
        } else if (views >= 1000) {
          return (views / 1000).toFixed(1) + "K";
        } else {
          return views;
        }
      }
   
 var view=formatNumber(views);

    var new_div=document.getElementById("contain");
    let card_div=`<div class="card" id="videoCard">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <span id="duration">${duration}</span>
            </div>
            <div class="textt">
                <div id="title">${title}</div>
                <div class="textt2">
                    <span id="channel_name">${channel} . </span>
                    <span id="views">${view} views . </span>
                    <span id="age">${age} months ago</span>
                </div>

            </div>
        </div>`;
    
        new_div.insertAdjacentHTML("beforeend", card_div);


}