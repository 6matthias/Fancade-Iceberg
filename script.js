$(document).ready(function() {

    for(i = 0; i<10; i++) {
        let tier = `tier${i}`;
        $("#tiers").append(`<div class="tier" id="${tier}"></div>`)
    }  // Create the divs that are going to hold the entries above the iceberg image

    $("#iceberg").append(`<img src="assets/icebergImage.png" id="icebergImage">`) //Add image

    $.getJSON('https://raw.githubusercontent.com/6matthias/Fancade-Iceberg/main/assets/data.json', function(data) {
        for (const [key, value] of Object.entries(data)) {
            $(`#tier`+data[key].tier).append(`<p class="entry">${key}</p>`)
        }

        var tmpImg = new Image();
        tmpImg.src = "assets/icebergImage.png"

        $(tmpImg).one('load',function(){ //wait for image to load
            $("#webContainer").css("max-width", tmpImg.width + "px") //Get iceberg image size and set the website container to be it's width size
            $(".tier").fitText(4)
        });

    });

})
