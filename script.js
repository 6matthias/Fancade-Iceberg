var infoShow = false

function showInfo(show) {
    if(show == infoShow){
        return
    }

    let scroll = $("#webContainer").scrollTop()

    if (show) {
        $("#infoSection").show()
        $("#webContainer").animate({height: "75vh"}, "slow")
        $("#infoSection").animate({height: "25vh"}, "slow")
        $("#webContainer").scrollTop(scroll)
    } else {
        $("#infoSection").animate({height: "0vh"}, "slow")
        $("#webContainer").animate({height: "100vh"}, "slow")
    }

    infoShow = show
}

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
            let maxW = tmpImg.width + "px"
            $("#webContainer").css("max-width", maxW) //Get iceberg image size and set the website container to be it's width size
            $("#infoSection").css("max-width", maxW)
            $(".tier").fitText(4)
            $("h1").fitText(1)

            $("#blackout").fadeOut("slow")
        });

        $(document).on('click', '.entry', function () {
            let clickEntry = jQuery(this).text()
            $("#entryTitle").text(clickEntry)
            $("#entryCredits").text("• "+data[clickEntry].credits)
            $("#entryDescription").text(data[clickEntry].description)

            showInfo(true)
        });

    });



})
