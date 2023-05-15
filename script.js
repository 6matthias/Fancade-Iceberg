$(document).ready(function() {

    for(i = 0; i<10; i++) {
        let tier = `tier${i+1}`;
        $("#tiers").append(`<div class="tier" id="${tier}"></div>`) 
        $(`#${tier}`).append("<p>hello</p>")
    }

    $("#iceberg").append(`<img src="assets/icebergImage.png" id="icebergImage">`)

    var tmpImg = new Image();
    tmpImg.src = "assets/icebergImage.png"

    $(tmpImg).one('load',function(){
        $("#webContainer").css("width", tmpImg.width + "px")
      });
})