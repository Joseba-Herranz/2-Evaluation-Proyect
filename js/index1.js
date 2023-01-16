var guardados = new Array;

var show = new Array;
    show[0] =  '<img id="0" src="img/bbva.png" alt="BBVA">';
    show[1] =  '<img id="1" src="img/caixa.png" alt="Caixa">';
    show[2] =  '<img id="2" src="img/cellnex.png" alt="Cellnex">';
    show[3] =  '<img id="3" src="img/ferrovial.png" alt="Ferrovial">';
    show[4] =  '<img id="4" src="img/iberdrola.png" alt="Iberdrola">';
    show[5] =  '<img id="5" src="img/inditex.png" alt="Inditex">';
    show[6] =  '<img id="6" src="img/naturgy.png" alt="Naturgy">'; 
    show[7] =  '<img id="7" src="img/repsol.png" alt="Repsol">';
    show[8] =  '<img id="8" src="img/santander.png" alt="Santander">';
    show[9] =  '<img id="9" src="img/telefonica.png" alt="Telefonica">';


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
            // if ($.ui.ddmanager.drop(ui.helper.data("draggable"), event)) {
            //     alert(image + " dropped.");
            // }
            // else {
            //     alert(image + " not dropped.");
            // }
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

    $('#borrar').click(function(){
        location.reload();
    });

});


function borrar(){
    $(function (){
        $('#borrar').click(function(){
            location.reload();
        });
    });
}

function guardado(){
    console.log(guardados);
    
    for(let x=0; x<guardados.length; x++){
        document.write(`<style>img
        { height: 100px;
          width: 100px;
          margin: 2px;
        } </style>`);

        document.write(show[guardados[x]]);

    }
    
}

const labels = Utils.months({count: 7});
const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

// https://stackoverflow.com/questions/27263460/using-jquery-to-drag-and-drop-get-value-from-dropped-div

// https://jqueryui.com/draggable/#events