var guardados = new Array;

var show = new Array;
    show[0] =  '<img id="0" src="img/bbva.png" alt="BBVA" onclick="grafico()">';
    show[1] =  '<img id="1" src="img/caixa.png" alt="Caixa" onclick="eleccion(1)">';
    show[2] =  '<img id="2" src="img/cellnex.png" alt="Cellnex" onclick="eleccion(2)">';
    show[3] =  '<img id="3" src="img/ferrovial.png" alt="Ferrovial" onclick="eleccion(3)">';
    show[4] =  '<img id="4" src="img/iberdrola.png" alt="Iberdrola" onclick="eleccion(4)">';
    show[5] =  '<img id="5" src="img/inditex.png" alt="Inditex" onclick="eleccion(5)">';
    show[6] =  '<img id="6" src="img/naturgy.png" alt="Naturgy" onclick="eleccion(6)">'; 
    show[7] =  '<img id="7" src="img/repsol.png" alt="Repsol" onclick="eleccion(7)">';
    show[8] =  '<img id="8" src="img/santander.png" alt="Santander" onclick="eleccion(8)">';
    show[9] =  '<img id="9" src="img/telefonica.png" alt="Telefonica" onclick="eleccion(9)">';

var imagesId = [];
var storedImagesId = JSON.parse(localStorage.getItem("imagesId"));

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
            imagesId.push(ui.draggable.attr('id'));

            
            localStorage.setItem("imagesId", JSON.stringify(imagesId));

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
        document.write('<canvas id="myChart"></canvas>');
        document.write("<br>");

    }
    
}
function grafico(){
        var ctx = document.getElementById("myChart").getContext("2d");
        var myChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: "# of Votes",
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)"
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)"
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    
    // const labels = Utils.months({count: 7});
    // const data = {
    // labels: labels,
    // datasets: [{
    //     label: 'My First Dataset',
    //     data: [65, 59, 80, 81, 56, 55, 40],
    //     fill: false,
    //     borderColor: 'rgb(75, 192, 192)',
    //     tension: 0.1
    // }]
    // };

//     var ctx = document.getElementById('myChart').getContext('2d');
// var chart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         data: {
//     labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
//     datasets: [{
//         label: 'Ventas',
//         data: [12, 19, 3, 5],
//         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//     }]
// },

//     },
//     options: {
//     scales: {
//         y: {
//             beginAtZero: true
//         }
//     },
//     title: {
//         display: true,
//         text: 'Ventas mensuales'
//     }
// }

// });

}


function eleccion(){
    
}
// https://stackoverflow.com/questions/27263460/using-jquery-to-drag-and-drop-get-value-from-dropped-div

// https://jqueryui.com/draggable/#events