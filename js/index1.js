$(function () {
    var $inicio = $("#inicio"), $fin = $("#fin");
    var info ="";
    $("img", $inicio).draggable({
        cancel: "a.ui-icon",
        rever: "invalid",
        containment: "document",
        helper:"clone",
        cursorAt: { bottom: 0 },
        drag: function(){
            info = [ui.draggable];
            console.log(info);
        }
    }); 
    
    $fin.droppable({
        accept: "#inicio > img",
        classes: {
            "ui-droppable-active": "ui-state-highlight"
        },
        drop: function(event, ui){
            guardar(ui.draggable);
        }
    })
});
https://stackoverflow.com/questions/27263460/using-jquery-to-drag-and-drop-get-value-from-dropped-div

https://jqueryui.com/draggable/#events