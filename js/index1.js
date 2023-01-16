var guardados = new Array;

$(function () {
 
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
    var x=0;
    $("#fin").droppable({
        drop: function (event, ui) {
            if ($("#fin img").length == 0) {
                $("#fin").html("");
            }
            console.log(ui.draggable.attr('id'));
            ui.draggable.addClass("dropped");
            $("#fin").append(ui.draggable);
            
            guardados[x] = ui.draggable.attr('id');
            x++;
        }
    });

});


function guardado(){
    console.log(guardados);

}

function borrado(){

}

// https://stackoverflow.com/questions/27263460/using-jquery-to-drag-and-drop-get-value-from-dropped-div

// https://jqueryui.com/draggable/#events