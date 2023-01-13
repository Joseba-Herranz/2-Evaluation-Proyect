var vInicio = new Array;
var vFin = new Array;

//0 significa visible y 1 invisible

for(let x = 0; x < 10; x++){
    vInicio [x] = 0;
    vFin [x] = 1;
}

$(function () {
    // var inicio = $("#inicio");
    // var fin = $("#fin");
    

    // $("img", inicio).draggable({
    //     cancel: "a.ui-icon",
    //     rever: "invalid",
    //     containment: "document",
    //     helper:"clone",
    //     cursorAt: { bottom: 0 },
    //     drag: function(event, ui){
            
    //         // console.log($(this).attr("id"));
    //         info = $(this).attr("id");
    //         vInicio[info] = 1;
    //         console.log(vInicio);
    //         // console.log(info);
    //         $(this).css('visibility', 'hidden');
            
    //     }
    // }); 
    
    // $(fin).droppable({
    //     accept: "#inicio > img",
    //     classes: {
    //         "ui-droppable-active": "ui-state-highlight"
    //     },
    //     drop: function(event, ui){
    //         // $(info).css('visibility', 'visible');
    //         console.log(info);
    //         var cambio;
    //         // document.getElementById(info) = cambio;

    //         // cambio.css('visibility', 'visible');

    //         vFin[info] = 0;
    //         console.log(vFin);
    //     }
    // })

    $("#inicio img").draggable({
        revert: "invalid",
        refreshPositions: true,
        drag: function (event, ui) {
            ui.helper.addClass("draggable");
        },
        stop: function (event, ui) {
            ui.helper.removeClass("draggable");
            var image = this.src.split("/")[this.src.split("/").length - 1];
            if ($.ui.ddmanager.drop(ui.helper.data("draggable"), event)) {
                alert(image + " dropped.");
            }
            else {
                alert(image + " not dropped.");
            }
        }
    });
    $("#fin").droppable({
        drop: function (event, ui) {
            if ($("#fin img").length == 0) {
                $("#fin").html("");
            }
            ui.draggable.addClass("dropped");
            $("#fin").append(ui.draggable);
        }
    });





});

// https://stackoverflow.com/questions/27263460/using-jquery-to-drag-and-drop-get-value-from-dropped-div

// https://jqueryui.com/draggable/#events